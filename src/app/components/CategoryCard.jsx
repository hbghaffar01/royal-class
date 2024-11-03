"use client";

import { SwiperHeader } from "./common/SwiperHeader";
import CategoryBtn from "./common/CategoryBtn";
import { styles } from "../styles";
import CustomSwiper from "./common/CustomSwiper";
import { useEffect, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import ErrorBoundary from "../components/ErrorBoundary";

const CategoryCard = () => {
  const [CategoryItems, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/proxy/api/v1/categories");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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

  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <SwiperHeader
        indicator="Today'S"
        heading="Browse By Category"
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <CustomSwiper currentIndex={currentIndex} itemsToShow={6}>
        {CategoryItems.slice(currentIndex, currentIndex + 6).map((category) => (
          <ErrorBoundary key={category.id}>
            <CategoryBtn key={category.id} categories={[category]} />
          </ErrorBoundary>
        ))}
      </CustomSwiper>
    </div>
  );
}

export default SectionWrapper(CategoryCard, "CategoryCard");