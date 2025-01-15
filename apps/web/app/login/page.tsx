"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Card } from "@workspace/ui/components/card";
import google_icon from "@/assets/icons/google-icon.svg";
import facebook_icon from "@/assets/icons/facebook-icon.svg";
import login_bg from "@/assets/imgs/login-bg.png";
import magic_circle from "@/assets/imgs/magic-circle.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-primary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-primary/60 p-6 flex items-center justify-center">
            <div className="relative w-full h-full z-[1]">
              <Image
                src={login_bg}
                alt="Login illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className='absolute z-[0] inset-0'>
              <Image
                src={magic_circle}
                alt="Magic Circle"
                className="object-contain animate-slow-spin"
              />
            </div>
          </div>
          <div className="p-6 md:p-8">
            <div className="text-right">
              <Button
                variant="ghost"
                className="rounded-full w-8 h-8 p-0"
                onClick={() => console.log("Close clicked")}
              >
                ✕
              </Button>
            </div>

            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Đăng nhập</h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mật khẩu</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="rounded-xl border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <div className="text-right">
                    <Link
                      href="/forgot-password"
                      className="text-sm text-orange-500 hover:underline"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white rounded-xl py-6"
                >
                  Đăng nhập
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Hoặc tiếp tục với
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => console.log("Google login")}
                >
                  <Image
                    src={google_icon}
                    alt="Google"
                    width={24}
                    height={24}
                  />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => console.log("Facebook login")}
                >
                  <Image
                    src={facebook_icon}
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </Button>
              </div>

              <p className="text-center text-sm text-gray-600">
                Chưa có tài khoản?{" "}
                <Link
                  href="/signup"
                  className="text-orange-500 hover:underline font-medium"
                >
                  Đăng ký
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
