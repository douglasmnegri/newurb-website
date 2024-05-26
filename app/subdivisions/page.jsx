import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaChartArea } from "react-icons/fa";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { IoHappy } from "react-icons/io5";
import { MdOutlineAreaChart } from "react-icons/md";

const Subdivisions = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex justify-center">
        <div className="bg-gray-100 shadow-lg rounded-lg max-w-7xl w-full overflow-hidden">
          <div className="flex flex-wrap md:flex-nowrap">
            {/* Left part with Image as Background */}
            <div
              className="w-full md:w-1/2 h-96 bg-cover bg-center"
              style={{ backgroundImage: "url(/land.jpg)" }}
            ></div>
            {/* Right part with Details */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">
                  Condomínio Terras das Oliveiras
                </h2>
                <p className="text-gray-700 mb-4 flex items-center">
                  <CiLocationOn className="mr-1" />
                  Maria da Fé- MG
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-600">
                <div className="border-solid border-2 text-center flex flex-col items-center justify-center p-4">
                  <FaChartArea className="mb-2" />
                  <p className="font-bold">Área total:</p>
                  <p className="mt-2">
                    157.919m<sup>2</sup>
                  </p>
                </div>
                <div className="border-solid border-2 text-center flex flex-col items-center justify-center p-4">
                  <PiTreeEvergreenFill className="mb-2" />
                  <p className="font-bold">Área Verde:</p>
                  <p className="mt-2">
                    7.040m<sup>2</sup>
                  </p>
                </div>
                <div className="border-solid border-2 text-center flex flex-col items-center justify-center p-4">
                  <IoHappy className="mb-2" />
                  <p className="font-bold">Área Lazer:</p>
                  <p className="mt-2">
                    20.866m<sup>2</sup>
                  </p>
                </div>
                <div className="border-solid border-2 text-center flex flex-col items-center justify-center p-4">
                  <MdOutlineAreaChart className="mb-2" />
                  <p className="font-bold">Lotes:</p>
                  <p className="mt-2">100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subdivisions;
