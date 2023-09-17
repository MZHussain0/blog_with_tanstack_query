import ActionButtons from "@/components/ActionButtons";
import BackButton from "@/components/BackButton";
import { FC } from "react";

interface pageProps {}

const BlogIdPage: FC<pageProps> = ({}) => {
  return (
    <div className="mx-10">
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Blog One</h2>
        <ActionButtons />B
      </div>
      <div className="text-muted">
        <p>Content</p>
      </div>
    </div>
  );
};

export default BlogIdPage;
