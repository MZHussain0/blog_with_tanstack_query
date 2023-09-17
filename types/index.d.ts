import { Category } from "@prisma/client";
export type BlogFormInputProps = {
  title: string;
  body: string;
  category: string;
};

export type BlogProps = {
  id: string;
  title: string;
  body: string;
  Category: Category;
};
