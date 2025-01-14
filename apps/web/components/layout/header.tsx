"use client";

import { AuthProvider, useAuth } from "@/contexts/auth-context";
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

function HeaderContent() {
  const { setTheme } = useTheme();
  const { openModal } = useAuth();
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
            <Button onClick={() => openModal("login")} size="sm">
              Đăng nhập
            </Button>
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
