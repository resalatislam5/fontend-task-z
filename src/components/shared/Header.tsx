import Anchor from "../base/Anchor";

const Header = () => {
  return (
    <div className="relative lg:h-20 h-16 ">
      <header className="lg:h-20 h-16 fixed inset-0 z-50 bg-white border-b border-gray-100">
        <div className="flex gap-5 justify-between items-center px-10 h-full">
          <Anchor href="/" className="font-bold">
            LOGO
          </Anchor>
          <div className="size-10 rounded-full bg-gray-400"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
