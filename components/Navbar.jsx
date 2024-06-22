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
      <div className="flex justify-end p-1 gap-1">
        <button onClick={() => handleChangeLanguage("en")}>
          <Image src={"/us.svg"} alt="us flag" width={20} height={20}/>
        </button>
        <button onClick={() => handleChangeLanguage("pt")}>
          <Image src={"/brazil.svg"} alt="brazil flag" width={20} height={20} />
        </button>
      </div>
      <div className="flexBetween max-container relative z-30 pt-2 pb-5 gap-5">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={250} height={100} />
        </Link>
        <ul className="hidden h-full gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transitional-all hover:font-bold">
              <Link href={link.href}>
                {t(link.label)}
              </Link>
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
        <Image
          src="/menu.svg"
          alt="menu"
          width={34}
          height={34}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
