import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section className="bg-white header">
      <div className="flex items-center justify-between page-container p-[20px]">
        <div>
          <h1 className="hidden">Planning Bootcamp</h1>
          <img srcSet="/images/logo.png 2x" alt="" />
        </div>
        <div className="font-semibold text-black nav items-center gap-[45px] md:flex hidden">
          <a className="transition duration-400 hover:text-blue" href="#coach">
            DIỄN GIẢ
          </a>
          <a className="transition duration-400 hover:text-blue" href="#agenda">
            LỊCH TRÌNH
          </a>
          <a
            className="transition duration-400 hover:text-blue"
            href="#buy-ticket"
          >
            MUA VÉ
          </a>
          <a className="transition duration-400 hover:text-blue" href="#place">
            ĐỊA ĐIỂM
          </a>
        </div>
        <div>
          <a
            className="btn-scale w-[200px] h-[40px] hidden md:inline-flex items-center bg-blue rounded-[23px] justify-center gap-[8px] text-[22px] font-bold"
            href="tel:1800 8087"
          >
            <img
              className="w-[23px] h-[23px] object-cover"
              srcSet="icons/phone-icon.png"
              alt=""
            />
            <span>1800 8087</span>
          </a>
          <div className="inline md:hidden" onClick={() => setShowMenu(true)}>
            <img
              className="w-[32px] h-[32px]"
              src="/icons/hamburger-menu.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowMenu(false)}
        className={`${
          showMenu
            ? "translate-x-0 opacity-100"
            : "-translate-x-[100%] opacity-0"
        } transition duration-500 font-semibold text-white nav items-center gap-[30px] md:gap-[45px] flex-col flex md:hidden fixed top-0 bottom-0 left-0 pt-[40px]  bg-darkBlue z-[9999]`}
      >
        <div
          className="absolute top-[20px] right-[20px]"
          onClick={() => setShowMenu(false)}
        >
          <img
            className="w-[26px] h-[26px]"
            src="/icons/close-menu.png"
            alt=""
          />
        </div>
        <h2 className="text-[24px] w-full border-b border-lightBlue1 text-center pb-[20px]">
          MENU
        </h2>
        <a
          className="transition duration-400 hover:text-blue"
          href="#coach"
          onClick={() => setShowMenu(false)}
        >
          DIỄN GIẢ
        </a>
        <a
          className="transition duration-400 hover:text-blue"
          href="#agenda"
          onClick={() => setShowMenu(false)}
        >
          LỊCH TRÌNH
        </a>
        <a
          className="transition duration-400 hover:text-blue"
          href="#buy-ticket"
          onClick={() => setShowMenu(false)}
        >
          MUA VÉ
        </a>
        <a
          className="transition duration-400 hover:text-blue"
          href="#place"
          onClick={() => setShowMenu(false)}
        >
          ĐỊA ĐIỂM
        </a>
        <a
          className="mx-[20px] w-[200px] h-[40px] inline-flex items-center bg-blue rounded-[23px] justify-center gap-[8px] text-[22px] font-bold"
          href="tel:1800 8087"
        >
          <img
            className="w-[23px] h-[23px] object-cover"
            srcSet="icons/phone-icon.png"
            alt=""
          />
          <span>1800 8087</span>
        </a>
      </div>
    </section>
  );
};

export default Header;
