import React from "react";
import image2 from "../assets/image2.jpg";
import { Link } from "react-router-dom";

const Popular = () => {
  const popularDestinations = [
    {
      id: 1,
      title: "Kenya",
      description:
        "Discover the beauty of the wild in Kenya. Experience breathtaking landscapes and encounter diverse wildlife.",
    },
    {
      id: 2,
      title: "Maldives",
      description:
        "Escape to paradise in the Maldives. Explore crystal-clear waters, relax on pristine beaches, and indulge in luxury resorts.",
    },
    {
      id: 3,
      title: "Spain",
      description:
        "Experience the vibrant culture and rich history of Spain. From lively festivals to historic landmarks, Spain has it all.",
    },
    // Add more destinations as needed
  ];

  return (
    <div className="container mx-auto">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Popular Destinations
        </h1>
        <p className="text-lg text-gray-600">
          Explore the most sought-after destinations across the globe.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {popularDestinations.map((destination) => (
          <div
            key={destination.id}
            className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <figure>
              <img
                className="w-full h-40 object-cover"
                src={image2}
                alt={destination.title}
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {destination.title}
              </h2>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <Link
                to= "/details"
                className="btn btn-wide bg-blue-900 text-white hover:bg-yellow-600">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
