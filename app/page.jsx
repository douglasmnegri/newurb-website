"use client";
import React, { useState } from "react";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Land from "@/components/Land";
import Partners from "@/components/Partners";
import { useTranslation } from "react-i18next";
import { handleChangeLanguage } from "./languageUtils"; // Adjust the path as necessary

const Home = () => {
  const { t, i18n: { language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleLanguageChange = (lang) => {
    handleChangeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <>
      <Hero />
      <Features />
      <Form />
      <Land />
      <Partners />
      <Footer />
    </>
  );
}

// Exporting Home component as default
export default Home;
