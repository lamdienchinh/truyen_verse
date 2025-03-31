"use client";

import { Button } from "@workspace/ui/components/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="w-full container mx-auto py-8 sm:py-10 md:py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
        Liên Hệ Với Chúng Tôi
      </h2>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <Card>
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-lg sm:text-xl">Thông Tin Liên Hệ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <div>
                <h3 className="font-medium text-sm sm:text-base">Điện thoại</h3>
                <p className="text-gray-600 text-xs sm:text-sm">0123.456.789</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <div>
                <h3 className="font-medium text-sm sm:text-base">Email</h3>
                <p className="text-gray-600 text-xs sm:text-sm">truyenverse.support@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <div>
                <h3 className="font-medium text-sm sm:text-base">Địa chỉ</h3>
                <p className="text-gray-600 text-xs sm:text-sm">123 Đường ABC, Quận XYZ, TP.HCM</p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/10 rounded-lg">
              <p className="text-xs sm:text-sm text-primary">
                Giờ làm việc: Thứ 2 - Thứ 6 (8:00 - 17:00)
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-lg sm:text-xl">Gửi Tin Nhắn</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="firstName" className="text-xs sm:text-sm font-medium">
                    Họ
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Nhập họ của bạn"
                    required
                    className="h-8 sm:h-10 text-xs sm:text-sm"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="lastName" className="text-xs sm:text-sm font-medium">
                    Tên
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Nhập tên của bạn"
                    required
                    className="h-8 sm:h-10 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="h-8 sm:h-10 text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="phone" className="text-xs sm:text-sm font-medium">
                  Số điện thoại
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0123 456 789"
                  required
                  className="h-8 sm:h-10 text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium">
                  Nội dung
                </label>
                <Textarea
                  id="message"
                  placeholder="Nhập nội dung tin nhắn của bạn"
                  className="min-h-[100px] sm:min-h-[120px] text-xs sm:text-sm"
                  required
                />
              </div>

              <Button type="submit" className="w-full h-8 sm:h-10 text-xs sm:text-sm" disabled={isSubmitting}>
                {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;
