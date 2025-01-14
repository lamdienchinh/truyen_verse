import { StaticImageData } from 'next/image';
export interface IArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string | StaticImageData;
  category: string;
  date: Date;
  author: string;
}
