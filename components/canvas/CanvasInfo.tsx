import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { useRenameModal } from "@/store/useRenameModal";
import BoardActions from "@/components/board/BoardActions";

interface CanvasInfoProps {
  boardId: string;
}

const CanvasInfo = ({ boardId }: CanvasInfoProps) => {
  const { open } = useRenameModal();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (typeof window !== "undefined" && data) {
    document.title = `${data.title} | Vero | Real-Time Collaboration, Simplified`;
  }

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center z-10 shadow-md">
      <Hint label="Go To Boards" side="bottom" sideOffset={10}>
        <Button asChild className="px-2" variant="board">
          <Link href="/">
            <Image src="/Logo.svg" alt="Vero Logo" height={30} width={30} />
            <span className="font-semibold font-kalam text-xl pt-1 text-black">
              Vero
            </span>
          </Link>
        </Button>
      </Hint>
      <div className="bg-neutral-200 h-6 w-[1px] rounded-sm"></div>
      <Hint label="Edit Title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-base px-2 font-semibold"
          onClick={() => open(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <div className="bg-neutral-200 h-6 w-[1px] rounded-sm"></div>
      <BoardActions
        id={data._id}
        title={data.title}
        side="bottom"
        sideOffset={10}
      >
        <div>
          <Hint label="Main Menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </BoardActions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center w-[300px]" />
  );
};

export default CanvasInfo;
