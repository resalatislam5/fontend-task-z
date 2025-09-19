"use client";
import { ReactNode, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed  inset-0 flex justify-center items-center px-5 bg-black/20 ">
          <div
            ref={modalRef}
            className="bg-white min-w-80 max-w-[700px] min-h-96 z-50 rounded-xl px-5 py-8 relative"
          >
            <button
              className="absolute right-5 top-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <IoClose className="text-2xl" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
