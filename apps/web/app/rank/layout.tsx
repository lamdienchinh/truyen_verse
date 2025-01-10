import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ScrollToTopButton from "@workspace/ui/components/scroll-top-btn";

export default function RankLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
