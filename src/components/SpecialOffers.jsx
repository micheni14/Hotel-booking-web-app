import React from "react";
import image2 from "../assets/image2.jpg";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { FaWifi, FaShuttleVan } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SpecialOffer = [
  {
    price: "$7,000",
    isNew: true,
    beds: "2 Beds",
    bath: "1 Bath",
    title: "Luxury Villa in the heart of Rome.",
    wifi: "Wifi",
    shuttle: "Shuttle",
    categories: ["Bed and breakfast", "whole package"],
  },
  {
    price: "$3,426",
    isNew: true,
    beds: "2 Beds",
    bath: "1 Bath",
    title: "Discover paradise in the Maldives.",
    wifi: "Wifi",
    shuttle: "Shuttle",
    categories: ["Bed and breakfast", "whole package"],
  },
  {
    price: "$2,453",
    isNew: true,
    beds: "2 Beds",
    bath: "1 Bath",
    title: "Paradise in Spain",
    wifi: "Wifi",
    shuttle: "Shuttle",
    categories: ["Bed and breakfast", "whole package"],
  },
  {
    price: "$2,453",
    isNew: true,
    beds: "2 Beds",
    bath: "1 Bath",
    title: "Paradise in Spain",
    wifi: "Wifi",
    shuttle: "Shuttle",
    categories: ["Bed and breakfast", "whole package"],
  },
];

const SpecialOffers = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="pb-8">
        <h1 className="text-3xl font-bold"> Special Offers</h1>
        <p className="text-md text-gray-600">
          From historical cities to natural spectacles, come see the best in the
          world.
        </p>
      </div>
      <Carousel
        arrows={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite ={true}
        itemClass="mr-4 shadow-xs pb-4"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass="mr-8"
        slidesToSlide={1}
        swipeable={true} // Enable swipe on mobile
      >
        {SpecialOffer.map((offer, index) => (
          <Link
            key={index}
            to={`/details`}
            className="card bg-white shadow-lg p-4 overflow-hidden rounded-lg transition-transform transform hover:scale-105"
          >
            <figure className="relative h-48 overflow-hidden rounded-lg">
              <img
                src={image2}
                alt={offer.name}
                className="w-full h-full object-cover object-center rounded-lg"
              />
              {offer.isNew && (
                <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 rounded-br-md">
                  New
                </div>
              )}
            </figure>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="font-bold text-xl">{offer.price}</div>
                <div className="flex items-center space-x-2">
                  <IoBedOutline className="text-gray-600" />
                  <span>{offer.beds}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <MdOutlineBathtub className="text-gray-600" />
                <span>{offer.bath}</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <FaWifi className="text-gray-600" />
                <span>{offer.wifi}</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <FaShuttleVan className="text-gray-600" />
                <span>{offer.shuttle}</span>
              </div>
            </div>
            <h2 className="text-lg font-bold mt-4">{offer.title}</h2>
            <div className="flex justify-end mt-2">
              {offer.categories.map((category, i) => (
                <div
                  key={i}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                >
                  {category}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default SpecialOffers;
