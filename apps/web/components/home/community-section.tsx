import facebook_iocon from "@/assets/icons/facebook-icon.svg";
import { Button, buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-primary text-primary-foreground w-full">
      <div className="container mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Tham gia cộng đồng Truyện Verse
        </h2>
        <p className="text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl mx-auto">
          Kết nối với hàng ngàn độc giả, chia sẻ cảm nhận và khám phá truyện
          mới!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
          <Button variant="secondary" className="text-xs sm:text-sm">
            <Image
              alt="facebook logo"
              src={facebook_iocon}
              className="mr-2 h-3 w-3 sm:h-4 sm:w-4"
            />
            Nhóm Facebook
          </Button>
          <Link
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "default",
              }),
              "text-xs sm:text-sm flex items-center"
            )}
            href="/forum"
          >
            <MessageCircle className="h-2 w-2" /> Diễn đàn
          </Link>
        </div>
      </div>
    </section>
  );
}
