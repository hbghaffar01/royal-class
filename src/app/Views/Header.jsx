"use client";

import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { ListItem } from "../components/common/ListItems";
import { listItems } from "../constants/index";
import { MobileFrame } from "../assets";
import { Divider } from "../components/common/Divider";

export default function Header() {
  const handleItemClick = (title) => {
    console.log("Item clicked:", title);
  };

  return (
    <header className="w-full overflow-hidden">
      <Navbar />
      <div className="md:flex items-center xs:block gap-6">
        <div className="md:w-[40%] xs:w-full relative">
          <Divider />
          <div className="w-full py-6">
          {listItems.map((item) => (
            <ListItem
              key={item.id}
              title={item.title}
              image={item.image}
              onClick={() => handleItemClick(item)}
            />
          ))}
          </div>
        </div>
        <div className="flex items-center w-full md:pl-8 md:pr-20 md:py-4 xs:p-6">
          <Image
            src={MobileFrame}
            alt={MobileFrame}
            objectFit="contain"
            className="w-full"
          />
        </div>
      </div>
    </header>
  );
}
