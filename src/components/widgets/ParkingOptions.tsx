import React from 'react'
import Reactangular from "@/app/Images/Rectangle 1828.png";
import Image from 'next/image';

const ParkingOptions:React.FC = () => {
  return (
  <div className='ml-52'>
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

            </div>
            <div className="ml-[-190px]">
              <h2 className="text-3xl font-bold ">
              Heathrow airport Park and Ride
              </h2>
              <p className="text-black text-sm mt-6">
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
              <h2 className="text-3xl ml-[-450px] font-bold">Heathrow airport <br/>
              Meet and Greet   service</h2>
              <p className="text-black w-[95%] ml-[-440px] text-sm mt-6">
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
              <button className="bg-[#85BB65]  text-white font-bold mt-4 py-2 px-4 ml-[-440px] rounded">
                Learn More
              </button>
            </div>
              </div>
            <div className="flex-1 flex ml-[-150px] items-end">
              <Image src={Reactangular} alt="Meet and Greet Parking" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>


    </div>
  </div>
  )
}

export default ParkingOptions