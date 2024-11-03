"use client";

import { useState } from "react";
import { styles } from "../styles";
import { SearchInput } from "./common/SearchInput";
import { apps, qrcode, send, social } from "../assets";
import Image from "next/image";

export default function Footer() {
  const [searchText, setSearchText] = useState("");

  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} w-full bg-black text-white`}
    >
      <div className="flex items-center md:gap-20 xs:gap-10 md:flex-nowrap xs:flex-wrap">
        <div className="flex flex-col gap-8 md:w-1/4 xs:w-full">
          <h1 className="text-2xl font-bold font-[inter]">Exclusive</h1>
          <span className="text-xl font-medium font-[poppins]">Subscribe</span>
          <p className="font-normal font-[poppins]">
            Get 10% off your first order
          </p>
          <SearchInput
            placeholder="Enter your email"
            value={searchText}
            icon={send}
            onChange={(e) => setSearchText(e.target.value)}
            className="border-transparent"
          />
        </div>

        <div className="flex flex-col gap-6 md:w-1/5 xs:w-full">
          <h1 className="text-2xl font-bold font-[inter]">Support</h1>
          <span className="text-xl font-medium font-[poppins]">
            21st Floor, The Binary Tower, Marasi Drive, Business bay, Dubai
          </span>
          <p className="font-normal font-[poppins]">info@royalclass.group</p>
          <p className="font-normal font-[poppins]">+971 42 408 999</p>
        </div>

        <div className="flex flex-col gap-4 md:w-1/5 xs:w-full">
          <h1 className="text-2xl font-bold font-[inter]">Account</h1>
          <span className="font-normal font-[poppins]">My Account</span>
          <span className="font-normal font-[poppins]">Login / Register</span>
          <span className="font-normal font-[poppins]">Cart</span>
          <span className="font-normal font-[poppins]">Wishlist</span>
          <span className="font-normal font-[poppins]">Shop</span>
        </div>

        <div className="flex flex-col gap-6 md:w-1/5 xs:w-full">
          <h1 className="text-2xl font-bold font-[inter]">Quick Link</h1>
          <span className="font-normal font-[poppins]">Privacy Policy</span>
          <span className="font-normal font-[poppins]">Terms Of Use</span>
          <span className="font-normal font-[poppins]">FAQ</span>
          <span className="font-normal font-[poppins]">Contact</span>
        </div>

        <div className="flex flex-col md:w-1/5 xs:w-full gap-4">
          <h1 className="text-2xl font-bold font-[inter]">Download App</h1>
          <div className="flex items-center gap-4 md:flex-nowrap xs:flex-wrap">
            <Image src={qrcode} alt="cart" width={75} height={75} />
            <Image src={apps} alt="cart" width={100} height={100} />
          </div>
          <div className="w-full py-8">
            <Image
              src={social}
              alt="social media links"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
