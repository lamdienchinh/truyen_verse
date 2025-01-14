"use client";
import ThreadList from "@/components/forum/thread-list";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";

export default function TopicPage() {
  const params = useParams();
  const topic = {
    id: params.topic,
    title: "Biểu tượng trong 'Giết con chim nhại'",
    author: "Nguyễn Thị An",
    authorRole: "Giáo viên Văn học",
    content:
      "Trong tác phẩm 'Giết con chim nhại' của Harper Lee, chim nhại được sử dụng như một biểu tượng quan trọng...",
    date: "15/06/2023",
    category: "Phân tích văn học",
    likes: 42,
    comments: 15,
    replies: [
      {
        author: "Trần Văn Bình",
        authorRole: "Sinh viên",
        content:
          "Tôi hoàn toàn đồng ý với phân tích của bạn. Biểu tượng chim nhại còn thể hiện...",
        date: "16/06/2023",
        likes: 8,
      },
      {
        author: "Lê Thị Cúc",
        authorRole: "Nhà phê bình văn học",
        content:
          "Một góc nhìn thú vị! Tôi cũng muốn bổ sung thêm về vai trò của Atticus Finch...",
        date: "17/06/2023",
        likes: 12,
      },
    ],
  };

  return (
    <div className="w-full">
      <Breadcrumb
        items={[
          { label: "Diễn đàn", href: "/forum" },
          { label: "Tu tiên", href: "/forum/tu-tien" },
          { label: topic.title, href: `/forum/tu-tien/${topic.id}` },
        ]}
      />
      <ThreadList />
    </div>
  );
}
