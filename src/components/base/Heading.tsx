import { ReactNode } from "react";
import cn from "../utils/cn";

type variantEnum = "default" | "sm" | "lg";
const Heading = ({
  className,
  children,
  variant = "default",
}: {
  className?: string;
  children: ReactNode;
  variant?: variantEnum;
}) => {
  const size = {
    default: "text-3xl",
    sm: "text-xl",
    lg: "text-2xl",
  };
  return (
    <h1
      className={cn("font-semibold text-secondary", className, size[variant])}
    >
      {children}
    </h1>
  );
};

export default Heading;
