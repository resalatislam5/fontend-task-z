"use client";
import useFetch from "@/hooks/useFetch";
import Heading from "../base/Heading";
import Section from "../base/Section";
import Text from "../base/Text";
import { PostsTypes } from "@/types";

const Dashboard = () => {
  const { state: users } = useFetch<[]>("users");
  const { state: posts } = useFetch<PostsTypes[]>("posts");

  return (
    <Section>
      <div className="space-y-2">
        <Heading>Welcome Back</Heading>
        <Text> Here’s a quick overview of your stats:</Text>
      </div>
      <ul className="mt-4 space-y-2 text-gray-700">
        <li>
          <span className="font-semibold">• Users: </span>
          {users ? users?.length : 0}
        </li>
        <li>
          <span className="font-semibold">• Posts: </span>
          {posts ? posts.length : 0}
        </li>
      </ul>
    </Section>
  );
};

export default Dashboard;
