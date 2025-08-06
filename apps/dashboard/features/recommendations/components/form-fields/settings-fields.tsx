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
import { Control } from "react-hook-form";

import {
  RECOMMENDATION_CATEGORIES,
  RECOMMENDATION_PRIORITIES,
} from "../../consts/recommendation";
import { CreateRecommendationFormValues } from "../../types/create-recommendation.schema";

interface SettingsFieldsProps {
  control: Control<CreateRecommendationFormValues>;
}

export function SettingsFields({ control }: SettingsFieldsProps) {
  return (
    <>
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Danh mục</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.entries(RECOMMENDATION_CATEGORIES).map(
                  ([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="priority"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ưu tiên</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn ưu tiên" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.entries(RECOMMENDATION_PRIORITIES).map(
                  ([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="position"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vị trí hiển thị</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={1}
                max={100}
                placeholder="1"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
