"use client";

import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Card from "@/components/shared/Card";
import PostSkeleton from "@/components/shared/PostSkeleton";
import useFetch from "@/hooks/useFetch";
import { PostsTypes } from "@/types";

const Posts = () => {
  const { state: posts, isLoading } = useFetch("posts");
  return (
    <Section>
      <Heading>ALL Posts ({posts.length ?? 0})</Heading>

      <div className="flex flex-wrap gap-5 mt-10">
        {isLoading ? (
          <>
            {[...Array(10)].map((_, i) => (
              <PostSkeleton key={i} />
            ))}
          </>
        ) : (
          <>
            {posts.map((item: PostsTypes) => (
              <Card key={item?.id} data={item} />
            ))}
          </>
        )}
      </div>
    </Section>
  );
};

export default Posts;
