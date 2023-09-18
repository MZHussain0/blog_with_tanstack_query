"use client";
import BackButton from "@/components/BackButton";
import BlogForm from "@/components/BlogForm";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { BlogFormInputProps } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type Props = {};

const CreatePage = (props: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const handleCreatePost: SubmitHandler<BlogFormInputProps> = (data) => {
    createPost(data);
  };

  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: (newPost: BlogFormInputProps) => {
      return axios.post("/api/posts/create", newPost);
    },
    onError: () =>
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      }),

    onSuccess: () => {
      toast({
        variant: "default",
        title: "Blog published successfully!",
      });
      router.push("/");
      router.refresh();
    },
  });
  return (
    <>
      <BackButton />
      <div className="max-w-3xl mx-auto flex flex-col gap-y-10 items-center mt-10">
        <h1 className="text-2xl font-semibold text-green-400">Add new post</h1>
        <BlogForm onSubmit={handleCreatePost} isEditing={false} />
      </div>
    </>
  );
};

export default CreatePage;
