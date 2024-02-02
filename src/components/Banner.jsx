import React from "react";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl px-16 ltr:sm:text-left rtl:sm:text-right ">
              <h1 className="text-3xl text-white sm:text-5xl">
                Book a sun-soaked vacation for the best Prices.
              </h1>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <button
                  to="#"
                  className="block w-full rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto"
                >
                  Start saving
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
