import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hook/UseApiMutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface NewBoardCardProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardCard = ({ orgId, disabled }: NewBoardCardProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const handleClick = () => {
    if (disabled || pending) return;
    mutate({ orgId, title: "Untitled" })
      .then((id) => {
        toast.success("Board created!");
        // TODO: Redirect to the new board
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={handleClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (disabled || pending) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New Board</p>
    </button>
  );
};

export default NewBoardCard;
