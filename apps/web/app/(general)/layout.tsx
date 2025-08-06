import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ScrollToTopButton from "@workspace/ui/components/scroll-top-btn";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className='w-full flex flex-col items-center'>{children}</div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
