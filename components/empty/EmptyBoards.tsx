import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hook/UseApiMutation";

const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const handleClick = () => {
    if (!organization) return;

    mutate({
      title: "Untitled Board",
      orgId: organization.id,
    })
      .then((id) => {
        toast.success("Board Created Successfully");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to Create Board");
      });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/EmptyBoards.png"
        alt="EmptyBoards"
        height={250}
        width={250}
      />
      <h2 className="text-2xl font-semibold mt-6">Create Your First Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start By Creating a Board For Your Organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} size="lg" onClick={handleClick}>
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
