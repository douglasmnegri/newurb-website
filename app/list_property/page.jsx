import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export const Property = () => {
  return (
    <div>
      {/* About Us Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Added max-w-4xl class */}
          <h1 className="text-4xl font-bold mb-2">Offer your Land</h1>
          <h4 className="text-xl mb-4 font-bold">
            Transform your land into a successful venture!
          </h4>
          <p className="text-lg text-gray-700">
            At NewUrb Real Estate Developments, we are always looking for new
            areas with potential for development. If you own a plot of land and
            wish to explore its possibilities, we are here to help. We offer
            feasibility analysis and partnership opportunities to transform your
            land into a profitable project.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 hover:text-white">
              <h3 className="text-xl font-bold mb-3">
                1. Submit Your Land Information
              </h3>
              <p className="mb-4 ">
                Fill out the form below with details about your land, including
                location, size, zoning, and any other relevant information.
              </p>
              <form className="mb-4"></form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 hover:text-white">
              <h3 className="text-xl font-bold mb-3">
                2. Feasibility Analysis
              </h3>
              <p className="mb-4">
                Our team of experts will conduct a detailed analysis of your
                land to assess development potential. This analysis includes
                technical, legal, and market aspects.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 hover:text-white">
              <h3 className="text-xl font-bold mb-3">
                3. Partnership Proposal
              </h3>
              <p className="mb-4">
                Based on the analysis, we will present a customized partnership
                proposal. This proposal may include project structuring and
                profit sharing arrangements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 hover:text-white">
              <h3 className="text-xl font-bold mb-3">4. Project Development</h3>
              <p className="mb-4">
                Working together, we will develop a detailed action plan to turn
                your land into a successful venture. NewUrb Real Estate
                Developments will manage all stages of the process from planning
                to execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 flex justify-center">
        <div className="bg-[rgb(237,191,133)] rounded-xl shadow-md pl-6 pt-6 text-center w-11/12 2xl:w-7/12 flex flex-col lg:flex-row items-center lg:relative">
          <div className="w-full lg:w-3/5 pr-8 lg:mb-0 my-8 ml-4 lg:absolute">
            {/* Text content */}
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Benefits of Partnering with NewUrb
            </h3>
            <p className="mb-6 text-lg">
              With extensive experience in the real estate market and a proven
              track record of success in subdivision projects, our team at
              NewUrb offers deep industry knowledge and a history of delivering
              outstanding results.
            </p>
            <p className="mb-6 text-lg">
              Leveraging a broad network of partners, suppliers, and
              professionals, we ensure quality and efficiency throughout all
              project stages.
            </p>
            <div className="text-center my-8 flex justify-center">
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSfQ2qUSgPvOjtL90OkhKjFzY-vXTFGK8DnXmm9lN5kotRoNqg/viewform"
                }
                target="_blank"
              >
                <Button
                  type="button"
                  variant={"btn_dark_green"}
                  title={"Submit your land ->"}
                />
              </Link>
            </div>
          </div>
          <div className="w-full lg:self-end left-0 hidden lg:block">
            {/* Image */}
            <div className="flex justify-end">
              <Image
                src="/glasses-model.png"
                alt="Realtor Partner"
                height={600}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Property;
