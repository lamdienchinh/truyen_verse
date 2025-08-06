"use client";

import { AuthenApi } from "@/api/auth-api";
import { showToast } from "@/components/providers";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const { openModal, closeModal } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const body = {
        email: data.email,
        password: data.password,
      };
      const result = await AuthenApi.login(body);
      const { accessToken } = result?.data;
      if (typeof window !== "undefined" && accessToken) {
        localStorage.setItem("token", accessToken);
      }
      showToast("success", "Đăng nhập thành công");
      closeModal();
    } catch (e) {
      showToast("error", "Sai tài khoản hoặc mật khẩu");
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
        <div className="text-right">
          <button
            type="button"
            onClick={() => openModal("forgotPassword")}
            className="text-sm text-orange-500 hover:underline"
          >
            Quên mật khẩu?
          </button>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Đăng nhập
      </Button>
    </form>
  );
}
