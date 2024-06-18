"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import i18n from "@/app/i18nConfig";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 gap-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={250} height={100} />
      </Link>
      <ul className="hidden h-full gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transitional-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Link href={"/list_property"}>
          <Button
            onClick="/list_property"
            type="button"
            title={"List your property"}
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
    </nav>
  );
};

export default Navbar;
