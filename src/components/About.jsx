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
      <div className=" py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center bg-white shadow-lg p-6 md:p-8 lg:p-10 rounded-lg">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 text-center">
                Explore Exclusive Deals
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 text-center">
                Save up to <span className="font-bold text-blue-600">50%</span>{" "}
                on selected offers.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 lg:px-8 rounded-md text-lg font-semibold">
                View 2024 Deals
              </button>
            </div>
            <div
              className="relative bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${image3})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <div className="text-center text-white p-6 md:p-8 lg:p-10">
                  <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                    Your Dream Getaway
                  </h2>
                  <p className="text-lg lg:text-xl mb-6">
                    Save up to <span className="font-bold">30%</span> on your
                    next adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
