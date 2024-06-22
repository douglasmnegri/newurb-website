"use client";
import React, { useState } from "react";
import { IoIosAttach } from "react-icons/io";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Partner = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* About Us Section */}
      <section className="bg-white py-12 mx-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{t("bePartner.title")}</h1>
          <p className="text-lg text-gray-700">{t("bePartner.description")}</p>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <h1 className="text-2xl font-bold mb-12 text-center">
          {t("bePartner.benefits_title")}
        </h1>
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex flex-wrap justify-around mb-8">
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/opportunities.svg"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 w-32 h-32"
                    alt="pic"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("bePartner.opportunities")}
                </h3>
                <p className="text-gray-700">
                  {t("bePartner.opportunities_desc")}{" "}
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/network.svg"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 w-32 h-32"
                    alt="pic"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("bePartner.network")}
                </h3>
                <p className="text-gray-700">{t("bePartner.network_desc")}</p>
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-col items-center">
              <div>
                <Image
                  src="/partnership.svg"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 w-32 h-32"
                  alt="pic"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("bePartner.growth")}
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                {t("bePartner.growth_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners We're Looking For Section */}
      <section className="bg-feature-bg py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl font-bold mb-4">
            {t("bePartner.partners")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">{t("bePartner.realtors")}</h2>
              <p>{t("bePartner.realtors_desc")}</p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">{t("bePartner.designer")}</h2>
              <p>
                {t("bePartner.designer_desc")}
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">{t("bePartner.engineers")}</h2>
              <p>
                {t("bePartner.engineers_desc")}
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">{t("bePartner.landscaper")}</h2>
              <p>
                {t("bePartner.landscaper_desc")}
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">{t("bePartner.topography")}</h2>
              <p>
                {t("bePartner.topography_desc")}
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">{t("bePartner.earthwork")}</h2>
              <p>
                {t("bePartner.earthwork_desc")}
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">{t("bePartner.paving")}</h2>
              <p>
                {t("bePartner.paving_desc")}
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">{t("bePartner.supply")}</h2>
              <p>
                {t("bePartner.supply_desc")}
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">{t("bePartner.sewage")}</h2>
              <p>
                {t("bePartner.sewage_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl font-bold mb-8">{t("bePartner.become_partner")}</h1>
          <div className="text-left text-lg text-gray-700 mx-auto max-w-2xl">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                    1
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold mb-1">
                    {t("bePartner.submit")}:{" "}
                  </p>
                  <p>
                    {t("bePartner.submit_desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                    2
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold mb-1">{t("bePartner.eval")}: </p>
                  <p>
                    {t("bePartner.eval_desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                    3
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold mb-1">{t("bePartner.contact")}</p>
                  <p>
                    {t("bePartner.contact_desc")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-feature-bg py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl font-bold mb-4">{t("bePartner.contact_us")}</h1>
          <div className="text-left text-lg text-gray-700 mx-auto max-w-2xl">
            <p>
              {t("bePartner.contact_us_desc")}
            </p>
            <ul className="list-none mt-4">
              <li className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:julionegri@newurb.com.br"
                  className="text-blue-600 hover:underline"
                >
                  julio.negri@newurb.com.br
                </a>
              </li>
              <li className="mb-2">
                <strong>{t("bePartner.phone")}:</strong>{" "}
                <a
                  href="tel:+554830369566"
                  className="text-blue-600 hover:underline"
                >
                  (48) 3036-9566
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <a
              href="mailto:julio.negri@newurb.com.br"
              className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-900 transition-colors duration-300"
            >
              {t("bePartner.get_in_touch")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
