import { ReactNode } from "react";
import Header from "@/components/shared/Header";
import SideBar from "@/components/shared/SideBar";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="relative min-h-[calc(100vh-80px)]">
        <SideBar />
        <div className="xl:ml-80 lg:ml-64 ml-20 lg:p-10 xl:p-12 p-7">
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;
