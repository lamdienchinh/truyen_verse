import { IUser } from "@/type/user";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";

export default function ProfileHeader({ userData }: { userData: IUser }) {
  return (
    <div className="h-48 bg-primary relative">
      <div className="container relative h-full">
        <Avatar className="h-32 w-32 absolute -bottom-16 border-4 border-white">
          <AvatarImage src={userData.avatar} alt={userData.name} />
          <AvatarFallback>
            {userData.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
