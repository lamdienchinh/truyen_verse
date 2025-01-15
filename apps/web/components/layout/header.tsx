"use client";

import { AuthenApi } from "@/api/auth-api";
import { AuthProvider, useAuth } from "@/contexts/auth-context";
import { useGetUserProfile } from "@/hooks/use-get-profile";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Input } from "@workspace/ui/components/input";
import { SparklesText } from "@workspace/ui/components/sparkles-text";
import { Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import AuthModal from "../auth/auth-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";

function HeaderContent() {
  const { setTheme } = useTheme();
  const { data: userProfile, refetch } = useGetUserProfile();
  const { openModal } = useAuth();
  const handleLogout = async () => {
    await AuthenApi.logout();
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    refetch();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <SparklesText
            sparklesCount={4}
            className="text-lg"
            text={"Truyện Verse"}
          />
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/">Trang chủ</Link>
          <Link href="/category">Thể loại</Link>
          <Link href="/rank">BXH</Link>
          <Link href="/article">Bài viết</Link>
          <Link href="/forum">Diễn đàn</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="relative w-fit">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm truyện..."
              className="pl-8 w-[300px]"
              type="search"
              name="q"
            />
          </div>
          <nav className="flex items-center space-x-2">
            {userProfile ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className='cursor-pointer h-8 w-8'>
                    <AvatarImage src={userProfile.avatar}/>
                    <AvatarFallback className='bg-primary text-primary-foreground'>{userProfile.name[0]}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/profile">Hồ sơ</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Đăng xuất
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => openModal("login")} size="sm">
                Đăng nhập
              </Button>
            )}
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Sáng
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Tối
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                Hệ thống
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <AuthModal />
    </header>
  );
}

export default function Header() {
  return (
    <AuthProvider>
      <HeaderContent />
    </AuthProvider>
  );
}