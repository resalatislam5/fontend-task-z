import { headerItems } from "@/constant";
import Anchor from "../base/Anchor";

const SideBar = () => {
  return (
    <div className="border-r border-gray-100 xl:w-80 lg:w-60 w-20 h-full absolute xl:px-10 px-5 py-10">
      <div className="flex flex-col items-center lg:items-start gap-5">
        {headerItems.map((item, i) => (
          <Anchor key={i} href={item.href}>
            <span className="text-2xl">{item.icon}</span>
            <span className="lg:flex hidden">{item.name}</span>
          </Anchor>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
