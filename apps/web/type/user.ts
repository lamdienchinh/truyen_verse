export interface IUser {
  _id: string;
  email?: string;
  name: string;
  avatar: string;
  createdAt?: string;
  updatedAt?: string;
  status: string;
  readingCount: number;
  readCount: number;
  reviewCount: number;
  joinDate: Date | string;
  about: string;
}
