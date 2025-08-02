import Sidebar from "@/components/forum/forum-sidebar";

export default function TopicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen container">
        <div className="py-8 flex gap-8">
          <Sidebar className="basis-1/4" />
          <div className="basis-3/4">{children}</div>
        </div>
      </div>
    </>
  );
}
