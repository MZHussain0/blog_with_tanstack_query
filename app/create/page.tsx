"use client";
import BackButton from "@/components/BackButton";
import BlogForm from "@/components/BlogForm";
import { BlogFormInputProps } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type Props = {};

const CreatePage = (props: Props) => {
  const handleCreatePost: SubmitHandler<BlogFormInputProps> = (data) => {
    console.log(data);
  };
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
