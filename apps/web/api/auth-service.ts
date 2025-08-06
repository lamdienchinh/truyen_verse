import axiosInstance from "@/config/axios";
import { API_ENDPOINTS, QUERY_KEYS } from "@workspace/ui/config/constants";
import { AxiosResponse } from "axios";

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  agreeToTerms: boolean;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface VerifyOTPRequest {
  email: string;
  otp: string;
  type: "forgot_password" | "email_verification";
}

export interface ChangePasswordRequest {
  currentPassword?: string;
  newPassword: string;
  accessToken?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  emailVerified: boolean;
  role: "user" | "admin" | "moderator";
  createdAt: string;
  updatedAt: string;
}

// API Service Class
export class AuthApiService {
  /**
   * User login
   */
  static async login(
    data: LoginRequest
  ): Promise<AxiosResponse<LoginResponse>> {
    return axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, data);
  }

  /**
   * User registration
   */
  static async register(data: RegisterRequest): Promise<AxiosResponse<void>> {
    return axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, data);
  }

  /**
   * User logout
   */
  static async logout(): Promise<AxiosResponse<void>> {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);

    // Clear local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    }

    return response;
  }

  /**
   * Forgot password request
   */
  static async forgotPassword(
    data: ForgotPasswordRequest
  ): Promise<AxiosResponse<void>> {
    return axiosInstance.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, data);
  }

  /**
   * Verify OTP
   */
  static async verifyOTP(
    data: VerifyOTPRequest
  ): Promise<AxiosResponse<{ valid: boolean }>> {
    return axiosInstance.post(API_ENDPOINTS.AUTH.VERIFY_OTP, data);
  }

  /**
   * Get user profile
   */
  static async getProfile(): Promise<AxiosResponse<User>> {
    return axiosInstance.get(API_ENDPOINTS.USERS.PROFILE);
  }

  /**
   * Change password
   */
  static async changePassword(
    data: ChangePasswordRequest
  ): Promise<AxiosResponse<void>> {
    const headers = data.accessToken
      ? { Authorization: `Bearer ${data.accessToken}` }
      : {};

    return axiosInstance.post(
      API_ENDPOINTS.USERS.CHANGE_PASSWORD,
      {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      },
      { headers }
    );
  }

  /**
   * Refresh access token
   */
  static async refreshToken(): Promise<AxiosResponse<{ accessToken: string }>> {
    const refreshToken =
      typeof window !== "undefined"
        ? localStorage.getItem("refreshToken")
        : null;

    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    return axiosInstance.post("/auth/refresh", { refreshToken });
  }

  /**
   * Store authentication tokens
   */
  static storeTokens(accessToken: string, refreshToken: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }
  }

  /**
   * Clear authentication tokens
   */
  static clearTokens(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    }
  }

  /**
   * Get stored access token
   */
  static getAccessToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  }
}

// Query keys for React Query
export const AUTH_QUERY_KEYS = {
  profile: [QUERY_KEYS.USER_PROFILE] as const,
  profileWithToken: (token: string) =>
    [QUERY_KEYS.USER_PROFILE, token] as const,
} as const;
