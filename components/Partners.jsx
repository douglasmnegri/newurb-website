import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Release = () => {
  const { t } = useTranslation();
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col justify-center gap-2">
          <div className="flex justify-around gap-12 flex-col sm:flex-row">
            <div className="sm:mr-8">
              <h2 className="bold-40 lg:bold-64 lg:text-left text-center mb-4">
                {t("partners.title")}
              </h2>
              <p className="regular-16 text-gray-10 text-center lg:text-left">
                {t("partners.text")}
              </p>
            </div>
            <a
              href="https://www.bithouse.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center sm:items-start sm:flex-row">
                <div className="border-solid border-2 bg-white flex items-center justify-center rounded-full w-40 h-40 p-4">
                  <Image
                    src={"/bithouse-logo.svg"}
                    alt="logo locates"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Release;
