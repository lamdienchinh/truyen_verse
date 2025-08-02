import { ChevronsRight } from "lucide-react";
import Link from "next/link";

interface ViewAllBtnProps {
  href?: string;
}

export const ViewAllBtn = ({ href }: ViewAllBtnProps) => {
  return (
    <Link className="flex items-center gap-1" href={href ?? ""}>
      <span className="font-semibold text-sm">Tất cả</span>
      <ChevronsRight width={18} height={18} />
    </Link>
  );
};
