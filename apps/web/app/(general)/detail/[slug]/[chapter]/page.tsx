"use client";

import { ChapterList } from "@/components/detail/chapters-list-detail";
import { DiscussionTab } from "@/components/detail/discusstion-tab";
import { chapter_detail } from "@/const/fake-data";
import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Slider } from "@workspace/ui/components/slider";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  List,
  Sliders,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fonts = [
  { name: "Sans-serif", value: "sans-serif" },
  { name: "Serif", value: "serif" },
  { name: "Monospace", value: "monospace" },
];

const chapters = [
  { id: 1, title: "Chương 1" },
  { id: 2, title: "Chương 2" },
  { id: 3, title: "Chương 3" },
  { id: 4, title: "Chương 4" },
];

export default function Chapter() {
  const [showSettings, setShowSettings] = useState(false);
  const [showChapterList, setShowChapterList] = useState(false);
  const [fontSize, setFontSize] = useState<number>(16);
  const [lineHeight, setLineHeight] = useState<number>(1.3);
  const [font, setFont] = useState("sans-serif");
  const [theme] = useState("bg-background text-background-foreground");
  const [currentChapter, setCurrentChapter] = useState(1);

  return (
    <section
      className={`container min-h-screen ${theme} transition-colors duration-300`}
    >
      <div className="mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Link
                href="/detail/abcd"
                className="block px-2 py-1 h-fit border rounded-sm border-secondary"
              >
                <ChevronsLeft width={14} height={14} />
              </Link>
              <h1 className="text-xl font-bold">Tiên Đạo? Tử Đạo!</h1>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jue Luyến Thương
            </p>
          </div>
          <div className="my-3 font-semibold">
            Chương 450: Giang Sở trạm đội thời gian nhoáng một cái, ra về.
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowChapterList(true)}
              aria-label="Open chapter list"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowSettings(true)}
              aria-label="Open settings"
            >
              <Sliders className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div
          className="prose max-w-none mb-8 dark:prose-invert"
          style={{
            fontFamily: font,
            fontSize: `${fontSize}px`,
            lineHeight: lineHeight,
          }}
          dangerouslySetInnerHTML={{ __html: chapter_detail.content }}
        />

        <div className="flex justify-between mb-8">
          <Button
            variant="outline"
            onClick={() => setCurrentChapter(Math.max(1, currentChapter - 1))}
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Chương trước
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setCurrentChapter(Math.min(chapters.length, currentChapter + 1))
            }
          >
            Chương sau <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <DiscussionTab />

        <Dialog open={showSettings} onOpenChange={setShowSettings}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tuỳ chỉnh giao diện</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Font chữ
                </label>
                <Select
                  onValueChange={(value) => setFont(value)}
                  defaultValue={font}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a font" />
                  </SelectTrigger>
                  <SelectContent>
                    {fonts.map((font) => (
                      <SelectItem key={font.value} value={font.value}>
                        {font.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Cỡ chữ: {fontSize}px
                </label>
                <Slider
                  min={12}
                  max={24}
                  step={1}
                  value={[fontSize]}
                  onValueChange={(value) => setFontSize(value[0] ?? 12)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Chiều cao hàng: {lineHeight}
                </label>
                <Slider
                  min={1}
                  max={2}
                  step={0.1}
                  value={[lineHeight]}
                  onValueChange={(value) => setLineHeight(value[0] ?? 1)}
                  className="w-full"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={showChapterList} onOpenChange={setShowChapterList}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Danh sách chương</DialogTitle>
            </DialogHeader>
            <ChapterList
              chapters={chapters}
              currentChapter={currentChapter}
              onSelectChapter={(chapterId) => {
                setCurrentChapter(chapterId);
                setShowChapterList(false);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
