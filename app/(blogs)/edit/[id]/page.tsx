"use client";
import BlogForm from "@/components/BlogForm";
import { useToast } from "@/components/ui/use-toast";
import { BlogFormInputProps } from "@/types";
import { ToastAction } from "@radix-ui/react-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type Props = {
  params: {
    id: string;
  };
};

const EditPage = ({ params }: Props) => {
  const { id } = params;
  const { toast } = useToast();
  const router = useRouter();

  const { data: dataPost, isLoading: postLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const { mutate: updatePost, isLoading } = useMutation({
    mutationFn: (newPost: BlogFormInputProps) => {
      return axios.patch(`/api/posts/${id}`, newPost);
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
        title: "Blog UPDATED successfully!",
      });
      router.refresh();
      router.push("/");
    },
  });

  const handleEditPost: SubmitHandler<BlogFormInputProps> = (data) => {
    updatePost(data);
  };
  return (
    <>
      {postLoading ? (
        <div className="">Loading...</div>
      ) : (
        <div className="max-w-3xl mx-auto flex flex-col gap-y-10 items-center mt-10">
          <h1 className="text-2xl font-semibold text-green-400">Edit post</h1>
          <BlogForm
            onSubmit={handleEditPost}
            isEditing
            initialValue={dataPost}
            isLoading={isLoading}
          />
        </div>
      )}
    </>
  );
};

export default EditPage;
