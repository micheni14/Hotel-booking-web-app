import React from "react";
import image4 from "../assets/image4.svg";
import image3 from "../assets/image3.jpg";
import { Link } from "react-router-dom";


const About = () => {
  const cardData = [
    {
      icon: image4,
      title: "Luxury Accommodations",
      message:
        "Discover 100+ luxury hotels and vacation homes for your perfect getaway.",
    },
    {
      icon: image4,
      title: "World-Class Service",
      message:
        "Experience world-class service with our dedicated and friendly staff.",
    },
    {
      icon: image4,
      title: "Best Travel Deals",
      message:
        "Get access to the best travel deals and discounts on our exclusive properties.",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-center py-8 font-semibold text-3xl leading-8 text-gray-800">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            <img
              className="h-16 w-16 mx-auto mb-6 rounded-full bg-blue-500 p-3"
              src={card.icon}
              alt={`Icon ${index + 1}`}
            />
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600 text-base">{card.message}</p>
          </div>
        ))}
      </div>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center bg-white shadow-lg p-6 md:p-8 lg:p-10 rounded-lg">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 text-center">
                Explore Exclusive Deals
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 text-center">
                Save up to <span className="font-bold text-blue-600">50%</span>{" "}
                on selected offers.
              </p>
              <Link 
                 to={`/amenities`}
               className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 lg:px-8 rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                View 2024 Deals
              </Link >
            </div>
            <div className="relative bg-cover bg-center rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <div className="text-center text-white p-6 md:p-8 lg:p-10">
                  <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                    Your Dream Getaway
                  </h2>
                  <p className="text-lg lg:text-xl mb-6">
                    Save up to <span className="font-bold text-blue-300">30%</span>{" "}
                    on your next adventure.
                  </p>
                </div>
              </div>
              <img src={image3} alt="Dream Getaway" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
