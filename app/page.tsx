import BlogCard from "@/components/BlogCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl px-4 mx-auto grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </main>
  );
}
