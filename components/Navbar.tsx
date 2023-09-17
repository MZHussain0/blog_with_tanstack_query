import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="p-4 flex items-center justify-between w-full bg-secondary">
      <div className="mx-24">
        <Button variant={"ghost"}>
          <Link href={"/"} className="text-primary font-medium text-lg">
            Tanstack Blog
          </Link>
        </Button>
      </div>
      <Button variant={"default"}>
        <Link href={"/create"}>Create Post</Link>
      </Button>
    </div>
  );
};

export default Navbar;
