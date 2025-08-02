"use client";

import { AuthenApi } from "@/api/auth-api";
import { AuthProvider, useAuth } from "@/contexts/auth-context";
import { useGetUserProfile } from "@/hooks/use-get-profile";
import { IUser } from "@/type/user";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Input } from "@workspace/ui/components/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { SparklesText } from "@workspace/ui/components/sparkles-text";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "../auth/auth-modal";

const NAV_LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/category", label: "Thể loại" },
  { href: "/rank", label: "BXH" },
  { href: "/article", label: "Bài viết" },
  { href: "/forum", label: "Diễn đàn" },
];

const SearchInput = ({
  className = "",
  autoFocus = false,
}: {
  className?: string;
  autoFocus?: boolean;
}) => (
  <div className="relative w-full">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input
      type="search"
      name="q"
      placeholder="Tìm kiếm truyện..."
      className={`pl-9 pr-4 h-9 ${className}`}
      autoFocus={autoFocus}
    />
  </div>
);

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {["light", "dark", "system"].map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setTheme(theme)}
            className="cursor-pointer capitalize"
          >
            {theme === "light" ? "Sáng" : theme === "dark" ? "Tối" : "Hệ thống"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MobileMenu = ({
  userProfile,
  openLoginModal,
}: {
  userProfile?: IUser | null;
  openLoginModal: () => void;
}) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9">
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-[280px] sm:w-[320px]">
      <div className="flex flex-col h-full py-6">
        <Link href="/" className="flex items-center space-x-2 mb-6">
          <SparklesText
            className="text-lg font-bold"
            text="Truyện Verse"
            sparklesCount={3}
          />
        </Link>

        <SearchInput className="mb-6" />

        <nav className="flex flex-col gap-1 flex-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-3 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {!userProfile && (
          <div className="pt-4 border-t">
            <Button onClick={openLoginModal} className="w-full">
              Đăng nhập
            </Button>
          </div>
        )}
      </div>
    </SheetContent>
  </Sheet>
);

const HeaderActions = ({
  userProfile,
  onLogout,
  openLoginModal,
}: {
  userProfile?: IUser | null;
  onLogout: () => void;
  openLoginModal: () => void;
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-1 sm:space-x-2 ml-4">
        <div className="hidden md:flex">
          <SearchInput className="w-[180px] lg:w-[250px] xl:w-[300px]" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-9 w-9"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          {isSearchOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </Button>

        {userProfile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer h-8 w-8 sm:h-9 sm:w-9">
                <AvatarImage src={userProfile.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  {userProfile.name[0]}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/profile">Hồ sơ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onLogout}>Đăng xuất</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={openLoginModal}
            size="sm"
            className="hidden sm:flex text-xs sm:text-sm px-3 h-9"
          >
            Đăng nhập
          </Button>
        )}

        <ThemeToggle />
        <MobileMenu userProfile={userProfile} openLoginModal={openLoginModal} />
      </div>

      {isSearchOpen && (
        <div className="pb-3 md:hidden">
          <SearchInput className="w-full" autoFocus />
        </div>
      )}
    </>
  );
};

function HeaderContent() {
  const { data: userProfile, refetch } = useGetUserProfile();
  const { openModal } = useAuth();

  const handleLogout = async () => {
    await AuthenApi.logout();
    if (typeof window !== "undefined") localStorage.removeItem("token");
    refetch();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <SparklesText
              className="text-base sm:text-lg lg:text-xl font-bold"
              text="Truyện Verse"
              sparklesCount={4}
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium ml-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors text-muted-foreground hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          <HeaderActions
            userProfile={userProfile}
            onLogout={handleLogout}
            openLoginModal={() => openModal("login")}
          />
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
