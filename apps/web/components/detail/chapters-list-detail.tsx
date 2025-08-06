import { Button } from "@workspace/ui/components/button";

interface Chapter {
  id: number;
  title: string;
}

interface ChapterListProps {
  chapters: Chapter[];
  currentChapter: number;
  onSelectChapter: (chapterId: number) => void;
}

export function ChapterList({
  chapters,
  currentChapter,
  onSelectChapter,
}: ChapterListProps) {
  return (
    <div className="space-y-2">
      {chapters.map((chapter) => (
        <Button
          key={chapter.id}
          variant={chapter.id === currentChapter ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => onSelectChapter(chapter.id)}
        >
          {chapter.title}
        </Button>
      ))}
    </div>
  );
}
