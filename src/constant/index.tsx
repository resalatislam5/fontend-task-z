import { BsFileEarmarkPostFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";

export const headerItems = [
  {
    icon: <MdSpaceDashboard />,
    name: "Dashboard",
    href: "/",
  },
  {
    icon: <BsFileEarmarkPostFill />,
    name: "Posts",
    href: "/posts",
  },
  {
    icon: <HiUsers />,
    name: "Users",
    href: "/users",
  },
];
