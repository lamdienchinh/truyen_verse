import { Book } from "lucide-react";

export function BookHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="flex items-center gap-2 text-xl font-bold mb-2">
          <Book /> Quản lý truyện của bạn
        </h1>
        <p className="text-muted-foreground">
          Theo dõi và quản lý các truyện của bạn
        </p>
      </div>
    </div>
  );
}
