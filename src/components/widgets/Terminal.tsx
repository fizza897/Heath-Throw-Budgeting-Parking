"use client";
import React, { ReactNode, useState, useEffect } from 'react';
import CheapParking from './CheapParking'; // Correct import path
import ParkingOptions from './ParkingOptions'; // Correct import path
import LongStayParking from './LongStayParking'; // Correct import path

const Terminal: React.FC = () => {
  const [heading, setHeading] = useState<string>('London Heathrow Airport Car Parks');
  const [currentComponent, setCurrentComponent] = useState<ReactNode>(null);
  const [selectedTerminal, setSelectedTerminal] = useState<string | null>(null);
  const [hoveredTerminal, setHoveredTerminal] = useState<string | null>(null);
  const [description, setDescription] = useState<string>(
    `When You're Setting Off On Holiday, The Last Thing You Want To Worry About Is Transport To The Airport. 
    So, Why Not Use Our Comparison Platform To Find A Good Deal For Heathrow Airport Parking, And Drive To The Airport 
    In The Comfort Of Your Own Car? Heathrow Long Stay Parking Can Be Great Value For Money. Compare The Parking Providers 
    On Our Website, So You Can Choose The Best Option For You. Whether You Travel For Business Or Pleasure, There Are Options 
    For All Budgets, Including Meet And Greet Parking, Self Park And Park And Ride. Parkos Has The Best Deals On All Types 
    Of Parking. Whatever The Length Of Your Trip, Don't Hesitate To Start Searching For Your Parking Spot Straight Away. 
    Some Of The Best Parking Deals Are Available Well In Advance, So Don't Wait Too Long When Booking Heathrow Airport 
    Parking Options.`
  );

  useEffect(() => {
    setSelectedTerminal('2');
  }, []);

  const handleTerminalHover = (terminalNumber: string) => {
    setHoveredTerminal(terminalNumber);
    setSelectedTerminal(terminalNumber);
    switch (terminalNumber) {
      case '2':
        setHeading('London Heathrow parking Terminal 2');
        setDescription('Heathrow Airport Terminal 2 has a good range of airport parking options to suit every need and budget. As well as low-priced self-park options, there are good-value Meet and Greet parking options that will save you time and stress when parking at Heathrow airport. Another good parking option, especially if you have an early morning flight, is stay and park at one of the airport hotels with car parking. When you use park and stay, you do not need to worry about traffic on the way to Heathrow airport. Get a good nights sleep, leave your car at the airport hotel and take a taxi transfer to the airport in the morning. Search our site for the best Heathrow car parks charges from all the different parking providers. There are five parking providers of Meet and Greet parking at Terminal 2, so there is plenty of competition to provide the best service at a reasonable parking price.');
        break;
      case '3':
        setHeading('London Heathrow parking Terminal 3');
        setDescription('Heathrow Terminal 3 is the main airport terminal for long-haul departures to the USA, Canada and Asia. The last thing that you want to worry about when travelling at the long stay car parks is your car. Terminal 3 offers two Meet and Greet options. If you are looking for cheap London Heathrow parking, try one of the three budget self-park options. Most self-park options at Terminal 3 have shuttle bus transfer times of less than 15 minutes. Some car parks are a little further away and will transfer you to the terminal within 30 minutes. Stay and park options are also available. Just stay in an airport hotel for one night before leaving on your trip, and leave the car at the hotel parking until you return. With prices from as little as £9 a day, there are terminal parking options at Heathrow airport for every budget.');
        break;
      case '4':
        setHeading('London Heathrow parking Terminal 4');
        setDescription('London Heathrow Terminal 4 was originally built for short-haul flights within Europe, but now services passengers travelling to and from Europe as well as long-haul passengers. While official airport parking can be very expensive, there are budget options off-site. Our search engine compares all the off-site parking providers, so you can find the one that suits you the best. While this terminal does not have quite as many options as Terminals 2 and 3, you can choose from Meet and Greet or self-park services. Whichever self-park service you choose, the free shuttle transfer buses take between 7 and 15 minutes and run regularly 24 hours a day. Take a look at the options on our website to see all the parking options at the best Heathrow parking prices.');
        break;
      case '5':
        setHeading('London Heathrow parking Terminal 5');
        setDescription('Terminal 5 is Heathrow Airport\'s newest and biggest terminal. It is used exclusively for British Airways and Iberia flights. This terminal is likely to be very busy at all times, so you will want to arrive in good time in advance to check in, go through security and catch your flight on time. For long-haul destinations outside of Europe, it is recommended to check in 3 hours in advance of your flight time. Taking your car to the airport means you will not need to worry about transport delays on your way to the airport. There are many parking options available to suit all your needs, including Heathrow Meet and Greet, self-park and stay and fly. If you are considering park and fly, you can choose between different Heathrow airport hotels. They offer hotel and parking packages. Whichever option you choose, well find you the best deal available. Book Heathrow airport parking.');
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = () => {
    setHoveredTerminal(null);
  };

  const handleButtonClick = (buttonId: string) => {
    switch (buttonId) {
      case 'Cheap Parking':
        setHeading('Cheap Heathrow airport parking');
        setDescription('Heathrow is the main UK and London hub for long-haul destinations. It is a very busy airport at all times. So, whether you are taking a luxury holiday or making a business trip to the USA or anywhere else in the world, you will want to be there in plenty of time. With excellent transport connections to London and the Home Counties, it is also a popular choice for short-haul destinations, especially for business travellers. Demand for airport parking at Heathrow Airport is growing all the time, and with so many different parking operators, it can be hard to know which one has the best deal. Parkos has partnered with local car park operators to get the best deals for you. Our easy and convenient search engine enables comparisons of all the different options for each Heathrow airport terminal, giving you all the airport parking choices you need at the best parking prices. You won\'t find a better deal than ours.');
        setCurrentComponent(<CheapParking />);
        break;
      case 'Parking Options':
        setHeading('Parking options at Heathrow airport');
        setDescription('Heathrow Airport offers all types of car parking. Park and Ride is usually the cheapest car parking option. With this option, you drive your car to a short stay car park or long stay car park a few miles from the airport terminals and are taken to the terminal by a free shuttle bus service. A slightly more expensive, but very convenient option is the Meet and Greet service, or valet parking. If you choose this option, you simply drive up to the drop-off point at the Heathrow airport terminal building and hand over your car keys to a member of staff of the car park. Another popular option is Park, Sleep, Fly. This is the best option if you need to stay overnight before an early morning departure. Simply leave your car at the car park of the hotel for the duration of your trip. Parkos bring you the best deals on all the options. So, why not try our comparison tool today?');
        setCurrentComponent(<ParkingOptions />);
        break;
      case 'Long stay Parking':
        setHeading('Long stay parking at Heathrow airport');
        setDescription('Whichever short or long-term parking you are looking for, you are in safe hands with Parkos. Not only do we find you a great deal, we also look after you throughout the process. We provide customer service from start to finish. You can find answers to most questions in the FAQ section of our website. If you have further questions, please do not hesitate to get in touch with our customer service. We will answer any questions or queries as quickly as possible. There is also detailed information on our website about the parking services our partner companies offer. There are directions and post codes available to help you find your chosen Heathrow car park. All of our partners are carefully chosen reliable companies, with security measures in place. If you are looking for a good deal and a reliable service, Parkos is the place to look for Heathrow airport parking.');
        setCurrentComponent(<LongStayParking />);
        break;
      default:
        setCurrentComponent(null);
        break;
    }
  };

  return (
    <div className="container mx-auto mt-18 p-8">
  {/* Button Container */}
  <div className="flex flex-wrap gap-4 mb-6 justify-center">
    <div className="flex flex-wrap justify-center gap-4 bg-[#85BB65] rounded-xl p-5 text-xs sm:text-sm">
      <button
        id="button1"
        className="bg-white text-[#5F833B] font-bold py-2 px-4 rounded-lg w-full sm:w-72"
        onClick={() => handleButtonClick('Cheap Parking')}
      >
        Cheap Parking
      </button>
      <button
        id="button2"
        className="bg-white text-[#5F833B] font-bold py-2 px-4 rounded-lg w-full sm:w-72"
        onClick={() => handleButtonClick('Parking Options')}
      >
        Parking Options
      </button>
      <button
        id="button3"
        className="bg-white text-[#5F833B] font-bold py-2 px-4 rounded-lg w-full sm:w-72"
        onClick={() => handleButtonClick('Long stay Parking')}
      >
        Long stay Parking
      </button>
    </div>
  </div>

  {/* Terminal Buttons and Content Area */}
  <div className="flex flex-col md:flex-row items-start justify-between gap-8">
    {/* Terminal Buttons */}
    <div className="flex flex-col gap-7 mt-12  md:mr-28">
      {['2', '3', '4', '5'].map((terminal) => (
        <button
          key={terminal}
          id={`terminal${terminal}`}
          className={`transform duration-1000 ease-out -translate-x-full hover:translate-x-0 ${
            hoveredTerminal === terminal
              ? 'bg-[#5F833B] text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-[#5F833B] hover:text-white'
          } font-bold py-2 px-4 rounded-lg shadow-md`}
          onMouseEnter={() => handleTerminalHover(terminal)}
          onMouseLeave={handleMouseLeave}
        >
          Terminal {terminal}
        </button>
      ))}
    </div>

    {/* Content Area */}
    <div className="flex-1 mt-10 md:mr-24">
      <div id="content" className="text-left text-2xl sm:text-3xl font-bold mb-4">
        <h1 className="leading-tight">{heading}</h1>
      </div>
      <div id="description" className="text-left text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
        <p>{description}</p>
      </div>
      <div id="contentsidea" className="text-left">
        {currentComponent}
      </div>
    </div>
  </div>
</div>

  );
};

export default Terminal;