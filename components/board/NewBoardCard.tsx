import { toast } from "sonner";
import { useCallback, useEffect } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import Hint from "@/components/Hint";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hook/UseApiMutation";

interface NewBoardCardProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardCard = ({ orgId, disabled }: NewBoardCardProps) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);

  const handleClick = useCallback(() => {
    if (disabled || pending) return;
    mutate({ orgId, title: "Untitled" })
      .then((id) => {
        toast.success("Board created!");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board!");
      });
  }, [disabled, pending, mutate, orgId, router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "b" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        handleClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClick]);

  return (
    <Hint label="Create New Blog [⌘ + B]">
      <button
        disabled={pending || disabled}
        onClick={handleClick}
        className={cn(
          "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6 text-white cursor-pointer",
          (disabled || pending) &&
            "opacity-75 hover:bg-blue-600 cursor-not-allowed"
        )}
      >
        <Plus className="h-12 w-12 stroke-1" />
      </button>
    </Hint>
  );
};

export default NewBoardCard;
