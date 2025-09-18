import { ReactNode } from "react";
import cn from "../utils/cn";

const Text = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return <p className={cn("", className)}>{children}</p>;
};

export default Text;
