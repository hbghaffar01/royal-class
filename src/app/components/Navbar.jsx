"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "../constants";
import { SearchInput } from "./common/SearchInput";
import { Cart, WishList } from "../assets";
import { styles } from "../styles";
import { Search } from "../assets";

export const Navbar = () => {
  const [active, setActive] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full md:flex items-center justify-between py-5 border-b`}
    >
      <div className="flex justify-between items-center md:w-[40%] xs:w-full">
        <span className="font-[inter] font-bold md:text-3xl xs:text-2xl leading-3 md:p-0 xs:py-4">
          Royal Class
        </span>

        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            <>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </>
          ) : (
            <>
              <span className="block w-6 h-0.5 bg-black transform rotate-45"></span>
              <span className="block w-6 h-0.5 bg-black transform -rotate-45 -mt-0.5"></span>
            </>
          )}
        </button>
      </div>

      <div className="md:block xs:hidden w-full">
        <div className="md:flex items-center justify-between xs:block w-full md:w-auto font-[poppins]">
          <ul className="list-none hidden sm:flex md:flex-row items-center xs:flex-col gap-12 font-[poppins]">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "font-bold border-b border-black"
                    : "font-normal"
                } text-[18px] cursor-pointer hover:border-b hover:border-black`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex md:flex-row xs:flex-col md:items-center xs:items-start gap-6 md:p-0 xs:py-4">
            <SearchInput
              placeholder="What are you looking for?"
              value={searchText}
              icon={Search}
              onChange={(e) => setSearchText(e.target.value)}
              className="bg-gray-100"
            />
            <Image src={Cart} alt="cart" width={32} height={32} />
            <Image src={WishList} alt="Wish List" width={32} height={32} />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:flex md:gap-12 xs:block w-full md:w-auto font-[poppins]">
          <ul className="list-none md:flex gap-12 xs:block">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "font-bold border-b border-black"
                    : "font-normal"
                } text-[18px] cursor-pointer hover:border-b hover:border-black`}
                onClick={() => {
                  setActive(link.title);
                  setMenuOpen(false);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mt-4 md:mt-0">
            <SearchInput
              placeholder="What are you looking for?"
              value={searchText}
              icon={Search}
              onChange={(e) => setSearchText(e.target.value)}
              className="bg-gray-100"
            />
            <Image src={Cart} alt="cart" width={32} height={32} />
            <Image src={WishList} alt="Wish List" width={32} height={32} />
          </div>
        </div>
      )}
    </nav>
  );
};
