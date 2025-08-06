"use client";

import { AuthenApi } from "@/api/auth-api";
import { showToast } from "@/components/providers";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { openModal } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormValues>();

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const body = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      await AuthenApi.register(body);
      showToast("success", "Đăng ký thành công!");
      openModal("login");
    } catch (error) {
      showToast("error", `Đăng ký thất bại: ${error}`);
    }
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

      <div className="space-y-2">
        <label className="text-sm font-medium">Họ và tên</label>
        <Input
          placeholder="Nguyễn Văn A"
          {...register("name", { required: "Tên là bắt buộc" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Mật khẩu</label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("password", {
              required: "Mật khẩu là bắt buộc",
              minLength: {
                value: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự",
              },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Xác nhận mật khẩu</label>
        <Input
          type="password"
          placeholder="••••••••"
          {...register("confirmPassword", {
            required: "Xác nhận mật khẩu là bắt buộc",
            validate: (value) =>
              value === watch("password") || "Mật khẩu không khớp",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Đăng ký
      </Button>
    </form>
  );
}
