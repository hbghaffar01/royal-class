"use client";

import { SwiperHeader } from "./common/SwiperHeader";
import { Card } from "./common/Card";
import { SalesItems } from "../constants";
import { styles } from "../styles";
import CustomSwiper from "./common/CustomSwiper";
import Button from "./common/Button";
import { useState } from "react";

import SectionWrapper from "../hoc/SectionWrapper";

const ShopCart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = SalesItems.length;

  const handleNext = () => {
    if (currentIndex < totalItems - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <SwiperHeader
        indicator="Today"
        heading="Flash Sales"
        timer={true}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <CustomSwiper currentIndex={currentIndex}>
        {SalesItems.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </CustomSwiper>

      <div className="w-full flex items-center justify-center py-6">
        <Button color="bg-red-500">View All Products</Button>
      </div>
      <div className="border-b w-full py-4"></div>
    </div>
  );
};

export default SectionWrapper(ShopCart, "ShopCart");
