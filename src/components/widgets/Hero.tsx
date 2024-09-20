import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[450px] lg:h-[600px]">
      {" "}
      {/* Adjusted height for mobile and desktop */}
      {/* Linear gradient background */}
      <div
        className="flex w-full h-full"
        style={{
          background: "linear-gradient(90deg, #193D1C 50%, #142C1A 80%)",
        }}
      >
        {/* Desktop View */}
        <div className="container hidden lg:flex mt-[100px]">
          <div className="text-left w-[70%] flex flex-col gap-6 ml-[70px]">
            <h1 className="lg:text-6xl text-white font-plus-jakarta font-extrabold leading-tight w-[105%]">
              Affordable & Secure{" "}
              <span className="block">Heathrow Airport Parking</span>
            </h1>

            <p className="text-xs sm:text-lg text-white font-plus-jakarta w-[100%]">
              Discover secure, budget-friendly parking at Heathrow Airport.
              Enjoy convenient options that maximize your savings and give you
              peace of mind, all while ensuring a hassle-free travel experience.
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="container lg:hidden flex">
          <div className="text-left flex flex-col gap-6 mt-[70px] ">
            <h1 className="text-3xl text-white font-plus-jakarta font-extrabold leading-tight">
              Affordable & Secure
              <br />
              Heathrow Airport Parking
            </h1>
            <p className="text-xs sm:text-lg text-white font-plus-jakarta">
              Discover secure, budget-friendly parking at Heathrow Airport.
              Enjoy convenient options that maximize your savings and give you
              peace of mind, all while ensuring a hassle-free travel experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
