"use client";

import { Button } from "@workspace/ui/components/button";
import { UseFormWatch } from "react-hook-form";

interface FormActionButtonsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: UseFormWatch<any>;
}

export function FormActionButtons({ watch }: FormActionButtonsProps) {
  return (
    <div className="flex flex-col gap-3">
      <Button
        type="submit"
        className="w-full"
        disabled={!watch("agreeToTerms")}
      >
        🚀 Tạo Truyện
      </Button>
      <Button type="button" variant="outline" className="w-full">
        💾 Lưu Nháp
      </Button>
    </div>
  );
}
