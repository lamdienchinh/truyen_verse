import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import { ArticleFilter } from "./article-filter";
import { ArticleHeader } from "./article-header";
import { ArticlesTable } from "./articles-table";

export function ArticlesSection() {
  return (
    <div className="space-y-6">
      <ArticleHeader />
      <Card>
        <CardHeader>
          <ArticleFilter />
        </CardHeader>
        <CardContent>
          <ArticlesTable />
        </CardContent>
      </Card>
    </div>
  );
}
