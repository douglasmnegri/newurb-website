"use client";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }) => {
  return (
    <div
      className={`relative h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const { t } = useTranslation();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const backgroundImageClass =
    currentImageIndex === 0 ? "bg-bg-img-1" : "bg-bg-img-2";

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <div className="relative w-[1100px] flex-shrink-0 h-full">
          <CampSite
            backgroundImage={backgroundImageClass}
            title={
              currentImageIndex === 0
                ? "Condomínio Terras das Oliveiras"
                : "Residencial Cidade Nova"
            }
            subtitle={
              currentImageIndex === 0
                ? "Maria da Fé, Minas Gerais"
                : "Inaciolândia, Goiás"
            }
            peopleJoined={
              currentImageIndex === 0
                ? "50+ Bought a land here"
                : "120+ Bought a land here"
            }
          />
        </div>
        <div className="relative w-[1100px] h-full">
          <CampSite
            backgroundImage={
              currentImageIndex === 0 ? "bg-bg-img-2" : "bg-bg-img-1"
            }
            title={
              currentImageIndex === 0
                ? "Residencial Cidade Nova"
                : "Condomínio Terras das Oliveiras"
            }
            subtitle={
              currentImageIndex === 0
                ? "Inaciolândia, Goiás"
                : "Maria da Fé, Minas Gerais"
            }
            peopleJoined={
              currentImageIndex === 0
                ? "120+ Bought a land here"
                : "50+ Bought a land here"
            }
          />
        </div>
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>{t("lands.title")}</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            {t("lands.text")}
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-green-500 rounded-full p-2 focus:outline-none mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Camp;
