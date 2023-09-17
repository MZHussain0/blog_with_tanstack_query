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

interface BlogCardProps {}

const BlogCard: FC<BlogCardProps> = ({}) => {
  return (
    <Card className="shadow-lg shadow-muted-foreground bg-muted-foreground">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex items-end justify-end">
        <Button variant={"link"}>
          <Link href={"/"} className="font-bold text-lg">
            Read more...
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
