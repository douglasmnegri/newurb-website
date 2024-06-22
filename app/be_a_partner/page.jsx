"use client";
import React, { useState } from "react";
import { IoIosAttach } from "react-icons/io";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Partner = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="bg-white py-12"> 
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Partners</h1>
          <p className="text-lg text-gray-700">
            We are a company dedicated to the construction of high-quality
            subdivisions, and we are always looking for suppliers and service
            providers who share our commitment to excellence. If you are a
            professional or company that offers solutions for subdivision
            construction, this is the perfect opportunity to establish a
            successful partnership.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <h1 className="text-2xl font-bold mb-12 text-center">
          Benefits of being our partner
        </h1>
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex flex-wrap justify-around mb-8">
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/opportunities.svg"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 w-32 h-32"
                    alt="pic"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Business Opportunities
                </h3>
                <p className="text-gray-700">
                  Participation in large-scale projects with high visibility.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/network.svg"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 w-32 h-32"
                    alt="pic"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Networking</h3>
                <p className="text-gray-700">
                  Connection with other professionals and leading companies in
                  the real estate sector.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-col items-center">
              <div>
                <Image
                  src="/partnership.svg"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 w-32 h-32"
                  alt="pic"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Joint Growth</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Potential for growth and joint development with our real estate
                business holding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners We're Looking For Section */}
      <section className="bg-feature-bg py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl font-bold mb-4">
            Partners We Are Looking For
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">Realtors</h2>
              <p>Real estate agents who can help us market our subdivisions.</p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">Design & Architect</h2>
              <p>
                Architectural and design firms to create aesthetically pleasing
                designs for our subdivisions.
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">
                Environmental & Civil Engineers
              </h2>
              <p>
                Civil and environmental engineering firms to ensure our
                subdivisions are constructed sustainably and efficiently.
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">Landscaper</h2>
              <p>
                Landscape designers to enhance the beauty and functionality of
                our subdivisions.
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">Topography</h2>
              <p>
                Surveying services to provide accurate measurements of the land
                for our subdivisions.
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">Earthwork</h2>
              <p>
                Earthmoving services to prepare the land for construction in our
                subdivisions.
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">Paving and Drainage</h2>
              <p>
                Infrastructure companies to provide paving, drainage, and water
                supply.
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">Supply</h2>
              <p>
                Suppliers of construction materials and supplies for our
                subdivisions.
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-md p-6 hover:bg-green-50 hover:text-white">
              <h2 className="text-lg font-bold mb-2">Sewage</h2>
              <p>
                Infrastructure companies to provide sewage network services for
                our subdivisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl font-bold mb-8">How to become a partner</h1>
          <div className="text-left text-lg text-gray-700 mx-auto max-w-2xl">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                    1
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold mb-1">
                    Submit Your Proposal:{" "}
                  </p>
                  <p>
                    Fill out our registration form with detailed information
                    about your company and the services you offer.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                    2
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold mb-1">Evaluation: </p>
                  <p>
                    Our team of experts will evaluate your proposal based on
                    criteria of quality, experience, and compatibility with our
                    projects.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                    3
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold mb-1">Contact</p>
                  <p>
                    We will get in touch to discuss partnership opportunities
                    and the next steps.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-feature-bg py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <div className="text-left text-lg text-gray-700 mx-auto max-w-2xl">
            <p>
              For more information or inquiries, feel free to contact our
              partnership team:
            </p>
            <ul className="list-none mt-4">
              <li className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:julionegri@newurb.com.br"
                  className="text-blue-600 hover:underline"
                >
                  julionegri@newurb.com.br
                </a>
              </li>
              <li className="mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+554830369566"
                  className="text-blue-600 hover:underline"
                >
                  (48) 3036-9566
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <a
              href="mailto:julionegri@newurb.com.br"
              className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-900 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
