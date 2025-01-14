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

  const handleSubmit = async () => {};

  return (
    <div id="contact" className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Liên Hệ Với Chúng Tôi
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Thông Tin Liên Hệ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Điện thoại</h3>
                <p className="text-gray-600">0123.456.789</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">truyenverse.support@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Địa chỉ</h3>
                <p className="text-gray-600">123 Đường ABC, Quận XYZ, TP.HCM</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-primary">
                Giờ làm việc: Thứ 2 - Thứ 6 (8:00 - 17:00)
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Gửi Tin Nhắn</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    Họ
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Nhập họ của bạn"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Tên
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Nhập tên của bạn"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Số điện thoại
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0123 456 789"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Nội dung
                </label>
                <Textarea
                  id="message"
                  placeholder="Nhập nội dung tin nhắn của bạn"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
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
