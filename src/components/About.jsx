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
      <div className=" py-9 md:py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                Best Deals
              </h1>
              <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
                Save upto <span className="font-bold">50%</span>
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <img src={image3} alt="" className="" />
            </div>
          </div>
          <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                Deals
              </h1>
              <p className="text-base lg:text-xl text-gray-800 dark:text-white">
                Save Upto <span className="font-bold">30%</span>
              </p>
            </div>
            <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
              <img
                // src={image3}
                alt=""
                className="md:w-20 md:h-20 lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
