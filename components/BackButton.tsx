"use client";
import { FC } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, MoveLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {}

const BackButton: FC<BackButtonProps> = ({}) => {
  const router = useRouter();
  return (
    <Button
      className="mt-10 text-destructive text-xl"
      onClick={() => router.back()}>
      <ChevronLeft /> back
    </Button>
  );
};

export default BackButton;
