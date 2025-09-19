"use client";

import Heading from "@/components/base/Heading";
import Text from "@/components/base/Text";
import Link from "next/link";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-lg mx-auto gap-8">
      <Heading>Something Went Wrong</Heading>
      <Text>
        Error Details:{" "}
        {error.message
          ? error.message
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nisi! Ratione minus earum cumque animi sunt accusantium repellendus sit repellat sed architecto? At, magnam? Minus non ut porro ea debitis!"}
      </Text>
      <div className="flex gap-5">
        <Link
          className="px-5 py-2 bg-teal-600 text-white rounded-lg border border-teal-600 "
          href={"/"}
        >
          GO Back Home
        </Link>
        <button
          className="cursor-pointer px-5 py-2 border border-teal-600 rounded-lg"
          onClick={reset}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default error;
