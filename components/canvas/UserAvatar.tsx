import Hint from "@/components/Hint";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

const UserAvatar = ({ src, name, fallback, borderColor }: UserAvatarProps) => {
  return (
    <Hint side="bottom" sideOffset={6} label={name || "Participants"}>
      <Avatar
        className="h-8 w-8 p-0.5 border-2"
        style={{ borderColor: borderColor }}
      >
        <AvatarImage src={src} className="rounded-full" />
        <AvatarFallback className="text-xs font-semibold flex items-center justify-center">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default UserAvatar;
