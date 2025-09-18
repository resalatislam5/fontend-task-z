import { ReactNode } from "react";
import cn from "../utils/cn";

const Heading = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h1 className={cn("text-3xl font-semibold text-secondary", className)}>
      {children}
    </h1>
  );
};

export default Heading;
