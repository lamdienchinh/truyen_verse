import { StaticImageData } from "next/image";

export interface INovel {
  title: string;
  author: string;
  cover?: string | StaticImageData;
  desc?: string;
  totalChapters?: number;
  category?: string;
  slug?: string;
}
