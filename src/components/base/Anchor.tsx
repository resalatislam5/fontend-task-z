import Link from "next/link";
import { ReactNode } from "react";
import cn from "../utils/cn";

const Anchor = ({
  className,
  children,
  href = "#",
}: {
  className?: string;
  children: ReactNode;
  href?: string;
}) => {
  return (
    <Link
      className={cn(
        "text-lg font-semibold text-[#343434] flex items-center gap-2",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Anchor;
