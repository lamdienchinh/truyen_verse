import { FilterOption } from "@/type/filter";
import { cn } from "@workspace/ui/lib/utils";

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selected: string[];
  onChange: (value: string) => void;
}

export function FilterSection({
  title,
  options,
  selected,
  onChange,
}: FilterSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "px-3 py-2 rounded-full text-xs border transition-colors",
              selected.includes(option.value)
                ? "bg-primary text-primary-foreground border-primary"
                : "border-input bg-background"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
