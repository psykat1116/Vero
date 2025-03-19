import EmptyBoards from "../empty/EmptyBoards";
import EmptyFavorites from "../empty/EmptyFavorites";
import EmptySearch from "../empty/EmptySearch";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BoardCard from "./BoardCard";
import NewBoardCard from "./NewBoardCard";

interface BoardListProps {
  orgId: string;
  search?: string;
  favorites?: string;
}

const BoardList = ({ orgId, search, favorites }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId, search, favorites });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {favorites ? "Favorite Boards" : "Team Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-8 gap-5 pb-10">
          <NewBoardCard orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data?.length && search) {
    return <EmptySearch />;
  }

  if (!data?.length && favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-8 gap-5 pb-10">
        <NewBoardCard orgId={orgId} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
