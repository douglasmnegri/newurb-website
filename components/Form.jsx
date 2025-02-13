"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Button from "./Button";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isWhatsappFocused, setIsWhatsappFocused] = useState(false);
  const [isWebsiteFocused, setIsWebsiteFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "" || email === "" || whatsapp === "") {
      setErrorMessage(
        "Preencha os campos obrigatórios: Nome, Email e Whatsapp!"
      );
      return;
    }

    const formData = { name, email, whatsapp, website };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toAddress: "recipient@example.com",
          subject: "New Form Submission",
          body: `Name: ${name}\nEmail: ${email}\nWhatsapp: ${whatsapp}\nWebsite: ${website}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (response.ok) {
        window.location.href = "/success";
      }

      const result = await response.text();
      console.log("Form data logged successfully:", result);
    } catch (error) {
      console.error("Error logging form data:", error);
      alert("Error logging form data. Please try again.");
    }
  };

  return (
    <section className="pt-10 bg-[rgb(237,191,133)]">
      <div className="flex flex-col my-2 mx-12 lg:flex-row justify-center lg:justify-between relative text-center lg:ml-12 lg:mr-0 2xl:justify-center">
        <div className="z-20 w-full lg:w-[40%] flex flex-col 2xl:mr-72">
          <div className="relative">
            <h2 className="bold-32 lg:bold-40 pb-2">{t("form.partner")}</h2>
            <h5 className="lg:regular-20">{t("form.realtor")}</h5>
            <br></br>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div></div>
              <div className="mb-8 mt-4 relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 border-b-2 border-black rounded-none bg-transparent outline-none md:w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute left-2 transition-all ${
                    isNameFocused || name ? "-top-4 text-sm" : ""
                  }`}
                >
                  {t("form.name")}
                </label>
              </div>

              <div className="mb-8 relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 border-b-2 border-black rounded-none bg-transparent outline-none md:w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-2 transition-all ${
                    isEmailFocused || email ? "-top-4 text-sm" : ""
                  }`}
                >
                  {t("form.mail")}{" "}
                </label>
              </div>

              <div className="mb-8 relative">
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  className="p-2 border-b-2 border-black rounded-none bg-transparent outline-none md:w-full"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  onFocus={() => setIsWhatsappFocused(true)}
                  onBlur={() => setIsWhatsappFocused(false)}
                  required
                />
                <label
                  htmlFor="whatsapp"
                  className={`absolute left-2 transition-all ${
                    isWhatsappFocused || whatsapp ? "-top-4 text-sm" : ""
                  }`}
                >
                  {t("form.whatsapp")}
                </label>
              </div>

              <div className="mb-8 relative">
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="p-2 border-b-2 border-black rounded-none bg-transparent outline-none md:w-full"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  onFocus={() => setIsWebsiteFocused(true)}
                  onBlur={() => setIsWebsiteFocused(false)}
                />
                <label
                  htmlFor="website"
                  className={`absolute left-2 transition-all ${
                    isWebsiteFocused || website ? "-top-4 text-sm" : ""
                  }`}
                >
                  {t("form.website")}
                </label>
              </div>

              <label className="flex items-center mb-4 mt-4">
                <input
                  type="checkbox"
                  name="contact-agreement"
                  className="custom-checkbox mr-2"
                  required
                />
                {t("form.agree")}{" "}
              </label>
              <div className="mb-4 mt-4 flex justify-center lg:justify-normal">
                <Button
                  type="submit"
                  variant={"btn_dark_green"}
                  title={t("form.button_text")}
                  href="/success"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="lg:block w-full lg:self-end lg:absolute">
          <div className="flex justify-end">
            <Image
              src="/glasses-model.png"
              alt="Realtor Partner"
              height={1000}
              width={1000}
              className="lg:h-auto lg:w-[800px] w-full hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
