"use client";

import prize_1st from "@/assets/icons/1st.png";
import prize_2nd from "@/assets/icons/2nd.png";
import prize_3rd from "@/assets/icons/3rd.png";
import { getRandomImage } from "@/utils/common";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Gift, Heart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const img_1 = getRandomImage(0);
const img_2 = getRandomImage(1);
const img_3 = getRandomImage(2);
const img_4 = getRandomImage(3);

const medalIcons = {
  1: (
    <Image
      alt="first prize"
      src={prize_1st}
      className="w-8 h-8 text-yellow-500"
    />
  ),
  2: (
    <Image
      alt="second prize"
      src={prize_2nd}
      className="w-8 h-8 text-gray-300"
    />
  ),
  3: (
    <Image
      alt="third prize"
      src={prize_3rd}
      className="w-8 h-8 text-amber-600"
    />
  ),
};

const UsersRanking = () => {
  const [rankingType, setRankingType] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");

  const topReaders = [
    {
      id: 1,
      name: "Nguyen Van A",
      avatar: img_1,
      flowersGiven: 1500,
      views: 10000,
      favorites: 500,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Tran Thi B",
      avatar: img_2,
      flowersGiven: 1400,
      views: 9500,
      favorites: 450,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Le Van C",
      avatar: img_3,
      flowersGiven: 1300,
      views: 9000,
      favorites: 400,
      rating: 4.7,
    },
    ...Array.from({ length: 7 }, (_, i) => ({
      id: i + 4,
      name: `Doc gia ${i + 4}`,
      avatar: img_4,
      flowersGiven: 1200 - i * 100,
      views: 8000 - i * 1000,
      favorites: 350 - i * 50,
      rating: 4.5 - i * 0.1,
    })),
  ];

  return (
    <div className="mt-4 w-full space-y-4">
      <div className="!mt-0 flex justify-between gap-4 mb-8 w-full items-center bg-primary text-white p-2 rounded-md">
        <div className="text-nowrap font-semibold">Bộ lọc</div>
        <div className="w-fit flex items-center gap-2">
          <Select value={rankingType} onValueChange={setRankingType}>
            <SelectTrigger className="p-2 border rounded-lg border-primary-foreground">
              <SelectValue placeholder="Tất cả" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="flowers">
                Phú hào (tặng hoa nhiều nhất)
              </SelectItem>
              <SelectItem value="views">Đọc nhiều nhất</SelectItem>
              <SelectItem value="favorites">
                Được yêu thích nhiều nhất
              </SelectItem>
              <SelectItem value="rating">Được đánh giá cao nhất</SelectItem>
            </SelectContent>
          </Select>

          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="p-2 border rounded-lg border-primary-foreground">
              <SelectValue placeholder="Mọi thời điểm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Mọi thời điểm</SelectItem>
              <SelectItem value="day">Hôm nay</SelectItem>
              <SelectItem value="week">Tuần này</SelectItem>
              <SelectItem value="month">Tháng này</SelectItem>
              <SelectItem value="year">Năm nay</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-3 items-end gap-4 pt-8 w-full">
        <div className="flex flex-col items-center">
          <Card className="transform hover:-translate-y-2 transition-transform w-[60%]">
            <CardContent className="p-4">
              <div className="flex flex-col items-center justify-center relative">
                <div className="flex justify-center mb-2">{medalIcons[2]}</div>
                <Image
                  width={160}
                  height={200}
                  src={topReaders[1]!.avatar!}
                  alt={topReaders[1]!.name!}
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold truncate">{topReaders[1]!.name}</h3>
                <div className="flex justify-center items-center gap-2">
                  <Gift className="w-4 h-4 text-pink-500 fill-pink-500" />
                  <span>{topReaders[1]!.flowersGiven}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>{topReaders[1]!.favorites}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{topReaders[1]!.rating}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="h-20 w-full bg-gray-300 mt-4 rounded-t-lg flex justify-center items-center text-[40px] font-semibold text-white">
            2
          </div>
        </div>

        <div className="flex flex-col items-center -mt-8">
          <Card className="transform hover:-translate-y-2 transition-transform w-[60%]">
            <CardContent className="p-4">
              <div className="flex flex-col items-center justify-center relative">
                <div className="flex justify-center mb-2">{medalIcons[1]}</div>
                <Image
                  src={topReaders[0]!.avatar!}
                  width={160}
                  height={200}
                  alt={topReaders[0]!.name}
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold truncate">{topReaders[0]!.name}</h3>
                <div className="flex justify-center items-center gap-2">
                  <Gift className="w-4 h-4 text-pink-500 fill-pink-500" />
                  <span>{topReaders[0]!.flowersGiven}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>{topReaders[0]!.favorites}</span>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{topReaders[0]!.rating}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="h-28 w-full bg-yellow-500 mt-4 rounded-t-lg flex justify-center items-center text-[40px] font-semibold text-white">
            1
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Card className="transform hover:-translate-y-2 transition-transform w-[60%]">
            <CardContent className="p-4">
              <div className="flex flex-col items-center justify-center relative">
                <div className="flex justify-center mb-2">{medalIcons[3]}</div>
                <Image
                  width={160}
                  height={200}
                  src={topReaders[2]!.avatar!}
                  alt={topReaders[2]!.name}
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold truncate">{topReaders[2]!.name}</h3>
                <div className="flex justify-center items-center gap-2">
                  <Gift className="w-4 h-4 text-pink-500 fill-pink-500" />
                  <span>{topReaders[2]!.flowersGiven}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>{topReaders[2]!.favorites}</span>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{topReaders[2]!.rating}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="h-16 w-full bg-amber-600 mt-4 rounded-t-lg flex justify-center items-center text-[40px] font-semibold text-white">
            3
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-12">
        {topReaders.slice(3).map((reader, index) => (
          <Card key={reader.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex gap-4 items-center">
                <span className="text-2xl font-bold text-gray-500 w-8">
                  {index + 4}
                </span>
                <Image
                  width={160}
                  height={200}
                  src={reader.avatar!}
                  alt={reader.name}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-bold truncate">{reader.name}</h3>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Gift className="w-4 h-4 text-pink-500 fill-pink-500" />
                      <span>{reader.flowersGiven}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                      <span>{reader.favorites}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{reader.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UsersRanking;
