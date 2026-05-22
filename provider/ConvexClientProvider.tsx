"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";

import AuthLoader from "@/components/auth/AuthLoader";

const convex = process.env.NEXT_PUBLIC_CONVEX_URL
  ? new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)
  : null;

const hasRequiredEnv =
  !!process.env.NEXT_PUBLIC_CONVEX_URL &&
  !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  if (!hasRequiredEnv || !convex) {
    return <>{children}</>;
  }

  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <AuthLoader />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
