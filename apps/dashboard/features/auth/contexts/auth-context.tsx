"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useAuth } from "../hooks/use-auth";
import type { AuthUser, LoginFormData, SocialProvider } from "../types/auth";

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginFormData) => Promise<void>;
  logout: () => void;
  socialLogin: (provider: SocialProvider) => void;
  forgotPassword: () => void;
  checkAuth: () => AuthUser | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();

  useEffect(() => {
    // Chỉ chạy một lần khi component mount
    auth.checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Intentionally empty - only run once on mount

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
