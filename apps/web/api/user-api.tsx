import axiosInstance from "@/config/axios";
import { IChangePasswordDTO } from "@/type/auth";
import { IUser } from "@/type/user";
import { AxiosResponse } from "axios";

export class UserApi {
  public static getProfile(): Promise<AxiosResponse<IUser>> {
    return axiosInstance.get("/users/profile");
  }
  public static changePassword(body: IChangePasswordDTO) {
    const token = body.accessToken;
    if (!token) {
      return axiosInstance.post("/users/change-password", {
        password: body.password,
      });
    }

    return axiosInstance.post(
      "/users/change-password",
      { password: body.password },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
