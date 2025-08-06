"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { useState } from "react";
import { RatingTab } from "./rating-tab";
import { DiscussionTab } from "./discusstion-tab";
import { FansTab } from "./fan-tab";

export default function ReviewTabs() {
  const [activeTab, setActiveTab] = useState("rating");

  return (
    <section className="container my-8 space-y-4">
      <div className="flex items-center justify-between gap-4 py-4 px-4 bg-primary text-primary-foreground rounded-md">
        <div className="font-semibold">Đánh giá</div>
        <Select>
          <SelectTrigger className="w-[180px] border-primary-foreground">
            <SelectValue placeholder="Sắp xếp theo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Mới nhất</SelectItem>
            <SelectItem value="oldest">Cũ nhất</SelectItem>
            <SelectItem value="most-liked">Nhiều lượt thích nhất</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full mx-auto"
      >
        <TabsList className="w-full border-b">
          <TabsTrigger value="rating" className="flex-1">
            ĐÁNH GIÁ
            <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-sm">
              1
            </span>
          </TabsTrigger>
          <TabsTrigger value="discussion" className="flex-1">
            THẢO LUẬN
            <span className="ml-2 px-2 py-0.5 bg-red-600 text-white rounded-full text-sm">
              21
            </span>
          </TabsTrigger>
          <TabsTrigger value="fans" className="flex-1">
            HÂM MỘ
            <span className="ml-2 px-2 py-0.5 bg-red-600 text-white rounded-full text-sm">
              5
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rating">
          <RatingTab />
        </TabsContent>

        <TabsContent value="discussion">
          <DiscussionTab />
        </TabsContent>

        <TabsContent value="fans">
          <FansTab />
        </TabsContent>
      </Tabs>
    </section>
  );
}
