"use client";

import React, { useEffect, useState } from "react";

export default function CustomSwiper({ currentIndex, children, itemsToShow: cardNumbers }) {
  const [itemsToShow, setItemsToShow] = useState(cardNumbers || 6);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;

      if (!cardNumbers) {
        if (width < 600) {
          setItemsToShow(1);
        } else if (width < 900) {
          setItemsToShow(2);
        } else {
          setItemsToShow(4);
        }
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, [cardNumbers]);

  const totalItems = React.Children.count(children);

  if (totalItems === 0) {
    return <div>No items available</div>;
  }

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden w-full md:justify-between xs:justify-center items-center gap-4">
        {React.Children.toArray(children).slice(
          currentIndex,
          currentIndex + itemsToShow
        )}
      </div>
    </div>
  );
}
