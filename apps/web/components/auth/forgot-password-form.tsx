"use client";

import { useAuth } from "@/contexts/auth-context";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { useForm } from "react-hook-form";

interface ForgotPasswordFormValues {
  email: string;
}

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();

  const { openModal } = useAuth();

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    console.log("forgot:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input
          type="email"
          placeholder="your.email@example.com"
          {...register("email", { required: "Email là bắt buộc" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={() => openModal("login")} variant={"outline"}>
          Quay lại
        </Button>
        <Button type="submit" className="w-full">
          Gửi liên kết đặt lại mật khẩu
        </Button>
      </div>
    </form>
  );
}
