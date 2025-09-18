import { ReactNode } from "react";
import cn from "../utils/cn";

const Section = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section className={cn("max-w-[2100px]", className)}>{children}</section>
  );
};

export default Section;
