import NovelsRanking from "@/components/rank/novels-rank";
import UsersRanking from "@/components/rank/user-rank";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
export default function Rank() {
  return (
    <section className="container space-y-4 my-8 min-h-screen">
      <h2 className="text-center text-2xl font-semibold uppercase">
        Đại lộ danh vọng
      </h2>
      <div>
        <Tabs
          className="flex flex-col items-center justify-center w-full"
          defaultValue="novels"
        >
          <TabsList className="flex items-center gap-2 w-fit">
            <TabsTrigger value="novels">Truyện</TabsTrigger>
            <TabsTrigger value="users">Người dùng</TabsTrigger>
          </TabsList>
          <div className="w-full">
            <TabsContent
              value="novels"
              className="w-full flex justify-center"
              asChild
            >
              <NovelsRanking />
            </TabsContent>
            <TabsContent
              value="users"
              className="w-full flex justify-center"
              asChild
            >
              <UsersRanking />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
