import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container px-8 relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src="/green-symbol.svg" alt="phone" width={300} height={300} />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative"></div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={t(feature.title)}
                icon={feature.icon}
                description={t(feature.description)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, icon, description }) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-6 lg:p-6 bg-green-600">
        <Image
          src={icon}
          alt="map"
          width={28}
          height={28}
          className="aspect-square"
        />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
