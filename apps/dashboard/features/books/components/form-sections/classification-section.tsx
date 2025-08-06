"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Control, UseFormSetValue, UseFormWatch } from "react-hook-form";
import {
  MAIN_GENRES,
  MC_PERSONALITIES,
  POWER_SYSTEMS,
  SUB_CATEGORIES,
  WORLD_SETTINGS,
} from "../../constants/form-options";

interface ClassificationSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: UseFormWatch<any>;
}

export function ClassificationSection({
  control,
  setValue,
  watch,
}: ClassificationSectionProps) {
  const selectedCategories = watch("categories") || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🏷️ Phân Loại Truyện
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thể Loại Chính *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn thể loại chính" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {MAIN_GENRES.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="world"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bối Cảnh Thế Giới</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn bối cảnh" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {WORLD_SETTINGS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="mcPersonality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tính Cách Nhân Vật Chính</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn tính cách" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {MC_PERSONALITIES.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="mcPower"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hệ Thống Sức Mạnh</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn hệ thống tu luyện" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {POWER_SYSTEMS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Thể loại phụ - dạng checkbox đơn giản */}
        <div>
          <FormLabel>Thể Loại Phụ (Chọn tối đa 5)</FormLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {SUB_CATEGORIES.slice(0, 12).map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <Checkbox
                  id={category.value}
                  checked={selectedCategories.includes(category.value)}
                  onCheckedChange={(checked) => {
                    if (checked && selectedCategories.length < 5) {
                      setValue("categories", [
                        ...selectedCategories,
                        category.value,
                      ]);
                    } else if (!checked) {
                      setValue(
                        "categories",
                        selectedCategories.filter(
                          (c: string) => c !== category.value
                        )
                      );
                    }
                  }}
                />
                <label
                  htmlFor={category.value}
                  className="text-sm cursor-pointer"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Đã chọn: {selectedCategories.length}/5
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
