import Link from "next/link";

type FooterLink = { href: string; label: string };

const linkGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: "Liên kết",
    links: [
      { href: "/", label: "Trang chủ" },
      { href: "/category", label: "Thể loại" },
      { href: "/rank", label: "BXH" },
      { href: "/post", label: "Bài viết" },
      { href: "/forum", label: "Diễn đàn" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Liên hệ" },
      { href: "/terms", label: "Điều khoản dịch vụ" },
      { href: "/privacy", label: "Chính sách bảo mật" },
    ],
  },
];

const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <h3 className="font-semibold mb-3">{title}</h3>
    <ul className="space-y-2 text-sm">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-muted py-8 w-full">
      <div className="container">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-3 text-lg">Truyện Verse</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Đọc truyện online, chia sẻ niềm đam mê
            </p>
          </div>

          {linkGroups.map((group) => (
            <FooterLinkGroup key={group.title} {...group} />
          ))}

          <div>
            <h3 className="font-semibold mb-3">Liên hệ</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:truyenverse.support@gmail.com"
                  className="hover:text-foreground transition-colors duration-200 break-words"
                >
                  truyenverse.support@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Hotline:</span>{" "}
                <a
                  href="tel:19001234"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  1900 1234
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Truyện Verse. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
