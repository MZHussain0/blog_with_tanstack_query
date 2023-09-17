import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Edit2Icon, Trash2Icon } from "lucide-react";

interface ActionButtonsProps {}

const ActionButtons: FC<ActionButtonsProps> = ({}) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <Button variant={"secondary"}>
        <Edit2Icon className="w-5 h-5 mr-2" />
        <Link href="/edit/1" className="font-semibold">
          EDIT
        </Link>
      </Button>
      <Button variant={"destructive"}>
        <Trash2Icon className="w-5 h-5 mr-2" />
        <Link href={"/delete/1"} className="font-semibold">
          DELETE
        </Link>
      </Button>
    </div>
  );
};

export default ActionButtons;
