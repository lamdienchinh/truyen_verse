"use client";

import bouquet_icon from "@/assets/icons/bouquet-icon.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import Image from "next/image";
import { useState } from "react";

interface Fan {
  id: number;
  username: string;
  avatar: string;
  level: number;
  joinedDate: string;
  contributions: number;
}

const initialFans: Fan[] = [
  {
    id: 1,
    username: "SuperFan123",
    avatar: "/placeholder.svg",
    level: 5,
    joinedDate: "01/01/2024",
    contributions: 50,
  },
  {
    id: 2,
    username: "MangaLover",
    avatar: "/placeholder.svg",
    level: 3,
    joinedDate: "05/01/2024",
    contributions: 25,
  },
  {
    id: 3,
    username: "OtakuPro",
    avatar: "/placeholder.svg",
    level: 4,
    joinedDate: "03/01/2024",
    contributions: 35,
  },
];

export function FansTab() {
  const [fans, setFans] = useState<Fan[]>(initialFans);

  return (
    <div className="space-y-4">
      {fans.map((fan) => (
        <Card key={fan.id}>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={fan.avatar} alt={fan.username} />
                <AvatarFallback>{fan.username[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{fan.username}</h3>
                  <Badge variant="secondary">Cấp {fan.level}</Badge>
                </div>
                <p className="text-sm text-gray-500">
                  Tham gia từ: {fan.joinedDate}
                </p>
                <div className="flex items-center text-sm">
                  <Image
                    height={20}
                    width={20}
                    src={bouquet_icon}
                    alt="bó hoa"
                  />
                  :{" "} 35 bó hoa
                </div>
                <p className="text-sm">
                  Đóng góp: {fan.contributions} bình luận
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button className="w-full">Xem thêm người hâm mộ</Button>
    </div>
  );
}
