import React from "react";
import image4 from "../assets/image4.svg";
import image3 from "../assets/image3.jpg";

const About = () => {
  const cardData = [
    {
      icon: "image4", // Replace with the actual icon source
      title: "Luxury Accommodations",
      message:
        "Discover 100+ luxury hotels and vacation homes for your perfect getaway.",
    },
    {
      icon: "image4", // Replace with the actual icon source
      title: "World-Class Service",
      message:
        "Experience world-class service with our dedicated and friendly staff.",
    },
    {
      icon: "image4", // Replace with the actual icon source
      title: "Best Travel Deals",
      message:
        "Get access to the best travel deals and discounts on our exclusive properties.",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-center py-8 font-semibold text-2xl leading-6 ">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img
              className="h-16 w-16 mx-auto mb-4 rounded-full bg-red-900 p-3"
              src={image4}
              alt={`Icon ${index + 1}`}
            />
            <h3 className="text-xl text-center font-bold text-black">
              {card.title}
            </h3>
            <p className="text-gray-700 font-medium p-3 text-base pb-4">
              {card.message}
            </p>
          </div>
        ))}
      </div>
      <div className="py-10 md:py-12 px-6 md:px-8">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
          {/* Browse through our offers */}
          <div className="flex flex-col justify-center md:w-1/2 bg-white shadow-md py-8 px-8 md:py-12 lg:px-12 lg:w-10/12 ">
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-800">
              Explore Exclusive Deals
            </h1>
            <p className="text-lg lg:text-xl text-gray-800 dark:text-gray-800 mt-2">
              Save up to <span className="font-bold">50%</span>
            </p>
            <button className="bg-blue-800 px-5 py-2 text-white rounded-md mt-4 w-96">
              View 2024 Deals
            </button>
          </div>

          {/* Take your longest holiday */}
          <div className="py-10 md:py-12 px-6 md:px-8 md:w-1/2 ">
            <div
              className="w-full h-full shadow-md py-8 px-8 md:py-0 md:px-6 lg:px-8 flex flex-col justify-center relative"
              style={{
                backgroundImage: `url(${image3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col items-center justify-center text-white">
                <h1 className="text-2xl lg:text-3xl font-semibold">
                  Your Dream Getaway
                </h1>
                <p className="text-lg lg:text-xl">
                  Save up to <span className="font-bold">30%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
