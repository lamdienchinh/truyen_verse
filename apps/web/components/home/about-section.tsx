import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function AboutSection() {
  return (
    <section className="pb-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 text-start">
          Tại sao chọn Truyện Verse?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Đọc miễn phí</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hàng ngàn truyện chữ chất lượng cao hoàn toàn miễn phí.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Kho truyện đồ sộ</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Với hơn 10,000 tác phẩm từ nhiều thể loại khác nhau.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cộng đồng sôi động</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Trao đổi, bình luận và kết nối với hàng triệu độc giả khác.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
