"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@workspace/ui/components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { cn } from "@workspace/ui/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

const genres = [
  { value: "tien-hiep", label: "Tiên Hiệp" },
  { value: "kiem-hiep", label: "Kiếm Hiệp" },
  { value: "ngon-tinh", label: "Ngôn Tình" },
  { value: "do-thi", label: "Đô Thị" },
  { value: "xuyen-khong", label: "Xuyên Không" },
  { value: "trinh-tham", label: "Trinh Thám" },
];

export function GenreFilter({
  onChange,
}: {
  onChange: (values: string[]) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between md:w-[200px]"
        >
          {selectedValues.length > 0
            ? `${selectedValues.length} thể loại đã chọn`
            : "Chọn thể loại"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 md:w-[200px]">
        <Command>
          <CommandInput placeholder="Tìm thể loại..." />
          <CommandEmpty>Không tìm thấy thể loại.</CommandEmpty>
          <CommandGroup>
            {genres.map((genre) => (
              <CommandItem
                key={genre.value}
                onSelect={() => {
                  setSelectedValues((current) =>
                    current.includes(genre.value)
                      ? current.filter((value) => value !== genre.value)
                      : [...current, genre.value]
                  );
                  onChange(selectedValues);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedValues.includes(genre.value)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {genre.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
