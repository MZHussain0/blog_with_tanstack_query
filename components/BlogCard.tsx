import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { BlogProps } from "@/types";

interface BlogCardProps {
  blog: BlogProps;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="shadow-lg shadow-muted-foreground bg-muted">
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{blog.body}</p>
      </CardContent>
      <CardFooter className="flex items-end justify-between">
        <Button
          variant={"destructive"}
          className="text-white rounded-full text-sm">
          {blog?.Category?.name}
        </Button>
        <Button variant={"link"}>
          <Link href={`/blog/${blog.id}`} className="font-bold text-lg">
            Read more...
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
