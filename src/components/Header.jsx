import React, { useState } from "react";
import { LuBedDouble } from "react-icons/lu";
import { MdCalendarMonth } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setopenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/amenities", { state: { destination, date, options } });
  };

  return (
    <div className="bg-blue-800 ">
      <div className="container mx-auto  space-y-4 ">
        <div className="text-3xl pt-2 text-white">
          <p>Find your home away from home</p>
        </div>
        <p className="text-md pt-6 text-white">
          Search deals on hotels, vacation homes, and much more..
        </p>
        <div className="md:h-16 bg-red-500 md:bg-white ml-8 md:ml-0 p-12 md:p-0   md:border-4 md:border-solid md:border-yellow-500   md:flex items-center justify-around  rounded-md w-max md:w-full space-y-4 md:space-y-0 ">
          <div className="flex items-center gap-4 md:border-r-4 border-yellow-500 bg-white py-4 md:py-0 rounded-md   ">
            <LuBedDouble size={24} />
            <input
              type="text"
              placeholder="where are you going"
              className="border-none outline-none"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 md:border-r-4 border-yellow-500 px-4 z-20 bg-white py-4 md:py-0 rounded-md">
            <MdCalendarMonth />
            <span
              onClick={() => setopenDate(!openDate)}
              className=" text-gray-300 cursor-pointer"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )} `}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="absolute top-64  "
              />
            )}
          </div>
          <div className="flex items-center gap-4  z-20 bg-white py-4 md:py-0 rounded-md">
            <FaPerson />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="cursor-pointer "
            >
              {`${options.adult} adult . ${options.children} children . ${options.room}  room`}
            </span>
            {openOptions && (
              <div className="absolute top-64  bg-white shadow-md text-gray-600 rounded-md p-4 ">
                <div className="w-52 flex justify-between m-3">
                  <span>adult</span>
                  <div className="flex items-center  gap-4 text-sm  text-black">
                    <button
                      disabled={options.adult <= 1}
                      onClick={() => handleOption("adult", "d")}
                      className="w-10 h-10  rounded-md  border-2 border-blue-700 cursor-pointer disabled:cursor-not-allowed "
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button
                      onClick={() => handleOption("adult", "i")}
                      className="w-10 h-10  rounded-md  border-2 border-blue-700 cursor-pointer "
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-52 flex justify-between m-3">
                  <span>Children</span>
                  <div className="flex items-center  gap-4 text-sm  text-black">
                    <button
                      disabled={options.children <= 0}
                      onClick={() => handleOption("children", "d")}
                      className="w-10 h-10  rounded-md  border-2 border-blue-700 cursor-pointer disabled:cursor-not-allowed "
                    >
                      -
                    </button>
                    <span>{options.children}</span>
                    <button
                      onClick={() => handleOption("children", "i")}
                      className="w-10 h-10  rounded-md  border-2 border-blue-700 cursor-pointer "
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-52 flex justify-between m-3">
                  <span>Room</span>
                  <div className="flex items-center  gap-4 text-sm  text-black">
                    <button
                      disabled={options.room <= 1}
                      onClick={() => handleOption("room", "d")}
                      className="w-10 h-10  rounded-md  border-2 border-blue-700 cursor-pointer disabled:cursor-not-allowed  "
                    >
                      -
                    </button>
                    <span>{options.room}</span>
                    <button
                      onClick={() => handleOption("room", "i")}
                      className="w-10 h-10  rounded-md  border-2 border-blue-700 cursor-pointer "
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="bg-transparent text-blue-700 border-2 border-blue-700 rounded-md px-4 py-2 w-full p-4 hover:scale-105 hover:border-blue-600  ">
                  Done
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handleSearch}
            className="bg-blue-800 flex items-center text-white rounded-md px-6 py-2 "
          >
            <p>Search</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
