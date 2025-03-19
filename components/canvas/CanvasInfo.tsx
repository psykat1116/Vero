import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

import Hint from "../Hint";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRenameModal } from "@/store/useRenameModal";
import BoardActions from "../board/BoardActions";
import { Menu } from "lucide-react";

interface CanvasInfoProps {
  boardId: string;
}

const CanvasInfo = ({ boardId }: CanvasInfoProps) => {
  const { open } = useRenameModal();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center">
      <Hint label="Go To Boards" side="bottom" sideOffset={10}>
        <Button asChild className="px-2" variant="board">
          <Link href="/">
            <Image src="/Logo.svg" alt="Vero Logo" height={30} width={30} />
            <span className="font-semibold text-xl text-black">Vero</span>
          </Link>
        </Button>
      </Hint>
      <div className="bg-neutral-700 px-1.5"></div>
      <Hint label="Edit Title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-base px-2 font-semibold"
          onClick={() => open(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <div className="bg-neutral-700 px-1.5"></div>
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
