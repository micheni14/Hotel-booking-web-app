import { useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
// import { useLocation } from "react-router-dom";
const HotelList = () => {
  const [openDate, setopenDate] = useState(false);
  const [isdate, setIsdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // const location = useLocation();
  // console.log(location);
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <div className=" container mx-auto pt-4">
        <div className="grid grid-cols-2 ">
          <div className="card md:w-96 w-full bg-blue-800 flex-1 top-2.5 sticky  h-max  m-0">
            <div className="card-body ">
              <h2 className="card-title text-2l subpixel-antialiased	text-white	 uppercase">
                Search
              </h2>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white">Destination</span>
                </div>
                <input
                  type="text"
                  // placeholder={destination}
                  placeholder="Nairobi"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <p className="text-white text-sm">Check in date</p>
              <div className="flex items-center gap-4 border-r-4 bg-white px-4  py-3 rounded-md z-20">
                <MdCalendarMonth />
                <span
                  onClick={() => setopenDate(!openDate)}
                  className=" text-gray-300 cursor-pointer"
                >
                  {`${format(isdate[0].startDate, "MM/dd/yyyy")} to ${format(
                    isdate[0].endDate,
                    "MM/dd/yyyy"
                  )} `}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setIsdate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={isdate}
                    className="absolute top-64  "
                  />
                )}
              </div>
              <p className="text-white text-sm">Options</p>
              <div className="space-y-4">
                <div className="flex  justify-between">
                  <p className=" text-white">
                    Min <small>price per night</small>{" "}
                  </p>
                  <input
                    type="text"
                    className="w-24 p-1  border border-gray-300 rounded-md bg-white text-center"
                    placeholder="1000"
                  />
                </div>
                <div className="flex  justify-between">
                  <p className=" text-white">
                    Max <small>price per night</small>
                  </p>
                  <input
                    type="30,000"
                    className="w-24 p-1  border border-gray-300 rounded-md bg-white text-center"
                    placeholder="1000"
                  />
                </div>
                <div className="flex  justify-between">
                  <p className=" text-white">Adult</p>
                  <input
                    type="text"
                    className="w-24 p-1  border border-gray-300 rounded-md bg-white text-center"
                    placeholder="1"
                  />
                </div>
                <div className="flex  justify-between">
                  <p className=" text-white">Children</p>
                  <input
                    type="text"
                    className="w-24 p-1  border border-gray-300 rounded-md bg-white text-center"
                    placeholder="0"
                  />
                </div>
                <div className="flex  justify-between space-y-2">
                  <p className=" text-white">Rooms</p>
                  <input
                    type="text"
                    className="w-24 p-1  border border-gray-300 rounded-md bg-white text-center"
                    placeholder="1"
                  />
                </div>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white border-none w-full font-medium cursor-pointer rounded-md ">
                Search
              </button>
            </div>
          </div>
          <div>
            <div className="border border-solid border-gray-300 outline-none p-2  rounded-md flex justify-between gap-5 mb-5 font-medium bg-gray-50">
              <img
                className="w-52 h-52 object-cover"
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt=""
              />
              <div className="flex flex-col  gap-2 flex-grow-2">
                <p className=" text-blue-800 text-sm"> Tower kenya</p>
                <span className="text-sm">500km from town</span>
                <span className="bg-green-800 text-white max-w-max p-1 rounded-md text-sm">
                  free taxi from airport
                </span>
                <span className=" text-xs font-bold">
                  Studio Apartment with Air conditioning
                </span>
                <span className="text-xs font-bold">
                  Entire studio . 1 bathroom . 21m2 1 full bed
                </span>
                <span className="text-xs font-bold text-green-800">
                  Free Cancellation
                </span>
                <span className="text-xs font-bold text-green-800">
                  You can cancel later so lock in price now
                </span>
              </div>
              <div className="flex flex-grow-1 flex-col justify-between">
                <div className="flex justify-between ">
                  <span className="font-semibold ">Excellent</span>
                  <button className="bg-blue-900 text-white p-2 font-bold bottom-0">
                    8.9
                  </button>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="text-sm">$123</span>
                  <span className="text-xs text-gray-700">
                    Includes tax and all other charges
                  </span>
                  <button className="px-4 py-2 bg-red-600 text-white border-none w-full font-medium cursor-pointer rounded-md">
                    Check Status
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-solid border-gray-300 outline-none p-2  rounded-md flex justify-between gap-5 mb-5 font-medium bg-gray-50">
              <img
                className="w-52 h-52 object-cover"
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt=""
              />
              <div className="flex flex-col  gap-2 flex-grow-2">
                <p className=" text-blue-800 text-sm"> Tower kenya</p>
                <span className="text-sm">500km from town</span>
                <span className="bg-green-800 text-white max-w-max p-1 rounded-md text-sm">
                  free taxi from airport
                </span>
                <span className=" text-xs font-bold">
                  Studio Apartment with Air conditioning
                </span>
                <span className="text-xs font-bold">
                  Entire studio . 1 bathroom . 21m2 1 full bed
                </span>
                <span className="text-xs font-bold text-green-800">
                  Free Cancellation
                </span>
                <span className="text-xs font-bold text-green-800">
                  You can cancel later so lock in price now
                </span>
              </div>
              <div className="flex flex-grow-1 flex-col justify-between">
                <div className="flex justify-between ">
                  <span className="font-semibold ">Excellent</span>
                  <button className="bg-blue-900 text-white p-2 font-bold bottom-0">
                    8.9
                  </button>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="text-sm">$123</span>
                  <span className="text-xs text-gray-700">
                    Includes tax and all other charges
                  </span>
                  <button className="px-4 py-2 bg-red-600 text-white border-none w-full font-medium cursor-pointer rounded-md">
                    Check Status
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-solid border-gray-300 outline-none p-2  rounded-md flex justify-between gap-5 mb-5 font-medium bg-gray-50">
              <img
                className="w-52 h-52 object-cover"
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt=""
              />
              <div className="flex flex-col  gap-2 flex-grow-2">
                <p className=" text-blue-800 text-sm"> Tower kenya</p>
                <span className="text-sm">500km from town</span>
                <span className="bg-green-800 text-white max-w-max p-1 rounded-md text-sm">
                  free taxi from airport
                </span>
                <span className=" text-xs font-bold">
                  Studio Apartment with Air conditioning
                </span>
                <span className="text-xs font-bold">
                  Entire studio . 1 bathroom . 21m2 1 full bed
                </span>
                <span className="text-xs font-bold text-green-800">
                  Free Cancellation
                </span>
                <span className="text-xs font-bold text-green-800">
                  You can cancel later so lock in price now
                </span>
              </div>
              <div className="flex flex-grow-1 flex-col justify-between">
                <div className="flex justify-between ">
                  <span className="font-semibold ">Excellent</span>
                  <button className="bg-blue-900 text-white p-2 font-bold bottom-0">
                    8.9
                  </button>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="text-sm">$123</span>
                  <span className="text-xs text-gray-700">
                    Includes tax and all other charges
                  </span>
                  <button className="px-4 py-2 bg-red-600 text-white border-none w-full font-medium cursor-pointer rounded-md">
                    Check Status
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-solid border-gray-300 outline-none p-2  rounded-md flex justify-between gap-5 mb-5 font-medium bg-gray-50">
              <img
                className="w-52 h-52 object-cover"
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt=""
              />
              <div className="flex flex-col  gap-2 flex-grow-2">
                <p className=" text-blue-800 text-sm"> Tower kenya</p>
                <span className="text-sm">500km from town</span>
                <span className="bg-green-800 text-white max-w-max p-1 rounded-md text-sm">
                  free taxi from airport
                </span>
                <span className=" text-xs font-bold">
                  Studio Apartment with Air conditioning
                </span>
                <span className="text-xs font-bold">
                  Entire studio . 1 bathroom . 21m2 1 full bed
                </span>
                <span className="text-xs font-bold text-green-800">
                  Free Cancellation
                </span>
                <span className="text-xs font-bold text-green-800">
                  You can cancel later so lock in price now
                </span>
              </div>
              <div className="flex flex-grow-1 flex-col justify-between">
                <div className="flex justify-between ">
                  <span className="font-semibold ">Excellent</span>
                  <button className="bg-blue-900 text-white p-2 font-bold bottom-0">
                    8.9
                  </button>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="text-sm">$123</span>
                  <span className="text-xs text-gray-700">
                    Includes tax and all other charges
                  </span>
                  <button className="px-4 py-2 bg-red-600 text-white border-none w-full font-medium cursor-pointer rounded-md">
                    Check Status
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-solid border-gray-300 outline-none p-2  rounded-md flex justify-between gap-5 mb-5 font-medium bg-gray-50">
              <img
                className="w-52 h-52 object-cover"
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt=""
              />
              <div className="flex flex-col  gap-2 flex-grow-2">
                <p className=" text-blue-800 text-sm"> Tower kenya</p>
                <span className="text-sm">500km from town</span>
                <span className="bg-green-800 text-white max-w-max p-1 rounded-md text-sm">
                  free taxi from airport
                </span>
                <span className=" text-xs font-bold">
                  Studio Apartment with Air conditioning
                </span>
                <span className="text-xs font-bold">
                  Entire studio . 1 bathroom . 21m2 1 full bed
                </span>
                <span className="text-xs font-bold text-green-800">
                  Free Cancellation
                </span>
                <span className="text-xs font-bold text-green-800">
                  You can cancel later so lock in price now
                </span>
              </div>
              <div className="flex flex-grow-1 flex-col justify-between">
                <div className="flex justify-between ">
                  <span className="font-semibold ">Excellent</span>
                  <button className="bg-blue-900 text-white p-2 font-bold bottom-0">
                    8.9
                  </button>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="text-sm">$123</span>
                  <span className="text-xs text-gray-700">
                    Includes tax and all other charges
                  </span>
                  <button className="px-4 py-2 bg-red-600 text-white border-none w-full font-medium cursor-pointer rounded-md">
                    Check Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;
