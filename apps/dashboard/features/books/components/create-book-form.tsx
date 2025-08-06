"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@workspace/ui/components/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createBookSchema, type TCreateBook } from "../types/book.schema";
import {
  BasicInfoSection,
  ClassificationSection,
  ConfirmationSection,
  CoverImageSection,
  FormActionButtons,
  FormHeader,
  PublishSettingsSection,
} from "./form-sections";

export default function CreateBookFormClean() {
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
    null
  );

  const form = useForm({
    resolver: zodResolver(createBookSchema),
    defaultValues: {
      name: "",
      author: "",
      description: "",
      genre: "",
      categories: [],
      tags: [],
      world: "",
      mcPersonality: "",
      mcPower: "",
      status: "draft",
      publishType: "free",
      isAdult: false,
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: TCreateBook) => {
    console.log("📚 Form data:", data);
  };

  return (
    <div className="w-full p-6">
      <FormHeader />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cột 1 & 2: Thông tin chính */}
            <div className="lg:col-span-2 space-y-6">
              <BasicInfoSection control={form.control} />
              <ClassificationSection
                control={form.control}
                setValue={form.setValue}
                watch={form.watch}
              />
            </div>

            {/* Cột 3: Ảnh bìa và cài đặt */}
            <div className="space-y-6">
              <CoverImageSection
                coverImagePreview={coverImagePreview}
                setCoverImagePreview={setCoverImagePreview}
                setValue={form.setValue}
              />
              <PublishSettingsSection control={form.control} />
              <ConfirmationSection control={form.control} />
              <FormActionButtons watch={form.watch} />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
