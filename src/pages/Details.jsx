import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";
const Details = () => {
  const photos = [
    {
      src: "https://imgs.search.brave.com/MHmxd1i4cBO4Vvtq1wt3qAU2gvBFFAxbBDAiDNc8hYw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NzQ5MDI1NS9waG90/by9zdGFuZGFyZC1o/b3RlbC1yb29tLWlu/LWEtbHV4dXJ5LWhv/dGVsLWluLW1vc2Nv/dy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QUlNY3R1QV9q/bnVPeUtIOWVDLXVG/bHRSRDhSaVVRTUJY/RnY1dEpYWllTND0",
    },
    {
      src: "https://imgs.search.brave.com/MHmxd1i4cBO4Vvtq1wt3qAU2gvBFFAxbBDAiDNc8hYw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NzQ5MDI1NS9waG90/by9zdGFuZGFyZC1o/b3RlbC1yb29tLWlu/LWEtbHV4dXJ5LWhv/dGVsLWluLW1vc2Nv/dy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QUlNY3R1QV9q/bnVPeUtIOWVDLXVG/bHRSRDhSaVVRTUJY/RnY1dEpYWllTND0",
    },
    {
      src: "https://imgs.search.brave.com/MHmxd1i4cBO4Vvtq1wt3qAU2gvBFFAxbBDAiDNc8hYw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NzQ5MDI1NS9waG90/by9zdGFuZGFyZC1o/b3RlbC1yb29tLWlu/LWEtbHV4dXJ5LWhv/dGVsLWluLW1vc2Nv/dy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QUlNY3R1QV9q/bnVPeUtIOWVDLXVG/bHRSRDhSaVVRTUJY/RnY1dEpYWllTND0",
    },
    {
      src: "https://imgs.search.brave.com/MHmxd1i4cBO4Vvtq1wt3qAU2gvBFFAxbBDAiDNc8hYw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NzQ5MDI1NS9waG90/by9zdGFuZGFyZC1o/b3RlbC1yb29tLWlu/LWEtbHV4dXJ5LWhv/dGVsLWluLW1vc2Nv/dy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QUlNY3R1QV9q/bnVPeUtIOWVDLXVG/bHRSRDhSaVVRTUJY/RnY1dEpYWllTND0",
    },
    {
      src: "https://imgs.search.brave.com/MHmxd1i4cBO4Vvtq1wt3qAU2gvBFFAxbBDAiDNc8hYw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NzQ5MDI1NS9waG90/by9zdGFuZGFyZC1o/b3RlbC1yb29tLWlu/LWEtbHV4dXJ5LWhv/dGVsLWluLW1vc2Nv/dy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QUlNY3R1QV9q/bnVPeUtIOWVDLXVG/bHRSRDhSaVVRTUJY/RnY1dEpYWllTND0",
    },
    {
      src: "https://imgs.search.brave.com/MHmxd1i4cBO4Vvtq1wt3qAU2gvBFFAxbBDAiDNc8hYw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NzQ5MDI1NS9waG90/by9zdGFuZGFyZC1o/b3RlbC1yb29tLWlu/LWEtbHV4dXJ5LWhv/dGVsLWluLW1vc2Nv/dy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QUlNY3R1QV9q/bnVPeUtIOWVDLXVG/bHRSRDhSaVVRTUJY/RnY1dEpYWllTND0",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex flex-col gap-8 p-4">
          <h1 className="text-2xl font-bold ">Grand Hotel</h1>

          <div className="flex items-center gap-2 ">
            <IoLocationSharp className="text-xl text-gray-600" />
            <span className="text-sm text-gray-800">Elton St, New York</span>
          </div>

          <p className="text-sm text-blue-800 font-semibold ">
            Excellent location, 500km from the city center
          </p>

          <p className="text-sm text-green-800 font-semibold ">
            Book a stay for $114 and enjoy a complimentary airport taxi service
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index}>
                <img
                  className="w-full h-48 object-cover rounded-md mb-2"
                  src={photo.src}
                  alt={`Photo ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between gap-4 mt-4">
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-2">Stay Here</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet a
                molestias adipisci?
              </p>
            </div>

            <div className="flex-1 bg-gray-100 p-4 rounded-md">
              <h2 className="text-lg font-bold mb-2">
                Perfect Stay for a 9-Night Stay
              </h2>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                quas! Molestiae, rerum!
              </p>

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  <b>$945</b> (9 nights)
                </h3>
                <button className="px-4 py-2 bg-red-600 text-white border-none font-medium cursor-pointer rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
