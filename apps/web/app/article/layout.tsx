import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ScrollToTopBtn from "@workspace/ui/components/scroll-top-btn";

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTopBtn />
    </>
  );
}
