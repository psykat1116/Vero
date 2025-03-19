import React from "react";
import { Avatar } from "@/components/ui/avatar";
import Hint from "../Hint";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

const UserAvatar = ({ src, name, fallback, borderColor }: UserAvatarProps) => {
  return (
    <Hint side="bottom" sideOffset={18} label={name || "Participants"}>
      <Avatar
        className="h-8 w-8 p-0.5 border-2"
        style={{ borderColor: borderColor }}
      >
        <AvatarImage src={src} className="rounded-full" />
        <AvatarFallback className="text-xs font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default UserAvatar;
