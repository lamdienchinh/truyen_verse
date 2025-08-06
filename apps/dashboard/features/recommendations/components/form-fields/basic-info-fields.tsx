"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Textarea } from "@workspace/ui/components/textarea";
import { Control } from "react-hook-form";

import { CreateRecommendationFormValues } from "../../types/create-recommendation.schema";

interface BasicInfoFieldsProps {
  control: Control<CreateRecommendationFormValues>;
  novels: Array<{ id: string; title: string; author: string }>;
}

export function BasicInfoFields({ control, novels }: BasicInfoFieldsProps) {
  return (
    <>
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tiêu đề đề xuất</FormLabel>
            <FormControl>
              <Input placeholder="Nhập tiêu đề đề xuất..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mô tả</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Nhập mô tả cho đề xuất..."
                className="resize-none"
                rows={4}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="novelId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Chọn truyện</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn truyện..." />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {novels.map((novel) => (
                  <SelectItem key={novel.id} value={novel.id}>
                    <div>
                      <div className="font-medium">{novel.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {novel.author}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
