"use client"
import { styles } from "../styles";
import { SwiperHeader } from "./common/SwiperHeader";

import SectionWrapper from "../hoc/SectionWrapper";

const NewArrival = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <SwiperHeader indicator="Featured" heading="New Arrival" />
      <div className="flex items-center justify-between flex-wrap md:py-12 xs:py-6">
        <div className="md:w-[49%] w-full">
          <img
            src="/playstation.png"
            alt="shop now"
            className="object-cover w-full h-auto"
            fetchPriority="low"
            decoding="async"
          />
        </div>
        <div className="flex items-center gap-6 flex-col md:w-[49%] w-full">
          <div className="w-full">
            <img
              src="/women.png"
              alt="shop now"
              className="object-cover w-full h-auto"
              fetchPriority="low"
              decoding="async"
            />
          </div>
          <div className="flex items-center justify-between md:flex-nowrap xs:flex-wrap w-full md:gap-4 xs:gap-6">
            <img
              src="/soundsystem.png"
              alt="shop now"
              className="object-cover w-full h-auto"
              fetchPriority="low"
              decoding="async"
            />
            <img
              src="/perfume.png"
              alt="shop now"
              className="object-cover w-full h-auto"
              fetchPriority="low"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(NewArrival, "NewArrival");