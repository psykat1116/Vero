import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="flex items-center cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          <p className="-mt-0.5">Invite Members</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 w-[55rem] bg-red-700 border-none">
        <VisuallyHidden>
          <DialogTitle></DialogTitle>
        </VisuallyHidden>
        <OrganizationProfile
          appearance={{
            elements: {
              rootBox: {
                height: "calc(100vh - 50px)",
                overflowY: "scroll",
              },
            },
          }}
          routing="hash"
        />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
