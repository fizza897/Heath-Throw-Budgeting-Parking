import React from 'react'
import Reactangular from "@/app/Images/Rectangle 1828.png";
import Image from 'next/image';

const ParkingOptions:React.FC = () => {
  return (
  <>
    <div className="flex flex-col gap-5 mt-5 text-start">
      <section className=" py-9 ml-8">
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative ml-[-470px]">
              <div className=" rounded-lg ">
                <Image
                  src={Reactangular}
                  alt="Airport"
                  className="rounded-lg"
                />
              </div>
              <div
  className="absolute mb-[32px] p-11 bg-[#85BB65] text-start border-4 border-[#85BB65] w-[5%] h-[10%]"
  style={{ borderRadius: '0px 50px 0px 50px' ,marginTop:"-60px" }}
></div>

            </div>
            <div className="ml-[-250px]">
              <h2 className="text-3xl font-bold ">
                Your Trusted Partner For Hassle-Free Airport Parking
              </h2>
              <p className="text-black text-xl mt-6">
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
              <button className="bg-[#85BB65]  text-white font-bold mt-4 py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 flex flex-col mr-[-200px] justify-between">
              <div className="">
              <h2 className="text-[40px] ml-[-450px] font-bold">Meet and Greet Parking</h2>
              <p className="text-black w-[95%] ml-[-440px] text-xl mt-6">
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
            </div>
              </div>
            <div className="flex-1 flex ml-[-150px] items-end">
              <Image src={Reactangular} alt="Meet and Greet Parking" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>


    </div>
  </>
  )
}

export default ParkingOptions