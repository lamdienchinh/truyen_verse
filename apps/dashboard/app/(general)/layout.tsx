import { AppSidebar } from "@/shared/components/sidebar/app-sidebar";
import { Avatar, AvatarImage } from "@workspace/ui/components/avatar";
import { Separator } from "@workspace/ui/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen max-w-[100vw] w-full">
        <AppSidebar />

        <SidebarInset className="flex flex-col w-2/3">
          <header className="w-full flex h-16 shrink-0 items-center justify-between px-8 gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
            </div>
            <div className="relative">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/12345678?v=4" />
              </Avatar>
              <div className="bg-green-500 absolute top-1 w-2 h-2 right-0 rounded-full" />
            </div>
          </header>

          <main className="w-full p-2">
            <div className="container mx-auto">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
