"use client";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { handleChangeLanguage } from "@/app/languageUtils";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flexCenter mb-24 mt-12">
      <div className="px-8 max-container flex w-full flex-col gap-14">
        <div className="flex flex-col justify-center lg:justify-around lg:flex-row">
          <div className="flex justify-center mb-10">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={150}
                layout="fixed"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-between gap-10 xl:gap-24 lg:flex-row">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={t(columns.title)} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, index) => (
                    <Link href="/" key={index}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={t(FOOTER_CONTACT_INFO.title)}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <Link
                    href="/"
                    key={index}
                    className="flex gap-2 lg:flex-col justify-center regular-14 text-gray-30"
                  >
                    <p className="regular-8 flex gap-2 text-gray-30 justify-center">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="">
              <FooterColumn title={t(SOCIALS.title)}>
                <ul className="regular-8 flex gap-2 text-gray-30 justify-center">
                  {SOCIALS.links.map((link, index) => (
                    <Link
                      href={link.href}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={22}
                        height={22}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 NewUrb | All rights reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5 text-center">
      <h4 className="bold-16 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
