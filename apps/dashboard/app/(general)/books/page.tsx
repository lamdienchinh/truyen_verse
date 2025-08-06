import { BookHeader } from "@/features/books/components/book-header";
import BookTable from "@/features/books/components/book-table";
import SearchFilter from "@/features/books/components/search-filter";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";

export default function Page() {
  return (
    <section className="w-full pt-[40px]">
      <Card>
        <CardContent>
          <CardHeader className="px-0">
            <BookHeader />
            <SearchFilter />
          </CardHeader>
          <BookTable />
        </CardContent>
      </Card>
    </section>
  );
}
