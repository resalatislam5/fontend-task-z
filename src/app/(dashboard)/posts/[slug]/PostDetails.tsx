"use client";
import Heading from "@/components/base/Heading";
import Text from "@/components/base/Text";
import useFetch from "@/hooks/useFetch";
import { PostsTypes } from "@/types";

const PostDetails = ({ slug }: { slug: number }) => {
  const { state: post, isLoading } = useFetch<PostsTypes>(`posts/${slug}`);
  if (isLoading) return <div>Loading...</div>; // Show loading state

  if (!post) return;
  return (
    <section>
      <Heading className="mb-12">Post Details </Heading>
      <div className={"space-y-2 sm:w-[800px]"}>
        <Heading className="capitalize my-2" variant="sm">
          {post.title}
        </Heading>
        <Text>{post.body}</Text>
      </div>
    </section>
  );
};

export default PostDetails;
