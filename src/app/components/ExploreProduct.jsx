"use client";

import { styles } from "../styles";
import { SwiperHeader } from "./common/SwiperHeader";
import CustomSwiper from "./common/CustomSwiper";
import { Card } from "./common/Card";
import { useRouter } from "next/navigation";
import useFetchProducts from "../hooks/useFetchProducts";
import { useState } from "react";
import Button from "./common/Button";

import SectionWrapper from "../hoc/SectionWrapper";

const CategoryCard = () => {
  const { products: CategoryItems, error } = useFetchProducts();
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = Math.min(CategoryItems.length, 8);

  const handleNext = () => {
    if (currentIndex < totalItems - 6) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleViewMore = () => {
    router.push("/all-products");
  };

  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <SwiperHeader
        indicator="Our Products"
        heading="Explore Our Products"
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <CustomSwiper currentIndex={currentIndex}>
        {CategoryItems.map((product) => (
          <Card key={product.id} product={product} carousel={true} />
        ))}
      </CustomSwiper>
      <div className="w-full flex items-center justify-center py-4">
        <Button color="bg-red-500" onClick={handleViewMore}>
          View More
        </Button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}


export default SectionWrapper(CategoryCard, "CategoryCard");