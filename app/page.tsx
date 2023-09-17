import BlogCard from "@/components/BlogCard";
import { db } from "@/lib/db";
import axios from "axios";

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      body: true,
      Category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
}

export default async function Home() {
  const blogs = await getPosts();
  return (
    <main className="max-w-7xl px-4 mx-auto grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {blogs.map((item) => (
        <BlogCard blog={item} key={item.id} />
      ))}
    </main>
  );
}
