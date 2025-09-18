import { PostsTypes } from "@/types";
import Heading from "../base/Heading";
import Text from "../base/Text";
import Link from "next/link";
import cn from "../utils/cn";

const Card = ({
  data,
  className,
}: {
  data: PostsTypes;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "space-y-2 sm:w-96 border border-gray-400 p-3 rounded-lg",
        className
      )}
    >
      <Link href={`posts/${data.id}`}>
        <Heading className="capitalize my-2" variant="sm">
          {data.title.length > 50
            ? data.title.slice(0, 50) + "..."
            : data.title}
        </Heading>
      </Link>
      <Text>
        {data.body.length > 100 ? data.body.slice(0, 100) + "..." : data.body}
      </Text>
    </div>
  );
};

export default Card;
