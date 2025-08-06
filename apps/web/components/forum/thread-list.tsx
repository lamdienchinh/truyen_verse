import { threads } from "@/const/fake-data";
import ThreadCard from "./thread-card";

const ThreadList = () => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold mb-4">Truyện Tiên Hiệp - Kiếm Hiệp</h1>
      <div className="space-y-4">
        {threads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );
};

export default ThreadList;
