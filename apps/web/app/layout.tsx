import { Providers } from "@/components/providers";
import { cn } from "@workspace/ui/lib/utils";
import "@workspace/ui/styles/web.css";
import { Metadata } from "next";
import { Public_Sans } from "next/font/google";

const fontSans = Public_Sans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Truyện Verse",
    template: "%s | Truyện Verse",
  },
  description:
    "Cộng động truyện chữ với vô vàn truyện cùng với cộng đồng đọc giả lớn, hoạt động sôi nổi",
  keywords: ["truyện", "đọc truyện", "cộng đồng", "văn học", "truyện tranh"],
  authors: [{ name: "Truyện Verse Team" }],
  creator: "Truyện Verse",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Truyện Verse",
    description:
      "Cộng động truyện chữ với vô vàn truyện cùng với cộng đồng đọc giả lớn, hoạt động sôi nổi",
    siteName: "Truyện Verse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truyện Verse",
    description:
      "Cộng động truyện chữ với vô vàn truyện cùng với cộng đồng đọc giả lớn, hoạt động sôi nổi",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "font-sans antialiased scrollbar-custom mx-auto items-center flex flex-col min-h-screen"
        )}
      >
        <Providers>
          <main className="flex-1 w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
