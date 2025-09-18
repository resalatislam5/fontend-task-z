import { PostsTypes } from "@/types";
import Heading from "../base/Heading";
import Text from "../base/Text";
import Link from "next/link";

const Card = ({ data }: { data: PostsTypes }) => {
  return (
    <div className="space-y-2 sm:w-96 border border-gray-400 p-3 rounded-lg">
      <Link href={`posts/${data.id}`}>
        <Heading className="capitalize my-2" variant="sm">
          {data.title}
        </Heading>
      </Link>
      <Text>{data.body}</Text>
    </div>
  );
};

export default Card;
