"use client"

import { styles } from "../styles";
import Button from "./common/Button";
import { SwiperHeader } from "./common/SwiperHeader";
import CustomSwiper from "./common/CustomSwiper";
import { bestSelling } from "../constants";
import { Card } from "./common/Card";
import SectionWrapper from "../hoc/SectionWrapper";

const BestSelling = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.paddingY} w-full`}>
        <SwiperHeader
          indicator="This Month"
          heading="Best Selling Products"
          Button={<Button color="bg-red-500">View All</Button>}
        />
        <CustomSwiper currentIndex={0}>
          {bestSelling.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </CustomSwiper>
      </div>
      <div className="w-full md:py-8 py-6 md:px-20 px-6">
        <img
          src="/buynow.png"
          alt="shop now"
          className="object-contain w-full h-auto"
          fetchPriority="low"
          decoding="async"
        />
      </div>
    </>
  );
}

export default SectionWrapper(BestSelling, "BestSelling");