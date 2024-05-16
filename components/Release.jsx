import React from "react";
import Button from "./Button";
import Image from "next/image";

const Release = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col justify-center gap-2">
          <div className="flex items-center justify-around gap-12">
            <div className="mr-8">
              {" "}
              {/* Added margin to the right side of the text */}
              <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Partners</h2>
              <p className="regular-16 text-gray-10">
                NewUrb can count with some of the best partners in our region!
              </p>
            </div>
            <div className="flex gap-8">
              <div className="border-solid border-2 bg-white align-middle flex items-center justify-center rounded-full w-40 h-40 p-4">
                <Image
                  src={"/logo-locates.png"}
                  alt="logo locates"
                  width={150}
                  height={150}
                />
              </div>
              <div className="border-solid border-2 bg-white align-middle flex items-center justify-center rounded-full w-40 h-40 p-4">
                <Image
                  src={"/bithouse-logo.svg"}
                  alt="logo locates"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Release;
