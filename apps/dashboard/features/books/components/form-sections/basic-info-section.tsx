"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { Control } from "react-hook-form";

interface BasicInfoSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

export function BasicInfoSection({ control }: BasicInfoSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          📚 Thông Tin Cơ Bản
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên Truyện *</FormLabel>
                <FormControl>
                  <Input placeholder="VD: Đấu Phá Thương Khung" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tác Giả *</FormLabel>
                <FormControl>
                  <Input placeholder="VD: Thiên Tàm Thổ Đậu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Giới Thiệu *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Mô tả cốt truyện, nhân vật chính, thế giới tu tiên... 

Ví dụ: Đây là một thế giới thuộc về Đấu Khí, không có ma pháp huyền ảo, chỉ có Đấu Khí thịnh hành thế gian! 

Trong thế giới này, tu luyện tới đỉnh phong được gọi là Đấu Đế!"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Mô tả chi tiết để thu hút độc giả. Nên đề cập đến hệ thống tu
                luyện, mục tiêu của nhân vật chính.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
