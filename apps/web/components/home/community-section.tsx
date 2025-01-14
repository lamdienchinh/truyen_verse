import facebook_iocon from "@/assets/icons/facebook-icon.svg";
import { Button } from "@workspace/ui/components/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-2xl font-bold mb-4">
          Tham gia cộng đồng Truyện Verse
        </h2>
        <p className="mb-6">
          Kết nối với hàng ngàn độc giả, chia sẻ cảm nhận và khám phá truyện
          mới!
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="secondary">
            <Image
              alt="facebook logo"
              src={facebook_iocon}
              className="mr-2 h-4 w-4"
            />{" "}
            Nhóm Facebook
          </Button>
          <Link href="/forum">
            <Button variant="secondary">
              <MessageCircle className="mr-2 h-4 w-4" /> Diễn đàn
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
