import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Link2, Trash } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hook/UseApiMutation";
import { api } from "@/convex/_generated/api";
import ConfirmModal from "../ConfirmModal";
import { Button } from "../ui/button";

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
  const { mutate, pending } = useApiMutation(api.board.remove);

  const onCopyBoardLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => {
        toast.success("Board Link Copied!");
      })
      .catch(() => {
        toast.error("Failed To Copy");
      });
  };

  const onDeleteBoard = () => {
    mutate({ id })
      .then(() => {
        toast.success("Board Deleted Successfully!");
      })
      .catch(() => {
        toast.error("Failed To Delete Board");
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
        <ConfirmModal
          header="Delete Board"
          description="This Will Delete The Board and all Of its Contents."
          disabled={pending}
          onConfirm={onDeleteBoard}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
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
