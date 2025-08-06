"use client";

import { LoginForm } from "../../../features/auth/components/login-form";
import { useAuthContext } from "../../../features/auth/contexts/auth-context";

export default function LoginPage() {
  const { login, socialLogin, forgotPassword, isLoading } = useAuthContext();

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Login Form */}
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">TV</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Đăng nhập vào{" "}
              <span className="text-primary">
                TruyenVerse
              </span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Chào mừng trở lại! Vui lòng đăng nhập vào tài khoản của bạn.
            </p>
            <div className="mt-4 p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
              <p className="font-medium">Demo credentials:</p>
              <p>Email: admin@truyenverse.com</p>
              <p>Password: 123456</p>
            </div>
          </div>

          {/* Login Form */}
          <LoginForm
            onSubmit={login}
            onSocialLogin={socialLogin}
            onForgotPassword={forgotPassword}
            isLoading={isLoading}
          />
        </div>
      </div>

      {/* Right side - Hero Image */}
      <div className="hidden lg:block relative bg-primary">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
          <div className="text-center space-y-6 max-w-lg">
            <h1 className="text-4xl font-bold">
              Chào mừng đến với TruyenVerse
            </h1>
            <p className="text-xl text-blue-100">
              Khám phá thế giới truyện tranh đầy màu sắc với hàng ngàn tác phẩm
              hấp dẫn từ khắp nơi trên thế giới.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-blue-200">Truyện tranh</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500K+</div>
                <div className="text-sm text-blue-200">Người dùng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5M+</div>
                <div className="text-sm text-blue-200">Lượt đọc</div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-blue-400/20 rounded-full blur-lg" />
        </div>
      </div>
    </div>
  );
}
