"use client";
import Image from "next/image";
import { useOrganizationList, useOrganization } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import Hint from "@/components/Hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;
    setActive({
      organization: id,
    });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="center" sideOffset={18}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity075 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};

export default Item;
