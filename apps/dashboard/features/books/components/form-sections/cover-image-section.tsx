"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Image as ImageIcon, Upload } from "lucide-react";
import Image from "next/image";
import { UseFormSetValue } from "react-hook-form";

interface CoverImageSectionProps {
  coverImagePreview: string | null;
  setCoverImagePreview: (preview: string | null) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
}

export function CoverImageSection({
  coverImagePreview,
  setCoverImagePreview,
  setValue,
}: CoverImageSectionProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("coverImage", file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🖼️ Ảnh Bìa Truyện
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            {coverImagePreview ? (
              <div className="space-y-4">
                <Image
                  src={coverImagePreview}
                  alt="Cover preview"
                  width={200}
                  height={300}
                  className="mx-auto rounded-lg object-cover"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setCoverImagePreview(null);
                    setValue("coverImage", undefined);
                  }}
                >
                  Xóa ảnh
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div>
                  <label htmlFor="cover-upload" className="cursor-pointer">
                    <Button type="button" variant="outline" asChild>
                      <span>
                        <Upload className="w-4 h-4 mr-2" />
                        Chọn ảnh bìa
                      </span>
                    </Button>
                  </label>
                  <input
                    id="cover-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
                <p className="text-sm text-gray-500">
                  PNG, JPG tối đa 2MB
                  <br />
                  Tỷ lệ 2:3 (400x600px)
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
