import Anchor from "../base/Anchor";

const Header = () => {
  return (
    <header className="lg:h-20 h-16 my-auto border-b border-gray-100">
      <div className="flex gap-5 justify-between items-center px-10 h-full">
        <Anchor href="/" className="font-bold">
          LOGO
        </Anchor>
        <div className="size-10 rounded-full bg-gray-400"></div>
      </div>
    </header>
  );
};

export default Header;
