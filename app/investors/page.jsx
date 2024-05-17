/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { SOCIALS } from "@/constants";
import Image from "next/image";

function Investors() {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <h1 className="text-4xl text-black font-bold text-center mb-6">
              THE TEAM BEHIND NEW URB
            </h1>
            <h3 className="text-gray-600 text-center mb-8">
              MEET THE TEAM THAT MAKES EVERYTHING POSSIBLE
            </h3>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-200 text-center rounded-lg p-8 h-full transition duration-250 ease-in-out transform hover:bg-green-50 hover:text-white">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Image
                    src="/julio.png"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-full w-32 h-32 bg-gray-300"
                    alt="pic"
                  />
                  <h3 className="text-lg font-semibold mb-2">JULIO NEGRI</h3>
                  <p className="text-sm mb-4">Sales Director</p>
                  <p className="text-sm">
                    Specialized in land development, Julio, sales director,
                    navigates land deals deftly, maximizing profit and
                    opportunity with strategic vision and a passion for growth.
                  </p>
                </div>
                <ul className="regular-8 flex gap-2 text-gray-30 items-center justify-center mt-3">
                  {SOCIALS.links.map((link, index) => (
                    <Link href="/" key={index}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-200 text-center rounded-lg p-8 h-full transition duration-250 ease-in-out transform hover:bg-green-50 hover:text-white">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Image
                    src="/luciano.png"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-full w-32 h-32 bg-gray-300"
                    alt="pic"
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    LUCIANO CAPUANO
                  </h3>
                  <p className="text-sm mb-4">Finance Director</p>
                  <p className="text-sm">
                    Luciano, finance director, steers fiscal strategies,
                    balancing budgets and investments meticulously, safeguarding
                    the company's financial stability amid the dynamic terrain
                    of land sales and acquisitions.
                  </p>
                </div>
                <ul className="regular-8 flex gap-2 text-gray-30 items-center justify-center mt-3">
                  {SOCIALS.links.map((link, index) => (
                    <Link href="/" key={index}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Investors;
