import ActionButtons from "@/components/ActionButtons";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import axios from "axios";
import { FC } from "react";

interface BlogIdPageProps {
  params: {
    id: string;
  };
}

async function getBlog(id: string) {
  const response = await db.post.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      body: true,
      Category: true,
    },
  });

  return response;
}

const BlogIdPage: FC<BlogIdPageProps> = async ({ params }) => {
  const blog = await getBlog(params.id);
  return (
    <div className="mx-10">
      <BackButton />
      <div className="mb-8">
        <div className="flex items-center justify-start gap-4">
          <h2 className="text-2xl font-bold my-4">{blog?.title}</h2>
          <Button variant={"secondary"}>{blog?.Category.name}</Button>
        </div>
        <ActionButtons />
      </div>
      <div className="text-muted">
        <p>{blog?.body}</p>
      </div>
    </div>
  );
};

export default BlogIdPage;
