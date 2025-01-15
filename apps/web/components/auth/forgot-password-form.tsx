"use client";

import { AuthenApi } from "@/api/auth-api";
import { UserApi } from "@/api/user-api";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CountdownTimer } from "../ui/countdown";
import { showToast } from "@/app/providers";

interface ForgotPasswordFormValues {
  email: string;
  otp?: string;
  password?: string;
  confirmPassword?: string;
}

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ForgotPasswordFormValues>();

  const { openModal } = useAuth();
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [resetToken, setResetToken] = useState<string | null>(null);
  const [showCountdown, setShowCountdown] = useState(false);

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      if (!otpSent) {
        await AuthenApi.forgotPassword({ email: data.email });
        setOtpSent(true);
        setShowCountdown(true);
        toast.info("Mã OTP đã được gửi đến email của bạn.");
      } else if (!resetToken) {
        const result = await AuthenApi.verifyOTP({
          email: data.email,
          otp: data.otp!,
        });
        setResetToken(result.data?.accessToken);
        showToast("success", "Xác thực OTP thành công!");
      } else {
        if (data.password !== data.confirmPassword) {
          toast.error("Mật khẩu không khớp!");
          return;
        }
        await UserApi.changePassword({
          accessToken: resetToken,
          password: data.password!,
        });
        toast.success("Đặt lại mật khẩu thành công!");
        openModal("login");
      }
    } catch (error: any) {
      showToast("error", "Đã xảy ra lỗi");
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
          disabled={otpSent}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      {otpSent && !resetToken && (
        <div className="space-y-2">
          <Label htmlFor="otp">Mã OTP</Label>
          <Input
            id="otp"
            placeholder="Nhập mã OTP"
            {...register("otp", { required: "Mã OTP là bắt buộc" })}
          />
          {errors.otp && (
            <p className="text-red-500 text-sm">{errors.otp.message}</p>
          )}
          {showCountdown && (
            <CountdownTimer
              initialTime={300}
              onComplete={() => {
                setShowCountdown(false);
                toast.warning("Mã OTP đã hết hạn. Vui lòng yêu cầu mã mới.");
              }}
            />
          )}
          <Button
            variant="link"
            className="text-blue-500"
            onClick={async () => {
              await AuthenApi.forgotPassword({ email: watch("email") });
              toast.info("Mã OTP mới đã được gửi.");
              setShowCountdown(true);
            }}
          >
            Gửi lại mã OTP
          </Button>
        </div>
      )}
      {resetToken && (
        <>
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu mới</Label>
            <Input
              id="password"
              type="password"
              placeholder="Nhập mật khẩu mới"
              {...register("password", {
                required: "Mật khẩu là bắt buộc",
                minLength: {
                  value: 8,
                  message: "Mật khẩu phải ít nhất 8 ký tự",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Nhập lại mật khẩu"
              {...register("confirmPassword", {
                required: "Xác nhận mật khẩu là bắt buộc",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </>
      )}
      <div className="flex items-center gap-2">
        <Button onClick={() => openModal("login")} variant={"outline"}>
          Quay lại
        </Button>
        <Button type="submit" className="w-full">
          {resetToken
            ? "Đặt lại mật khẩu"
            : otpSent
              ? "Xác thực OTP"
              : "Gửi OTP"}
        </Button>
      </div>
    </form>
  );
}
