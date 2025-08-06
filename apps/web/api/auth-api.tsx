import axiosInstance from "@/config/axios";
import {
  IForgotPassword,
  ILogin,
  ILoginResponse,
  IRegister,
  IVerifyOTP,
} from "@/type/auth";
import { AxiosResponse } from "axios";

export class AuthenApi {
  public static login(body: ILogin): Promise<AxiosResponse<ILoginResponse>> {
    return axiosInstance.post("/auth/login", body);
  }
  public static register(body: IRegister) {
    return axiosInstance.post("/auth/register", body);
  }
  public static logout(): Promise<AxiosResponse<void>> {
    return axiosInstance.post("/auth/logout");
  }
  public static forgotPassword(body: IForgotPassword) {
    return axiosInstance.post("/auth/forgot-password", body);
  }
  public static verifyOTP(body: IVerifyOTP) {
    return axiosInstance.post("/otp/verify", body);
  }
}
