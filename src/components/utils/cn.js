import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...rest) => {
  return twMerge(clsx(...rest));
};

export default cn;
