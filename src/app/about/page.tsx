import { Button } from "@/components/ui/button";
import ContactSection from "@/components/widgets/ContactSection";
import Image from "next/image";
import React from "react";
import AeroPlane from "@/app/Images/Group 48096157.png";
import SmileFace from "@/app/Images/smileys.png";
import Car from "@/app/Images/smart-car.png";
import Reactangular from "@/app/Images/Rectangle 1828.png";
const page = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 text-start">
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10">
          <div className="p-10 flex flex-col justify-between">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-[#313131]">
              Your Trusted Partner for Secure, Affordable Parking at Heathrow
            </h2>
            <div className="mt-8 mb-12  items-center">
              <Button className="bg-primary px-10 font-semibold w-fit mb-4 mt-6">
                Learn More
              </Button>
              <div className="mt-6">
                <div className="flex items-end space-x-8 ml-4">
                  {" "}
                  {/* Adjusted for vertical alignment */}
                  <div className="flex flex-col items-center space-y-2">
                    <Image src={SmileFace} alt="smileface" />
                    <span className="text-gray-600 text-sm font-medium">
                      96% Satisfaction Rate
                    </span>
                  </div>
                  <div className="h-5 border-x border-vertical border-gray-400"></div>
                  <div className="flex flex-col items-center space-y-2">
                    <Image src={Car} alt="car" />
                    <span className="text-gray-600 text-sm font-medium">
                      4212+ Vehicles Parked
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 md:h-auto">
            <div
              className="relative p-4 rounded-lg"
              style={{ width: "463.64px", height: "500px" }}
            >
              <Image
                src={AeroPlane}
                className="rounded-lg"
                alt="Parking Lot with Airplane"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" py-9 ml-8">
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="p-2 rounded-lg ml-9">
                <Image
                  src={Reactangular}
                  alt="Airport"
                  className="rounded-lg"
                />
              </div>
              <div
  className="absolute mb-[32px] p-11 bg-[#85BB65] text-start border-4 border-[#85BB65] w-[20%] h-[30%]"
  style={{ borderRadius: '0px 50px 0px 50px' ,marginTop:"-80px" }}
></div>

            </div>
            <div className="mr-52 mb-7">
              <h2 className="text-3xl font-bold mb-10">
                Your Trusted Partner For Hassle-Free Airport Parking
              </h2>
              <p className="text-black text-sm mb-6">
                At Budget Parking Heathrow, We're Committed To Making Your
                Travel Experience As Smooth As Possible. Founded On The
                Principle Of Providing Secure, Affordable, And Convenient
                Parking, We've Become A Trusted Choice For Travelers. Our
                Mission is simple: To Offer Reliable Parking Solutions That Give
                You Peace Of Mind While You're Away. We Continuously Strive To
                Enhance Our Services, Making Airport Parking A Seamless Part Of
                Your Journey. Trust Us To Take The Stress Out Of Parking So You
                Can Focus On What Really Matters - Your Trip.
              </p>
              <button className="bg-[#85BB65]  text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-11">
        <div className="ml-[-170px]"> 
  <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
  <h3 className="text-xl font-bold mb-4">Comprehensive Parking Solutions Tailored For You</h3>
  <p className="text-gray-700 mb-6">
    At Budget Parking Heathrow, We Offer A Variety Of Parking Options To Suit Your Needs, From Park And Ride To Meet And Greet Services. Enjoy Easy Online Booking With The Best Rates Guaranteed, 24/7 Customer Support, And Reliable Shuttle Transfers That Ensure A Seamless Experience To And From Heathrow Terminals.
  </p>
</div>

          <div
            className="absolute left-[45%] p-11 bg-[#85BB65] text-start border-4 border-[#85BB65] w-[20%] h-[30%]"
            style={{ borderRadius: '0px 50px 0px 50px' }}
          >
            <h3 className="text-xl h-[30%] text-white font-bold mt-[-25px]">Diverse Parking Options</h3>
            <p className="text-white mt-10">
              Including Park And Ride, Meet And Greet, Long-Stay, And Short-Stay Services.
            </p>
          </div>
          <div
            className="absolute left-[45%] mt-[12%] p-11 w-[20%] h-[40%]"
            style={{ borderRadius: '0px 50px 0px 50px' }}
          >
            <h3 className="text-xs font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-700 mb-6">
            Round-the-clock assistance for a smooth, worry-free experience.
            </p>
          </div>
          <div
            className="absolute left-[70%] mt-[-25px] p-11 w-[20%] h-[40%]"
            style={{ borderRadius: '0px 50px 0px 50px' }}
          >
            <h3 className="text-xl font-bold mb-1">Easy Booking</h3>
            <p className="text-gray-700 mb-6">
              User-Friendly Online Reservations With Guaranteed Best Rates.
            </p>
            <h3 className="text-xl font-bold mb-4">Reliable Transfers</h3>
            <p className="text-gray-700 mb-6">
              Quick And Efficient Shuttle Services To And From Heathrow Terminals.
            </p>
          </div>
        </div>
      </div>
    </section>
      <section className="py-16">
      <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Why Choose Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          className="bg-white rounded-lg shadow-md p-6"
          style={{ width: '90%', height: '90%', marginLeft: '30px' }}
        >
          <h2 className="text-xl font-bold mb-4">Affordable Rates</h2>
          <p className="text-black">Save Money With Our Budget-Friendly Parking Options.</p>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-6"
          style={{
            width: '90%',
            height: '90%',
            marginTop: '70px',
            backgroundColor: '#85BB65',
          }}
        >
          <h2 className="text-xl font-bold mb-4 text-white">Secure Facilities</h2>
          <p className="text-white">
            Rest Easy Knowing Your Vehicle Is Protected By Advanced Security Measures.
          </p>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-6"
          style={{ width: '90%', height: '90%', backgroundColor: 'white' }}
        >
          <h2 className="text-xl font-bold mb-4">Convenient Locations</h2>
          <p className="text-gray-600">Access Easily Reachable Parking Close To Heathrow Terminals.</p>
        </div>
        <div
          className="rounded-lg shadow-md p-6"
          style={{
            width: '90%',
            height: '90%',
            marginTop: '70px',
            backgroundColor: '#85BB65',
          }}
        >
          <h2 className="text-xl font-bold mb-4 text-white">Customer Satisfaction</h2>
          <p className="text-white">
            Join Countless Travelers Who Trust Us For A Hassle-Free Parking Experience.
          </p>
        </div>
      </div>
    </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default page;
