import React from "react";

const Partner = () => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
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

      {/* Partners We're Looking For Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl font-bold mb-4">
            Partners We're Looking For
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-lg font-bold mb-2">Realtors</h2>
              <p>Real estate agents who can help us market our subdivisions.</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-lg font-bold mb-2">Design & Architet</h2>
              <p>
                Architectural and design firms to create aesthetically pleasing
                designs for our subdivisions.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-lg font-bold mb-2">
                Enviromental & Civil Engineers
              </h2>
              <p>
                Civil and environmental engineering firms to ensure our
                subdivisions are constructed sustainably and efficiently.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-lg font-bold mb-2">Landscaper</h2>
              <p>
                Landscape designers to enhance the beauty and functionality of
                our subdivisions.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-lg font-bold mb-2">Topography</h2>
              <p>
                Surveying services to provide accurate measurements of the land
                for our subdivisions.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-lg font-bold mb-2">Earthwork</h2>
              <p>
                Earthmoving services to prepare the land for construction in our
                subdivisions.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-lg font-bold mb-2">Paving and Drenage</h2>
              <p>
                Infrastructure companies to provide paving, drainage, water
                supply.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-lg font-bold mb-2">Supply</h2>
              <p>
                Suppliers of construction materials and supplies for our
                subdivisions.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-lg font-bold mb-2">Sewage</h2>
              <p>
                Infrastructure companies to provide and sewage network services
                for our subdivisions.
              </p>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
