import { toast } from "sonner";
import { Link2, Pencil, Trash } from "lucide-react";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hook/UseApiMutation";
import { useRenameModal } from "@/store/useRenameModal";
import ConfirmModal from "@/components/modal/ConfirmModal";

interface BoardActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

const BoardActions = ({
  children,
  side = "bottom",
  sideOffset = 8,
  id,
  title,
}: BoardActionsProps) => {
  const { open } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);

  const onCopyBoardLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => {
        toast.success("Board Link Copied!");
      })
      .catch(() => {
        toast.error("Failed To Copy Board Link!");
      });
  };

  const onDeleteBoard = () => {
    mutate({ id })
      .then(() => {
        toast.success("Board Deleted Successfully!");
      })
      .catch(() => {
        toast.error("Failed To Delete Board!");
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
      >
        <DropdownMenuItem
          onClick={onCopyBoardLink}
          className="p-3 cursor-pointer"
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy Board Link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => open(id, title)}
          className="p-3 cursor-pointer"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete Board"
          description="This Will Delete The Board and all Of its Contents."
          disabled={pending}
          onConfirm={onDeleteBoard}
        >
          <Button
            variant="ghost"
            className="p-3 hover:text-red-600 cursor-pointer text-sm w-full justify-start font-normal text-red-500"
          >
            <Trash className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BoardActions;
