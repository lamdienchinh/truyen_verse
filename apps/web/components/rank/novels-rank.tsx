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
import { BookOpen, Star } from "lucide-react";
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

const NovelsRanking = () => {
  const [rankingType, setRankingType] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");
  // Mock data
  const topManga = [
    {
      id: 1,
      title: "Nô lệ bóng tối",
      cover: img_1,
      author: "Guitythree",
      rating: 4.9,
      views: 1000000,
      nominations: 500,
    },
    {
      id: 2,
      title: "Túc mệnh chi hoàn",
      cover: img_2,
      author: "Ái Tiềm Thủy Đích Ô Tặc",
      rating: 4.8,
      views: 950000,
      nominations: 450,
    },
    {
      id: 3,
      title: "Không Tưởng Cụ Hiện Đại Quý Tộc",
      cover: img_3,
      author: "Bát Mặc Hồng Trần Lý",
      rating: 4.7,
      views: 900000,
      nominations: 400,
    },
    ...Array.from({ length: 7 }, (_, i) => ({
      id: i + 4,
      title: `Truyện ${i + 4}`,
      cover: img_4,
      author: `Tác giả ${i + 4}`,
      rating: 4.5 - i * 0.1,
      views: 800000 - i * 100000,
      nominations: 350 - i * 50,
    })),
  ];

  return (
    <div className="mt-4 w-full space-y-4">
      <div className="flex justify-between gap-4 mb-8 w-full items-center bg-primary text-white p-2 rounded-md">
        <div className="text-nowrap font-semibold">Bộ lọc</div>
        <div className="w-fit flex items-center gap-2">
          <Select value={rankingType} onValueChange={setRankingType}>
            <SelectTrigger className="p-2 border rounded-lg border-primary-foreground">
              <SelectValue placeholder="Tất cả" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="nominations">Đề cử nhiều nhất</SelectItem>
              <SelectItem value="views">Đọc nhiều nhất</SelectItem>
              <SelectItem value="discussions">Thảo luận nhiều nhất</SelectItem>
              <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
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
              <div className="relative">
                <div className="flex justify-center">{medalIcons[2]}</div>
                <Image
                  width={160}
                  height={200}
                  src={topManga[1]!.cover!}
                  alt={topManga[1]!.title!}
                  className="w-full h-40 object-cover rounded mt-2"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold truncate">{topManga[1]!.title}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {topManga[1]!.author}
                </p>
                <div className="mt-2 flex justify-center items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{topManga[1]!.rating}</span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <BookOpen className="w-4 h-4 text-blue-500 fill-blue-500" />
                  <span>{topManga[1]!.views.toLocaleString()}</span>
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
              <div className="relative">
                <div className="flex justify-center">{medalIcons[1]}</div>
                <Image
                  src={topManga[0]!.cover!}
                  width={160}
                  height={200}
                  alt={topManga[0]!.title}
                  className="w-full h-40 object-cover rounded mt-2"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold truncate">{topManga[0]!.title}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {topManga[0]!.author}
                </p>
                <div className="mt-2 flex justify-center gap-2 items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{topManga[0]!.rating}</span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <BookOpen className="w-4 h-4 text-blue-500 fill-blue-500" />
                  <span>{topManga[0]!.views.toLocaleString()}</span>
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
              <div className="relative">
                <div className="flex justify-center">{medalIcons[3]}</div>
                <Image
                  width={160}
                  height={200}
                  src={topManga[2]!.cover!}
                  alt={topManga[2]!.title}
                  className="w-full h-40 object-cover rounded mt-2"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold truncate">{topManga[2]!.title}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {topManga[2]!.author}
                </p>
                <div className="mt-2 flex justify-center gap-2 items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{topManga[2]!.rating}</span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <BookOpen className="w-4 h-4 text-blue-500 fill-blue-500" />
                  <span>{topManga[2]!.views.toLocaleString()}</span>
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
        {topManga.slice(3).map((manga, index) => (
          <Card key={manga.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex gap-4 items-center">
                <span className="text-2xl font-bold text-gray-500 w-8">
                  {index + 4}
                </span>
                <Image
                  width={160}
                  height={200}
                  src={manga.cover!}
                  alt={manga.title}
                  className="w-20 h-30 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-bold">{manga.title}</h3>
                  <p className="text-sm text-gray-600">{manga.author}</p>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{manga.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4 text-blue-500 fill-blue-500" />
                      <span>{manga.views.toLocaleString()}</span>
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

export default NovelsRanking;
