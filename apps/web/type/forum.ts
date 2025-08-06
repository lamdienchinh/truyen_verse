export interface IDiscussion {
  id: string;
  title: string;
  author: string;
  replies: number;
  views: number;
  postDate: string;
  lastReplied: {
    author: string;
    date: string | Date;
  }
  likes: number;
  isPinned: boolean;
  isHot: boolean;
}