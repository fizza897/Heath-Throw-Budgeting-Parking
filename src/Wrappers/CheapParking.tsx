import React from "react";
import ThumbUp from "@/app/Images/Thumbsup.png"; // Assuming you have these images in your project
import Mask from "@/app/Images/Mask.png";
import Document from "@/app/Images/Document.png";
import Image from "next/image";

const CheapParking: React.FC = () => {
  return (
    <>
  
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section 1 */}
        <div className="space-y-4">
          <div className="flex justify-start ml-[-360px] items-center"> {/* Align items vertically */}
            <div className="w-10 mr-10 flex-shrink-0">
              <Image src={Document} alt="plane" width={40} height={40} /> {/* Added width and height for consistent image size */}
            </div>
            <p className="text-lg text-gray-800 leading-relaxed">
              We all enjoy planning for a holiday, but sometimes little things can get forgotten about. Depending on the time of your flight, getting to the airport by public transport may not be as easy as you expect. Remember, you need to be at the airport at least 2 hours in advance, and allow 3 hours for long-haul flights. If you don't want to rely on public transport, taking your own car is cheaper and easier than booking a taxi for example. Taking your own car means you can take your time packing and loading the car and still arrive at the right time. Once you decide to take your car, check out the Heathrow airport parking deals here at Parkos to find the best airport parking option for you. You might be surprised at the deals you can get on parking Meet and Greet and Park and Ride services.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <div className="flex justify-start ml-[-360px] items-center">
            <div className="w-10 mr-10 flex-shrink-0">
              <Image src={Mask} alt="mask" width={40} height={40} />
            </div>
            <p className="text-lg text-gray-800 leading-relaxed">
              On-site airport parking at Heathrow airport is incredibly expensive, but cheaper off airport car parks are available. Because Parkos works in partnership with the local parking companies, we are able to bring you a better deal. Car parks are willing to offer customer discounts in exchange for Parkos bringing their deals to public attention. Being that little bit further away from the airport means that costs are much cheaper and these savings are passed on to the customer through our competitive comparison of different car parks. You may even find that meet and greet services are available at a little extra cost, so you just arrive at the airport and hand over your keys. No more worrying about how long it will take for the transfer to arrive or how far it is to Heathrow airport. We'll find you the best and the cheapest deals for car parks at Heathrow airport.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <div className="flex justify-start ml-[-360px] items-center">
            <div className="w-10 mr-10 flex-shrink-0">
              <Image src={ThumbUp} alt="thumbs up" width={40} height={40} />
            </div>
            <p className="text-lg text-gray-800 leading-relaxed">
              All the available car parks close to Heathrow airport have excellent round the clock security. With cameras and security guards always on duty, you don't need to worry about your parked car while you're away. Don't worry if your plans change or your flight home is delayed. All of our long-stay car park partners allow you to leave your car for as long as necessary and pay the balance when you pick up the car. Because we bring you all the Heathrow parking prices from local independent operators, you can be sure you're getting the best deal. Whatever the chosen car park service, we'll find the best price. Booking well in advance could get you an even better deal, and give you the peace of mind of knowing where your car will be while you're away. So you can relax and enjoy planning your actual holiday.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CheapParking;