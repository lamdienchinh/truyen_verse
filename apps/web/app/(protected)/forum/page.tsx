import ForumContent from "@/components/forum/forum-content";
import Sidebar from "@/components/forum/forum-sidebar";
import ForumStatistic from "@/components/forum/forum-statistics";

export default function Home() {
  return (
    <div className="min-h-screen container">
      <div className="py-8 flex gap-8">
        <Sidebar className="basis-1/4" />
        <main className="basis-3/4 space-y-4">
          <ForumStatistic />
          <ForumContent />
        </main>
      </div>
    </div>
  );
}
