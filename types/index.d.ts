import { Category } from "@prisma/client";
export type BlogFormInputProps = {
  title: string;
  body: string;
  categoryId: string;
};

export type BlogProps = {
  id: string;
  title: string;
  body: string;
  Category: Category;
};
