import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const images = [
  "/placeholder/1.svg",
  "/placeholder/2.svg",
  "/placeholder/3.svg",
  "/placeholder/4.svg",
  "/placeholder/5.svg",
  "/placeholder/6.svg",
  "/placeholder/7.svg",
  "/placeholder/8.svg",
  "/placeholder/9.svg",
  "/placeholder/10.svg",
  "/placeholder/11.svg",
  "/placeholder/12.svg",
  "/placeholder/13.svg",
  "/placeholder/14.svg",
  "/placeholder/15.svg",
  "/placeholder/16.svg",
  "/placeholder/17.svg",
  "/placeholder/18.svg",
];

// * ------------------------ Create A New Board ------------------------

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Please Login To Continue!");
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });

    return board;
  },
});

// * ------------------------- Delete Boards -------------------------

export const remove = mutation({
  args: {
    id: v.id("boards"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Please Login To Continue!");
    }

    const board = await ctx.db.get(args.id);
    if (!board) {
      throw new Error("Board Does Not Exist!");
    }

    if (
      identity.org_role !== "org:admin" &&
      board.authorId !== identity.subject
    ) {
      throw new Error("Only Admins and Board Creators Can Delete Boards!");
    }

    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) =>
        q.eq("userId", identity.subject).eq("boardId", args.id)
      )
      .unique();

    if (existingFavorite) {
      await ctx.db.delete(existingFavorite._id);
    }

    await ctx.db.delete(args.id);
  },
});

// * ------------------------- Update Board Title -------------------------

export const update = mutation({
  args: { id: v.id("boards"), title: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Please Login To Continue!");
    }

    const board = await ctx.db.get(args.id);
    if (!board) {
      throw new Error("Board Does Not Exist!");
    }

    if (
      identity.org_role !== "org:admin" &&
      board.authorId !== identity.subject
    ) {
      throw new Error("Only Admins and Board Creators Can Rename Boards!");
    }

    const title = args.title.trim();
    if (!title) {
      throw new Error("Title Is Required");
    }
    if (title.length === 0) {
      throw new Error("Title cannot be empty");
    }
    if (title.length > 60) {
      throw new Error("Title cannot be longer than 60 characters");
    }

    const updateBoard = await ctx.db.patch(args.id, { title });

    return updateBoard;
  },
});

// * ------------------------- Favorite Board -------------------------

export const favorite = mutation({
  args: { id: v.id("boards"), orgId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Please Login To Continue!");
    }

    const board = await ctx.db.get(args.id);
    if (!board) {
      throw new Error("Board Does Not Exist!");
    }

    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) =>
        q.eq("userId", identity.subject).eq("boardId", board._id)
      )
      .unique();

    if (existingFavorite) {
      await ctx.db.delete(existingFavorite._id);
    } else {
      await ctx.db.insert("userFavorites", {
        orgId: args.orgId,
        userId: identity.subject,
        boardId: board._id,
      });
    }

    return board;
  },
});

// * ------------------------- Get Board ------------------------- //

export const get = query({
  args: { id: v.id("boards") },
  handler: async (ctx, args) => {
    const board = await ctx.db.get(args.id);
    if (!board) {
      throw new Error("Board Does Not Exist!");
    }

    return board;
  },
});
