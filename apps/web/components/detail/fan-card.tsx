import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";

interface FanCardProps {
  username: string;
  avatar: string;
  level: number;
  joinedDate: string;
}

export function FanCard({ username, avatar, level, joinedDate }: FanCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{username}</p>
          <p className="text-sm text-muted-foreground">
            Tham gia từ {joinedDate}
          </p>
        </div>
      </div>
      <Badge variant="secondary">Cấp {level}</Badge>
    </div>
  );
}
