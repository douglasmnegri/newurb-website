"use client";

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Land from "@/components/Land";
import Release from "@/components/Release";
import { useTranslation } from "react-i18next";
import i18n from "./i18nConfig";
import { useState } from "react";

export default function Home() {
  // const {
  //   t,
  //   i18n: { changeLanguage, language },
  // } = useTranslation();

  // const [currentLanguage, setCurrentLanguage] = useState(language);

  // const handleChangeLanguage = () => {
  //   const newLang = currentLanguage === "en" ? "pt" : "en";
  //   changeLanguage(newLang);
  //   setCurrentLanguage(newLang);
  // };

  return (
    <>
      <Hero />
      <Features />
      <Form />
      <Land />
      <Release />
    </>
  );
}
