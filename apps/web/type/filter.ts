export interface FilterOption {
  label: string;
  value: string;
}

export interface NovelFilters {
  status: string[];
  properties: string[];
  genres: string[];
  chapterCount: string[];
  characterTraits: string[];
  search: string;
  sort: string;
}
