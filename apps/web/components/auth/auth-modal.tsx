"use client";

import facebook_icon from "@/assets/icons/facebook-icon.svg";
import google_icon from "@/assets/icons/google-icon.svg";
import login_bg from "@/assets/imgs/login-bg.png";
import magic_circle from "@/assets/imgs/magic-circle.png";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import Image from "next/image";
import { ForgotPasswordForm } from "./forgot-password-form";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";

export default function AuthModal() {
  const { activeModal, openModal, closeModal } = useAuth();

  const handleSocialLogin = (provider: "google" | "facebook") => {
    console.log(`${provider} login`);
  };

  return (
    <Dialog open={activeModal !== null} onOpenChange={closeModal}>
      <DialogContent className="p-0 max-w-[60vw] min-h-[80vh]">
        <DialogTitle>
          <div className="grid md:grid-cols-2 gap-6 h-full">
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
              <div className="absolute z-[0] inset-0">
                <Image
                  src={magic_circle}
                  alt="Magic Circle"
                  className="object-contain animate-slow-spin"
                />
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">
                  {activeModal === "login" && "Đăng nhập"}
                  {activeModal === "signup" && "Đăng ký"}
                  {activeModal === "forgotPassword" && "Quên mật khẩu"}
                </h1>

                {activeModal === "login" && <LoginForm />}
                {activeModal === "signup" && <SignupForm />}
                {activeModal === "forgotPassword" && <ForgotPasswordForm />}

                {activeModal !== "forgotPassword" && (
                  <>
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
                        onClick={() => handleSocialLogin("google")}
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
                        onClick={() => handleSocialLogin("facebook")}
                      >
                        <Image
                          src={facebook_icon}
                          alt="Facebook"
                          width={24}
                          height={24}
                        />
                      </Button>
                    </div>
                  </>
                )}

                <p className="text-center text-sm text-gray-600">
                  {activeModal === "login" ? (
                    <>
                      Chưa có tài khoản?{" "}
                      <button
                        onClick={() => openModal("signup")}
                        className="text-orange-500 hover:underline font-medium"
                      >
                        Đăng ký
                      </button>
                    </>
                  ) : activeModal === "signup" ? (
                    <>
                      Đã có tài khoản?{" "}
                      <button
                        onClick={() => openModal("login")}
                        className="text-orange-500 hover:underline font-medium"
                      >
                        Đăng nhập
                      </button>
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
