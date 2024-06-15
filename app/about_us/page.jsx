/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { SOCIALS } from "@/constants";
import Image from "next/image";

function Investors() {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <>
      {/* About Us Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center max-w-4xl">
          {" "}
          {/* Added max-w-4xl class */}
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            NewUrb is a young company, born from the partnership between Dr.
            Luciano Capoano, an experienced consultant and lawyer specialized in
            Real Estate Law, and Julio Negri, administrator and CEO of BitHouse,
            an innovative platform focused on land and lot commercialization.
          </p>
          <p className="text-lg text-gray-700">
            <br />
            <br /> The company is structured as a real estate business holding,
            with its operations focused on the structuring and development of
            subdivisions in the state of Santa Catarina. This partnership
            between legal and technological expertise allows us to offer
            differentiated and innovative solutions in the real estate market,
            with the goal of creating sustainable and prosperous communities.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex flex-wrap justify-around mb-8">
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">
                  <Image
                    src="/purpose.svg"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-full w-32 h-32"
                    alt="pic"
                  />
                </div>
                {/* Random symbol as icon */}
                <h3 className="text-xl font-semibold mb-2">Purpose</h3>
                <p className="text-gray-700">
                  We are committed to offering more than just plots of land, but
                  opportunities for developing spaces that promote a quality
                  life in harmony with nature.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">
                <Image
                    src="/mission.svg"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-full w-32 h-32"
                    alt="pic"
                  /></div>
                {/* Random symbol as icon */}
                <h3 className="text-xl font-semibold mb-2">Mission</h3>
                <p className="text-gray-700">
                  Our mission is to provide plots that serve as the foundation
                  for developing residential and commercial spaces that promote
                  quality of life and sustainability.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">
                <Image
                  src="/vision.svg"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-full w-32 h-32"
                  alt="pic"
                />
              </div>
              {/* Random symbol as icon */}
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our vision is to be leaders in the subdivision sector,
                transforming areas into planned communities that stand out for
                their sustainability, quality of life, and integration with the
                surroundings. We want to be recognized as agents of positive
                change, contributing to the development of areas that offer
                lasting value for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-feature-bg py-14">
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
                      opportunity with strategic vision and a passion for
                      growth.
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
                      balancing budgets and investments meticulously,
                      safeguarding the company's financial stability amid the
                      dynamic terrain of land sales and acquisitions.
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
    </>
  );
}

export default Investors;
