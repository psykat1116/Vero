import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EmptyOrganization = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/emptyOrg.png" alt="Empty" height={250} width={250} />
      <h2 className="text-2xl font-semibold mt-6">Welcome To Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an Organization To Get Started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none shadow-none p-0 w-[440px]">
            <DialogTitle />
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrganization;
