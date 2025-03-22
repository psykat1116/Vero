import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { MoreHorizontal } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { formatDistanceToNow } from "date-fns";

import { Skeleton } from "@/components/ui/skeleton";
import { useApiMutation } from "@/hook/UseApiMutation";
import BoardActions from "@/components/board/BoardActions";
import BoardCardFooter from "@/components/board/BoardCardFooter";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const { mutate, pending } = useApiMutation(api.board.favorite);

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const ToggoleFavorite = () => {
    mutate({ id, orgId }).catch(() => {
      toast.error("Failed to Toggle Favorite");
    });
  };

  return (
    <Link href={`board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <div className="opacity-0 group-hover:opacity-50 transition-opacity h-full w-full bg-black" />
          <BoardActions id={id} title={title} side="bottom">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 outline-none cursor-pointer">
              <MoreHorizontal
                className="text-white opacity-75 hover:opacity-100 transition-opacity"
                size={15}
              />
            </button>
          </BoardActions>
        </div>
        <BoardCardFooter
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={ToggoleFavorite}
          disabled={pending}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default BoardCard;
