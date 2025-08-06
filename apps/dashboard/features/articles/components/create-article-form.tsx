"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Save, Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Form,
  FormControl,
  FormDescription,
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

import { useToast } from "@workspace/ui/hooks/use-toast";
import { useCreateArticle } from "../hooks/use-articles";

const createArticleSchema = z.object({
  title: z
    .string()
    .min(1, "Tiêu đề không được để trống")
    .max(200, "Tiêu đề quá dài"),
  slug: z
    .string()
    .optional()
    .refine((val) => !val || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(val), {
      message: "Slug chỉ được chứa chữ cái thường, số và dấu gạch ngang",
    }),
  excerpt: z
    .string()
    .min(1, "Mô tả ngắn không được để trống")
    .max(500, "Mô tả quá dài"),
  content: z.string().min(1, "Nội dung không được để trống"),
  categoryId: z.string().min(1, "Vui lòng chọn danh mục"),
  tags: z.array(z.string()).min(1, "Vui lòng chọn ít nhất một tag"),
  status: z.enum(["draft", "published", "archived"]),
  coverImage: z.any().optional(),
});

type CreateArticleFormValues = z.infer<typeof createArticleSchema>;

// Mock categories - replace with real data
const categories = [
  { id: "1", name: "Hướng dẫn" },
  { id: "2", name: "Phân tích" },
  { id: "3", name: "Tin tức" },
  { id: "4", name: "Review" },
  { id: "5", name: "Thảo luận" },
];

// Available tags
const availableTags = [
  { id: "1", name: "Viết truyện" },
  { id: "2", name: "Kỹ thuật" },
  { id: "3", name: "Xu hướng" },
  { id: "4", name: "Phân tích" },
  { id: "5", name: "Hướng dẫn" },
  { id: "6", name: "Tips" },
  { id: "7", name: "Review" },
  { id: "8", name: "Thảo luận" },
  { id: "9", name: "Tin tức" },
  { id: "10", name: "Cộng đồng" },
];

export function CreateArticleForm() {
  const router = useRouter();
  const { toast } = useToast();
  const createArticle = useCreateArticle();
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const form = useForm<CreateArticleFormValues>({
    resolver: zodResolver(createArticleSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      categoryId: "",
      tags: [],
      status: "draft",
      coverImage: undefined,
    },
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  const onSubmit = async (values: CreateArticleFormValues) => {
    try {
      const slug = values.slug || generateSlug(values.title);

      await createArticle.mutateAsync({
        title: values.title,
        slug,
        excerpt: values.excerpt,
        content: values.content,
        categoryId: values.categoryId,
        tags: values.tags,
        status: values.status,
        ...(selectedFile && { coverImage: selectedFile }),
      });

      toast({
        title: "Thành công",
        description: "Bài viết đã được tạo thành công",
      });

      router.push("/articles");
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể tạo bài viết. Vui lòng thử lại.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Tạo bài viết mới</h1>
        <p className="text-muted-foreground mt-2">
          Tạo bài viết mới cho blog của bạn
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin cơ bản</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tiêu đề bài viết</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập tiêu đề bài viết..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug (tùy chọn)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Slug tự động tạo từ tiêu đề nếu để trống..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Slug sẽ được tạo tự động từ tiêu đề nếu để trống
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mô tả ngắn</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Nhập mô tả ngắn cho bài viết..."
                            className="resize-none"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nội dung bài viết</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Nhập nội dung bài viết..."
                            className="resize-none"
                            rows={12}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cài đặt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trạng thái</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn trạng thái" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="draft">Bản nháp</SelectItem>
                            <SelectItem value="published">
                              Đã xuất bản
                            </SelectItem>
                            <SelectItem value="archived">Lưu trữ</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Danh mục</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn danh mục" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            {/* Selected tags display */}
                            <div className="flex flex-wrap gap-2">
                              {field.value.map((tagId, index) => {
                                const tag = availableTags.find(
                                  (t) => t.id === tagId
                                );
                                return tag ? (
                                  <Badge
                                    key={tagId}
                                    variant="secondary"
                                    className="flex items-center gap-1"
                                  >
                                    {tag.name}
                                    <X
                                      className="w-3 h-3 cursor-pointer"
                                      onClick={() => {
                                        const newTags = field.value.filter(
                                          (_, i) => i !== index
                                        );
                                        field.onChange(newTags);
                                      }}
                                    />
                                  </Badge>
                                ) : null;
                              })}
                            </div>
                            {/* Tag selector */}
                            <Select
                              onValueChange={(value) => {
                                if (!field.value.includes(value)) {
                                  field.onChange([...field.value, value]);
                                }
                              }}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn tag để thêm..." />
                              </SelectTrigger>
                              <SelectContent>
                                {availableTags
                                  .filter(
                                    (tag) => !field.value.includes(tag.id)
                                  )
                                  .map((tag) => (
                                    <SelectItem key={tag.id} value={tag.id}>
                                      {tag.name}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="coverImage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ảnh bìa</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <div className="flex items-center justify-center w-full">
                              <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                              >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Upload className="w-6 h-6 mb-2 text-gray-400" />
                                  <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">
                                      Click để upload
                                    </span>{" "}
                                    hoặc kéo thả
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    PNG, JPG, GIF (MAX. 5MB)
                                  </p>
                                </div>
                                <input
                                  id="dropzone-file"
                                  type="file"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      setSelectedFile(file);
                                      field.onChange(file);
                                    }
                                  }}
                                />
                              </label>
                            </div>
                            {selectedFile && (
                              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                <span className="text-sm text-gray-600">
                                  {selectedFile.name}
                                </span>
                                <X
                                  className="w-4 h-4 cursor-pointer text-gray-400 hover:text-red-500"
                                  onClick={() => {
                                    setSelectedFile(null);
                                    field.onChange(undefined);
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={createArticle.isPending}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {createArticle.isPending ? "Đang lưu..." : "Lưu bài viết"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => router.push("/articles")}
                    >
                      Hủy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
