"use client";
import { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { BlogFormInputProps } from "@/types";
import { Category } from "@prisma/client";

interface BlogFormProps {
  onSubmit: SubmitHandler<BlogFormInputProps>;
  isEditing: boolean;
}

const FormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "title must be at least 2 characters.",
    })
    .max(80, { message: "title must be less than 80 characters" }),
  body: z.string().min(2, {
    message: "body must be at least 2 characters.",
  }),
  category: z.string({
    required_error: "Please select an category",
  }),
});

const BlogForm: FC<BlogFormProps> = ({ onSubmit, isEditing }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    // @ts-ignore
    resolver: zodResolver(FormSchema),
  });

  // Fetch categories list
  const { data: dataCategories, isLoading: isLoadingCategories } = useQuery<
    Category[]
  >({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("/api/categories");
      return response.data;
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Blog title.."
                  {...field}
                  className="text-black"
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog body</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write the contents of your blog here"
                  className="resize-none text-black"
                  {...field}
                />
              </FormControl>
              <FormDescription>Details of your blog</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="bg-primary">
              <FormLabel>Category</FormLabel>
              <Select
                disabled={isLoadingCategories}
                onValueChange={field.onChange}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-black">
                    <SelectValue placeholder="Select  a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-primary text-white">
                  {dataCategories?.map((item) => (
                    <SelectItem key={item.id} value={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Select a appropriate category which fits the topic of the blog
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant={"destructive"}
          size={"lg"}
          type="submit"
          className="max-w-lg w-full text-xl font-semibold">
          {isEditing ? "Update" : "Publish"}
        </Button>
      </form>
    </Form>
  );
};

export default BlogForm;
