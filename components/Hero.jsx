import React from "react";
import Image from "next/image";

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
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center text-white">
          <h1 className="font-bold text-3xl lg:text-5xl text-center">
            Urbanism as never seen before.
          </h1>
          <p className="text-base lg:text-lg mt-6 text-gray-700 xl:max-w-[520px] text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            illum consectetur fugiat repellendus, explicabo ipsa quas facere
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
