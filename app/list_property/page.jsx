"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const Property = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* About Us Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">{t("property.title")}</h1>
          <h4 className="text-xl mb-4 font-bold">{t("property.subtext")}</h4>
          <p className="text-lg text-gray-700">{t("property.description")}</p>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t("property.process")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 hover:text-white">
              <h3 className="text-xl font-bold mb-3">{t("property.submit")}</h3>
              <p className="mb-4 ">{t("property.submit_desc")}</p>
              <form className="mb-4"></form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 hover:text-white">
              <h3 className="text-xl font-bold mb-3">{t("property.analysis")}</h3>
              <p className="mb-4">{t("property.analysis_desc")}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 hover:text-white">
              <h3 className="text-xl font-bold mb-3">{t("property.partnership")}</h3>
              <p className="mb-4">{t("property.partnership_desc")}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 hover:text-white">
              <h3 className="text-xl font-bold mb-3">{t("property.project")}</h3>
              <p className="mb-4">{t("property.project_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 flex justify-center">
        <div className="bg-[rgb(237,191,133)] rounded-xl shadow-md pl-6 pt-6 text-center w-11/12 2xl:w-7/12 flex flex-col lg:flex-row items-center lg:relative">
          <div className="w-full lg:w-[55%] pr-8 lg:mb-0 my-8 ml-4 lg:absolute">
            <h3 className="text-2xl lg:text-2xl font-bold mb-3">
              {t("property.partner_benefits")}
            </h3>
            <p className="mb-6 text-lg">{t("property.benefits_desc")}</p>
            <p className="mb-6 text-lg">{t("property.benefits_desc2")}</p>
            <div className="text-center my-8 flex justify-center">
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSfQ2qUSgPvOjtL90OkhKjFzY-vXTFGK8DnXmm9lN5kotRoNqg/viewform"
                }
                target="_blank"
              >
                <Button
                  type="button"
                  variant={"btn_dark_green"}
                  title={t("property.button")}
                />
              </Link>
            </div>
          </div>
          <div className="w-full lg:self-end left-0 lg:block">
            <div className="flex justify-end">
              <Image
                src="/glasses-model.png"
                alt="Realtor Partner"
                height={600}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Property;
