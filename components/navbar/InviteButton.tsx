import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="flex items-center">
          <Plus className="h-4 w-4" />
          <p className="-mt-0.5">Invite Members</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 w-[40rem] bg-transparent border-none">
        <DialogTitle />
        <OrganizationProfile
          appearance={{
            elements: {
              rootBox: {
                height: "calc(100vh - 50px)",
                width: "50rem",
                overflow: "scroll",
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
