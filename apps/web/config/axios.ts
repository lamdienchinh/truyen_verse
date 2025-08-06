"use client";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage?.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Xử lý lỗi 401 (Unauthorized) tại đây, ví dụ: chuyển hướng tới trang login
      console.log("Token expired or unauthorized");
    } else {
      // Xử lý lỗi khác
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
