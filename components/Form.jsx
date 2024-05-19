"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isWhatsappFocused, setIsWhatsappFocused] = useState(false);
  const [isWebsiteFocused, setIsWebsiteFocused] = useState(false);

  return (
    <section className="flex-col flexCenter overflow-hidden bg-yellow-70 pt-5">
      <div className="max-container padding-container relative w-full flex flex-col lg:flex-row justify-center lg:justify-between">
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64">Be a real estate agent</h2>
            <h4 className="regular-40 lg:regular-40">
              Register below and become part of the team!
            </h4>

            <form className="flex flex-col mt-5">
              <div className="mb-8 mt-4 relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 border-b-2 border-black rounded-none bg-transparent outline-none w-full"
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
                  Name
                </label>
              </div>

              <div className="mb-8 relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 border-b-2 border-black rounded-none bg-transparent outline-none w-full"
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
                  E-mail
                </label>
              </div>

              <div className="mb-8 relative">
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  className="p-2 border-b-2 border-black rounded-none bg-transparent outline-none w-full"
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
                  Whatsapp
                </label>
              </div>

              <div className="mb-8 relative">
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="p-2 border-b-2 border-black rounded-none bg-transparent outline-none w-full"
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
                  Website
                </label>
              </div>

              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="contact-agreement"
                  className="mr-2"
                  required
                />
                I agree to be contacted by the New Urb team
              </label>

              <button
                type="submit"
                className="p-2 bg-blue-900 text-white rounded mb-4 hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-right items-end w-full lg:w-auto mt-8 lg:mt-0">
          <Image
            src={"/real-state-agent.png"}
            alt="realtor"
            height={1000}
            width={900}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Form;
