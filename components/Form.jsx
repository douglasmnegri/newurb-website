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
    <section className="pt-10 bg-[rgb(237,191,133)]">
      <div className="flex flex-col ml-12 lg:flex-row justify-center lg:justify-between relative">
        <div className="z-20 w-full lg:w-[40%] lg:ml-10 flex flex-col">
          <div className="relative">
            <h2 className="bold-32 lg:bold-64 pb-2">Become our partner</h2>
            <h5 className="lg:regular-32">
              Sign up below to become part of our network of partner brokers
            </h5>

            <form className="flex flex-col mt-5">
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
                  Name
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
                  E-mail
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
                  Whatsapp
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
                className="p-2 bg-blue-900 text-white rounded hover:bg-blue-600 mr-12 mb-8"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="hidden lg:block w-full lg:self-end left-0 absolute">
          {/* Image */}
          <div className="flex justify-end">
            <Image
              src="/glasses-model.png"
              alt="Realtor Partner"
              height={900}
              width={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
