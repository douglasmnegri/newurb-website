/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Link from "next/link";
import { SOCIALS_PARTNERS_JULIO, SOCIALS_PARTNERS_LUCIANO } from "@/constants";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function Investors() {
  const { t } = useTranslation();
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <>
      {/* About Us Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          {" "}
          {/* Added max-w-4xl class */}
          <h1 className="text-4xl font-bold mb-4">{t("aboutUs.about_us")}</h1>
          <p className="text-lg text-gray-700">{t("aboutUs.description")}</p>
          <p className="text-lg text-gray-700">
            <br />
            <br /> {t("aboutUs.description2")}
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex flex-wrap justify-around mb-8">
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">
                  <Image
                    src="/purpose.svg"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-full w-32 h-32"
                    alt="pic"
                  />
                </div>
                {/* Random symbol as icon */}
                <h3 className="text-xl font-semibold mb-2">
                  {t("aboutUs.purpose")}
                </h3>
                <p className="text-gray-700">
                  {t("aboutUs.purpose_description")}
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">
                  <Image
                    src="/mission.svg"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-full w-32 h-32"
                    alt="pic"
                  />
                </div>
                {/* Random symbol as icon */}
                <h3 className="text-xl font-semibold mb-2">
                  {t("aboutUs.mission")}
                </h3>
                <p className="text-gray-700">
                  {t("aboutUs.mission_description")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">
                <Image
                  src="/vision.svg"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-full w-32 h-32"
                  alt="pic"
                />
              </div>
              {/* Random symbol as icon */}
              <h3 className="text-xl font-semibold mb-2">
                {t("aboutUs.vision")}
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                {t("aboutUs.vision_description")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-feature-bg py-14">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              <h1 className="text-4xl text-black font-bold text-center mb-6">
                {t("aboutUs.team")}
              </h1>
              {/* <h3 className="text-gray-600 font-bold text-center mb-8">
                {t("aboutUs.team_subtext")}{" "}
              </h3> */}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-200 text-center rounded-lg p-8 h-full transition duration-250 ease-in-out transform hover:bg-green-50 hover:text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <Image
                      src="/julio.png"
                      width={200}
                      height={200}
                      className="mx-auto mb-4 rounded-full w-32 h-32 bg-gray-300"
                      alt="pic"
                    />
                    <h3 className="text-lg font-semibold mb-2">JULIO NEGRI</h3>
                    <p className="text-sm mb-4">
                      {t("aboutUs.julio_occupation")}
                    </p>
                    <p className="text-sm">
                      {t("aboutUs.julio_description")}
                      <ul className="mt-2 font-bold">
                        <li>CIPS® REALTOR</li>
                        <li>NAR REALTOR</li>
                        <li>Creci-SC 60.633</li>
                      </ul>
                    </p>
                  </div>

                  <ul className="regular-8 flex gap-2 text-gray-30 items-center justify-center mt-3">
                    {SOCIALS_PARTNERS_JULIO.map((link, index) => (
                      <Link href={link.href} key={index} target="blank">
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-200 text-center rounded-lg p-8 h-full transition duration-250 ease-in-out transform hover:bg-green-50 hover:text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <Image
                      src="/luciano.png"
                      width={200}
                      height={200}
                      className="mx-auto mb-4 rounded-full w-32 h-32 bg-gray-300"
                      alt="pic"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      LUCIANO CAPUANO
                    </h3>
                    <p className="text-sm mb-4">
                      {t("aboutUs.luciano_occupation")}
                    </p>
                    <p className="text-sm">
                      {t("aboutUs.luciano_description")}
                      <ul className="mt-2 font-bold">
                        <li>OAB-MG 91.125</li>
                        <li>OAB-SP 451.386</li>
                        <li>Creci-SP 280859</li>
                      </ul>
                    </p>
                  </div>
                  <ul className="regular-8 flex gap-2 text-gray-30 items-center justify-center mt-3">
                    {SOCIALS_PARTNERS_LUCIANO.map((link, index) => (
                      <Link href={link.href} key={index} target="blank">
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Investors;
