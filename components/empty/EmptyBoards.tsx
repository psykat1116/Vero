import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const EmptyBoards = () => {
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
        <Button size="lg">Create Board</Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
