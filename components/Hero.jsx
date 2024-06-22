import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { handleChangeLanguage } from "@/app/languageUtils";

const Hero = () => {
  const {t} = useTranslation();
  return (
    <section className="relative">
      <div className="relative">
        <div className="bg-cover bg-no-repeat h-dvh bg-fixed bg-center relative">
          <Image
            src="/family.png"
            alt="family"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0"></div>
          {/* Dark blue overlay */}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-top items-left sm:mt-72 sm:ml-12  mt-56 ml-4">
        <div className="text-white justify-center">
          <h1 className="font-bold text-3xl lg:text-5xl">
            {t("hero.urbanism")}
          </h1>

          <div className="text-center mt-4">
            <Button
              type="button"
              variant={"btn_dark_green"}
              title={t("hero.release")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
