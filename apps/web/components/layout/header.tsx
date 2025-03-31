"use client";

import { AuthenApi } from "@/api/auth-api";
import { AuthProvider, useAuth } from "@/contexts/auth-context";
import { useGetUserProfile } from "@/hooks/use-get-profile";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Input } from "@workspace/ui/components/input";
import { Sheet, SheetContent, SheetTrigger } from "@workspace/ui/components/sheet";
import { SparklesText } from "@workspace/ui/components/sparkles-text";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "../auth/auth-modal";

function HeaderContent() {
  const { setTheme } = useTheme();
  const { data: userProfile, refetch } = useGetUserProfile();
  const { openModal } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const handleLogout = async () => {
    await AuthenApi.logout();
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    refetch();
  };

  const navigationLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/category", label: "Thể loại" },
    { href: "/rank", label: "BXH" },
    { href: "/article", label: "Bài viết" },
    { href: "/forum", label: "Diễn đàn" },
  ];

  return (
    <header className="sticky flex justify-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <SparklesText
            sparklesCount={4}
            className="text-lg"
            text={"Truyện Verse"}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          {/* Desktop Search */}
          <div className="relative hidden sm:flex w-fit">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm truyện..."
              className="pl-8 w-[200px] md:w-[300px]"
              type="search"
              name="q"
            />
          </div>
          
          {/* Mobile Search Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="sm:hidden" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>
          
          {/* Mobile Search Input (Conditionally rendered) */}
          {isSearchOpen && (
            <div className="absolute top-14 left-0 right-0 p-2 border-b bg-background sm:hidden">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm truyện..."
                  className="pl-8 w-full"
                  type="search"
                  name="q"
                  autoFocus
                />
              </div>
            </div>
          )}
          
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
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Hồ sơ</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Đăng xuất
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => openModal("login")} size="sm" className="hidden sm:flex">
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
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-6">
                {navigationLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="text-sm font-medium py-2 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                {!userProfile && (
                  <Button onClick={() => openModal("login")} className="mt-2">
                    Đăng nhập
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
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