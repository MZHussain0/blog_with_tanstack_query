"use client";
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";

interface ActionButtonsProps {
  id: string;
}

const ActionButtons: FC<ActionButtonsProps> = ({ id }) => {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`);
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
        title: "Blog DELETED successfully!",
      });
      router.push("/");
      router.refresh();
    },
  });
  return (
    <div className="flex items-center justify-start gap-4">
      <Button variant={"secondary"}>
        <Edit2Icon className="w-5 h-5 mr-2" />
        <Link href={`/edit/${id}`} className="font-semibold">
          EDIT
        </Link>
      </Button>
      <Button
        disabled={isLoading}
        variant={"destructive"}
        onClick={() => deletePost()}>
        <Trash2Icon className="w-5 h-5 mr-2" />
        DELETE
      </Button>
    </div>
  );
};

export default ActionButtons;
