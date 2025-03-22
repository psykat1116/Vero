"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Hint from "@/components/Hint";

const CreateOrg = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            side="right"
            align="center"
            sideOffset={10}
            label="Create a new organization"
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition cursor-pointer">
              <Plus size={24} className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none shadow-none p-0 w-[440px]">
        <DialogTitle />
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrg;
