"use client"

import { styles } from "../styles";
import ServiceCard from "./common/ServiceCard";
import { servicesItems } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const Services = () => {
  return (
    <div className={`${styles.paddingX} pt-0 md:pb-24 xs:pb-6 w-full`}>
      <div className="flex items-center justify-between flex-wrap">
        {servicesItems.map((service) => (
          <ServiceCard
            key={service.id}
            imgSrc={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Services, "Services");