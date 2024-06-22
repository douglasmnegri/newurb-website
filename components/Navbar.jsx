"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants"; // Adjust the import path if necessary
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { handleChangeLanguage } from "@/app/languageUtils"; // Ensure this path is correct

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <div className="hidden justify-end p-2 gap-1.5 mr-4 md:hidden lg:flex">
        <button onClick={() => handleChangeLanguage("en")}>
          <Image src={"/us.svg"} alt="us flag" width={22} height={22} />
        </button>
        <button onClick={() => handleChangeLanguage("pt")}>
          <Image src={"/brazil.svg"} alt="brazil flag" width={22} height={22} />
        </button>
        <button onClick={() => handleChangeLanguage("es")}>
          <Image src={"/spain.svg"} alt="brazil flag" width={22} height={22} />
        </button>
      </div>
      <div className="flexBetween max-container relative z-30 pt-2 pb-5 gap-5">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={250} height={100} />
        </Link>
        <ul className="hidden h-full gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transitional-all hover:font-bold"
            >
              <Link href={link.href}>{t(link.label)}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Link href={"/list_property"}>
            <Button
              onClick="/list_property"
              type="button"
              title={t("labels.list_your_property")}
              variant={"btn_dark_green"}
              icon={"/contact-icon.svg"}
            />
          </Link>
        </div>

        <button class="hamburger lg:hidden mr-2">
          <div class="bar"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
