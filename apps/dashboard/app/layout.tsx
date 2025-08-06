import { Public_Sans } from "next/font/google";

import { Providers } from "@/shared/components/providers";
import "@workspace/ui/styles/dashboard.css";
import { Metadata } from "next";

const fontSans = Public_Sans({
  subsets: ["vietnamese"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Truyện Verse",
  description:
    "Cộng động truyện chữ với vô vàn truyện cùng với cộng đồng đọc giả lớn, hoạt động sôi nổi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} font-sans antialiased scrollbar-custom mx-auto items-center flex flex-col`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
