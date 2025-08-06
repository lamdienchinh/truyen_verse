import { TBook } from "../types/book.schema";

export const booksMockData: TBook[] = [
  {
    id: "1",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-02"),
    name: "Book One",
    status: "published",
    publicDate: new Date("2024-01-03"),
  },
  {
    id: "2",
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-05"),
    name: "Book Two",
    status: "draft",
    publicDate: new Date("2024-01-06"),
  },
  {
    id: "3",
    createdAt: new Date("2024-01-07"),
    updatedAt: new Date("2024-01-08"),
    name: "Book Three",
    status: "published",
    publicDate: new Date("2024-01-09"),
  },
];
