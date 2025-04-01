# 🎯 Vero is a ultra-fast, collaborative whiteboard designed for teams to ideate, sketch, and brainstorm in real time. similar to [Miro](https://www.notion.so/). It is made using [NextJS](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Typescript](https://www.typescriptlang.org/), [Liveblock](https://liveblocks.io/) For Real Time Collaboration, [Clerk](https://clerk.com/) For Authentication, [Convex](https://www.convex.dev/) As Our Database.

## 🎯 Getting Started
First, Clone The Repo The Repository
```bash
git clone https://github.com/psykat1116/Vero.git <folder name>
```

## 🎯 Start The Server
Start The Server on the Local Server. Change The Folder Name To Lower Case.
```bash
cd <folder name>
npm run dev
```

## 🎯 Setup The .env File
Create a .env File In The Root Folder With The Given Environment Variable
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
CLERK_SECRET_KEY =
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL =
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL =
LIVEBLOCK_SECRET_KEY = 
```

## 🎯 Setup The .env.local File
Create a .env.local File In The Root Folder With The Given Environment Variable
```bash
CONVEX_DEPLOYMENT = 
NEXT_PUBLIC_CONVEX_URL = 
```

## 🎯 Setup Liveblock
Log In to the [Liveblock](https://liveblocks.io/) And Add A New Project. You Will Get Private Key From API Section
```bash
LIVEBLOCK_SECRET_KEY = 
```

## 🎯 Setup Clerk Authentication
Login Into The [Clerk](https://clerk.com/) Create A New Project And Select What Login Option You Want To Keep Then Create The Project. You Will Get Two Key
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
CLERK_SECRET_KEY =
```

## 🎯 Setup Convex And Integrate With Clerk Authentication
Create An Account In [Convex](https://www.convex.dev/) And Create A New Project
```bash
npm install convex
```

Go To The [Convex & Clerk](https://docs.convex.dev/auth/clerk) And Go Through The Following Steps Mentioned Below Complete Upto `Step 4` and then Run The Following Commands.
```bash
npm install @clerk/clerk-react
npx convex dev
```

At The Time Of Development `npx convex dev` Must Run All The Time During Development. The below environmental variable will automatically created in `.env.local` file otherwise it Will Be In Settings In Development Mode Then Put It To The Variable.
```bash
NEXT_PUBLIC_CONVEX_URL =
```

After Deploying To Vercel Go To The Project Details In Change From `Development` To `Production`.Then Go To The Project Settings and Copy The `Deployment URL` to `NEXT_PUBLIC_CONVEX_URL` And Create a New `Deploy Key` And Paste It To `CONVEX_DEPLOY_KEY` in `Environment Variables` Section. Don't Need To Change in local `.env.local` file.
```bash
NEXT_PUBLIC_CONVEX_URL =
CONVEX_DEPLOY_KEY =
```

## 🎯 Tell Me You Face Any Problem During The Development & Production Into My Email From This [Profile](https://github.com/psykat1116) Or Tell Me In Issue Section. Tell Me You Want To Suggest Any Update. 