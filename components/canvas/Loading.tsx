import { Loader } from "lucide-react";

import { InfoSkeleton } from "@/components/canvas/CanvasInfo";
import { ToolbarSkeleton } from "@/components/canvas/Toolbar";
import { ParticipantsSkeleton } from "@/components/canvas/Participants";

const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};

export default Loading;
