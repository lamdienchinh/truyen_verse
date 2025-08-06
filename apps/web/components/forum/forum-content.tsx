import { threads } from "@/const/fake-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import ThreadCard from "./thread-card";

export default function ForumContent() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Gần đây</TabsTrigger>
          <TabsTrigger value="featured">Nổi bật</TabsTrigger>
        </TabsList>
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Thảo luận gần đây</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {threads.map((thread) => (
                  <ThreadCard key={thread.id} thread={thread} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="featured">
          <Card>
            <CardHeader>
              <CardTitle>Thảo luận nổi bật</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {threads.map((thread) => (
                  <ThreadCard key={thread.id} thread={thread} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
