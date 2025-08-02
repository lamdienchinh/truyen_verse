"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { Mail, MessageCircle, Send, User } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-16 container">
      <div>
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageCircle size={16} />
            Liên hệ với chúng tôi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Gửi tin nhắn cho chúng tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Có câu hỏi hoặc góp ý? Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy gửi
            thông tin và chúng tôi sẽ phản hồi sớm nhất.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/80 dark:bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Gửi tin nhắn</CardTitle>
              <CardDescription className="text-base">
                Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-semibold flex items-center gap-2"
                    >
                      <User size={16} className="text-primary" />
                      Họ và tên đệm
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Nguyễn Văn"
                      required
                      className="h-12 text-base transition-all duration-200 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-semibold flex items-center gap-2"
                    >
                      Tên
                    </label>
                    <Input
                      id="lastName"
                      placeholder="An"
                      required
                      className="h-12 text-base transition-all duration-200 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold flex items-center gap-2"
                    >
                      <Mail size={16} className="text-primary" />
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="h-12 text-base transition-all duration-200 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold flex items-center gap-2"
                    >
                      Số điện thoại (tùy chọn)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0987 654 321"
                      className="h-12 text-base transition-all duration-200 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold">
                    Chủ đề
                  </label>
                  <Input
                    id="subject"
                    placeholder="Vấn đề bạn muốn trao đổi..."
                    required
                    className="h-12 text-base transition-all duration-200 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    <MessageCircle size={16} className="text-primary" />
                    Nội dung tin nhắn
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Hãy chia sẻ chi tiết về vấn đề bạn gặp phải hoặc câu hỏi bạn muốn trao đổi..."
                    className="min-h-[120px] text-base resize-none transition-all duration-200"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-base font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      Gửi tin nhắn
                      <Send
                        size={16}
                        className="ml-2 duration-200"
                      />
                    </>
                  )}
                </Button>
              </form>

              {/* Bottom Note */}
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Chúng tôi sẽ phản hồi trong vòng{" "}
                  <span className="font-semibold text-primary">24 giờ</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Hoặc liên hệ trực tiếp qua:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@truyenverse.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors duration-200"
            >
              <Mail size={16} />
              Email hỗ trợ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
