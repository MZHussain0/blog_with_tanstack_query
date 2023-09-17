"use client";
import BlogForm from "@/components/BlogForm";
import { BlogFormInputProps } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type Props = {};

const EditPage = (props: Props) => {
  const handleEditPost: SubmitHandler<BlogFormInputProps> = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-y-10 items-center mt-10">
      <h1 className="text-2xl font-semibold text-green-400">Edit post</h1>
      <BlogForm onSubmit={handleEditPost} isEditing />
    </div>
  );
};

export default EditPage;
