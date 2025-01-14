import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-6">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-2">Truyện Verse</h3>
            <p className="text-sm text-muted-foreground">
              Đọc truyện online, chia sẻ niềm đam mê
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">Trang chủ</Link>
              </li>
              <li>
                <Link href="/category">Thể loại</Link>
              </li>
              <li>
                <Link href="/rank">BXH</Link>
              </li>
              <li>
                <Link href="/post">Bài viết</Link>
              </li>
              <li>
                <Link href="/forum">Diễn đàn</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Liên hệ</Link>
              </li>
              <li>
                <Link href="/terms">Điều khoản dịch vụ</Link>
              </li>
              <li>
                <Link href="/privacy">Chính sách bảo mật</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Liên hệ</h3>
            <p className="text-sm text-muted-foreground">
              Email: truyenverse.support@gmail.com
            </p>
            <p className="text-sm text-muted-foreground">Hotline: 1900 1234</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Truyện Verse. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
