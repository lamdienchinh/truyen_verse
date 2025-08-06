import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { cn } from "@workspace/ui/lib/utils";
import {
  BookOpen,
  Download,
  Home,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar({ className }: { className?: string }) {
  const categories = [
    { name: "Tu tiên", icon: BookOpen },
    { name: "Ngôn tình", icon: BookOpen },
    { name: "Sinh tồn", icon: BookOpen },
    { name: "Vô hạn lưu", icon: BookOpen },
    { name: "Kinh dị", icon: BookOpen },
  ];

  const discussionGroups = [
    { name: "Chung", icon: MessageSquare, badgeCount: 120 },
    { name: "Chia sẻ kinh nghiệm", icon: MessageSquare, badgeCount: 89 },
    { name: "Hỏi đáp", icon: MessageSquare, badgeCount: 45 },
  ];

  const communityGroups = [
    { name: "Hội yêu sách", icon: Users, badgeCount: 345 },
    { name: "Hội viết truyện", icon: Users, badgeCount: 276 },
    { name: "Câu lạc bộ review", icon: Users, badgeCount: 198 },
  ];

  const resourceGroups = [
    { name: "Tài liệu viết lách", icon: Download, badgeCount: 34 },
    { name: "Ebook miễn phí", icon: Download, badgeCount: 56 },
    { name: "Mẫu thiết kế bìa", icon: Download, badgeCount: 12 },
  ];

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <Link href="/forum">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-1 h-4 w-4" />
            Diễn đàn
          </Button>
        </Link>
        <Button variant="ghost" className="w-full justify-start">
          <Star className="mr-1 h-4 w-4" />
          Đang theo dõi
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <div className="space-y-6">
            <div>
              <h3 className="px-2 mb-2 font-semibold">Thể loại truyện</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Link key={category.name} href="/forum/tu-tien">
                    <Button variant="ghost" className="w-full justify-start">
                      <category.icon className="mr-2 h-4 w-4" />
                      {category.name}
                      <Badge className="ml-auto text-xs">2500</Badge>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="px-2 mb-2 font-semibold">Nhóm thảo luận</h3>
              <div className="space-y-1">
                {discussionGroups.map((group) => (
                  <Link key={group.name} href="/forum/tu-tien">
                    <Button variant="ghost" className="w-full justify-start">
                      <group.icon className="mr-2 h-4 w-4" />
                      {group.name}
                      <Badge className="ml-auto text-xs">
                        {group.badgeCount}
                      </Badge>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="px-2 mb-2 font-semibold">Cộng đồng</h3>
              <div className="space-y-1">
                {communityGroups.map((group) => (
                  <Link key={group.name} href="/forum/tu-tien">
                    <Button variant="ghost" className="w-full justify-start">
                      <group.icon className="mr-2 h-4 w-4" />
                      {group.name}
                      <Badge className="ml-auto text-xs">
                        {group.badgeCount}
                      </Badge>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="px-2 mb-2 font-semibold">Tài nguyên</h3>
              <div className="space-y-1">
                {resourceGroups.map((group) => (
                  <Link key={group.name} href="/forum/tu-tien">
                    <Button variant="ghost" className="w-full justify-start">
                      <group.icon className="mr-2 h-4 w-4" />
                      {group.name}
                      <Badge className="ml-auto text-xs">
                        {group.badgeCount}
                      </Badge>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
