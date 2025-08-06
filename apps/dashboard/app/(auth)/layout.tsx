import { AuthProvider } from "@/features/auth/contexts/auth-context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập | Truyện Verse Dashboard",
  description: "Đăng nhập vào trang quản trị Truyện Verse",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full">
      <AuthProvider>{children}</AuthProvider>
    </main>
  );
}
