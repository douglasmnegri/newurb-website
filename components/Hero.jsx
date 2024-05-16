import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="hidden lg:block relative">
        <div className="bg-cover bg-no-repeat h-dvh bg-fixed bg-center relative">
          <Image
            src="/family.jpg"
            alt="family"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-60"></div>{" "}
          {/* Dark blue overlay */}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-top items-left mt-72 ml-32">
        <div className="text-white justify-center">
          <h1 className="font-bold text-3xl lg:text-5xl">
            Urbanism as never seen before.
          </h1>
          <p className="text-white text-base  lg:text-lg mt-6 xl:max-w-[520px]">
            Florianópolis - Santa Catarina
          </p>

          <div className="text-center mt-4">
            <Button
              type="button"
              variant={"btn_dark_green"}
              title={"Information about the release"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
