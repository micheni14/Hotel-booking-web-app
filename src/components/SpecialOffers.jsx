import React from "react";
import image2 from "../assets/image2.jpg";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { FaWifi, FaShuttleVan } from "react-icons/fa";
import {Link} from "react-router-dom"

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SpecialOffer.map((offer, index) => (
          <Link key={index} to={`/details`}
            className="card bg-base-100 shadow-xl cursor-pointer p-2 overflow-hidden rounded-md transition-transform transform hover:scale-105"
          >
            <figure>
              <img
                src={image2}
                alt={offer.name}
                className="w-full h-48 object-cover object-center rounded-md"
              />
            </figure>
            <div className="card-body p-4 ">
              <div className="flex flex-col justify-between">
                <div className="font-bold text-xl">{offer.price}</div>
                {offer.isNew && (
                  <div className="bg-gray-50 rounded-full p-2 text-blue-800 font-bold text-sm">
                    For Rent
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-gray-100 rounded-md p-1 text-gray-600">
                  <IoBedOutline className="mr-1 text-gray-900" />
                  {offer.beds}
                </div>
                <div className="flex items-center bg-gray-100 rounded-md p-1 text-gray-600">
                  <MdOutlineBathtub className="mr-1" />
                  {offer.bath}
                </div>
                <div className="flex items-center bg-gray-100 rounded-md p-1 text-gray-600">
                  <FaWifi className="mr-1" />
                  {offer.wifi}
                </div>
                <div className="flex items-center bg-gray-100 rounded-md p-1 text-gray-600">
                  <FaShuttleVan className="mr-1" />
                  {offer.shuttle}
                </div>
              </div>
              <h2 className="text-lg font-bold mb-2">{offer.title}</h2>
              <div className="card-actions justify-end">
                {offer.categories.map((category, i) => (
                  <div key={i} className="badge badge-outline border border-blue-800">
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
