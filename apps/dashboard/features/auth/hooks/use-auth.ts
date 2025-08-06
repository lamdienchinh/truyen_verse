"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import type { AuthUser, LoginFormData, SocialProvider } from "../types/auth";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const router = useRouter();

  const login = useCallback(
    async (data: LoginFormData) => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (
          data.email === "admin@truyenverse.com" &&
          data.password === "123456"
        ) {
          const mockUser: AuthUser = {
            id: "1",
            email: data.email,
            name: "Admin User",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
            role: "admin",
          };

          setUser(mockUser);

          localStorage.setItem("auth-user", JSON.stringify(mockUser));
          localStorage.setItem("auth-token", "mock-jwt-token");

          if (data.rememberMe) {
            localStorage.setItem("remember-me", "true");
          }

          toast.success("Đăng nhập thành công!");
          router.push("/books");
        } else {
          toast.error("Email hoặc mật khẩu không chính xác");
        }
      } catch {
        toast.error("Có lỗi xảy ra, vui lòng thử lại");
      } finally {
        setIsLoading(false);
      }
    },
    [router]
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("auth-user");
    localStorage.removeItem("auth-token");
    localStorage.removeItem("remember-me");
    toast.success("Đăng xuất thành công!");
    router.push("/login");
  }, [router]);

  const socialLogin = useCallback((provider: SocialProvider) => {
    toast.info(`Đăng nhập với ${provider} đang được phát triển`);
  }, []);

  const forgotPassword = useCallback(() => {
    toast.info("Tính năng quên mật khẩu đang được phát triển");
  }, []);

  const checkAuth = useCallback(() => {
    try {
      const storedUser = localStorage.getItem("auth-user");
      const token = localStorage.getItem("auth-token");

      if (storedUser && token) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        return parsedUser;
      }
    } catch {
      // Invalid stored data, clear it
      localStorage.removeItem("auth-user");
      localStorage.removeItem("auth-token");
      localStorage.removeItem("remember-me");
      setUser(null);
    }
    return null;
  }, []); // No dependencies to avoid re-creation

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    socialLogin,
    forgotPassword,
    checkAuth,
  };
}
