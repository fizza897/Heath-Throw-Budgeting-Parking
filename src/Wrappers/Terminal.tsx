"use client"
import React, { useState } from 'react';
import CheapParking from './CheapParking';
import ParkingOptions from './ParkingOptions';
import LongStayParking from './LongStayParking';

const Terminal: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>('London Heathrow Airport Car Parks');
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(null);
  const [description, setDescription] = useState<string>(`When You're Setting Off On Holiday, The Last Thing You Want To Worry About Is Transport To The Airport...`);
  const [selectedTerminal, setSelectedTerminal] = useState<string | null>(null);

  const handleTerminalClick = (terminalNumber: string) => {
    setSelectedTerminal(terminalNumber); // Set the selected terminal

    switch (terminalNumber) {
      case '2':
        setHeading('London Heathrow parking Terminal 2');
        setDescription('Heathrow Airport Terminal 2 has a good range of airport parking options to suit every need and budget...');
        break;
      case '3':
        setHeading('London Heathrow parking Terminal 3');
        setDescription('Heathrow Terminal 3 is the main airport terminal for long-haul departures...');
        break;
      case '4':
        setHeading('London Heathrow parking Terminal 4');
        setDescription('London Heathrow terminal 4 was originally built for short-haul flights within Europe...');
        break;
      case '5':
        setHeading('London Heathrow parking Terminal 5');
        setDescription('Terminal 5 is Heathrow Airports newest and biggest terminal...');
        break;
      default:
        break;
    }
  };

  const handleButtonClick = (buttonId: string) => {
    setIsClicked(true);
    switch (buttonId) {
      case 'Cheap Parking':
        setHeading('Cheap Heathrow airport parking');
        setDescription('Heathrow is the main UK and London hub for long-haul destinations...');
        setCurrentComponent(<CheapParking />);
        break;
      case 'Parking Options':
        setHeading('Parking options at Heathrow airport');
        setDescription('Heathrow Airport offers all types of car parking...');
        setCurrentComponent(<ParkingOptions />);
        break;
      case 'Long stay Parking':
        setHeading('Long stay parking at Heathrow airport');
        setDescription('Whichever short of long-term parking you are looking for...');
        setCurrentComponent(<LongStayParking />);
        break;
      default:
        setCurrentComponent(null);
        break;
    }
  };

  return (
    <div className="container mx-auto mt-10 p-8 rounded-lg shadow-lg">
      {/* Button Container */}
      <div className="flex gap-4 mb-6 justify-center">
        <div className="flex rounded-xl text-xs sm:text-sm p-5 justify-center gap-4 bg-[#85BB65]">
          <button
            id="button1"
            className="bg-white text-[#5F833B] font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonClick('Cheap Parking')}
          >
            Cheap Parking
          </button>
          <button
            id="button2"
            className={`${
              isClicked ? 'bg-[#5F833B] text-white' : 'bg-white text-[#5F833B]'
            } font-bold py-2 px-4 rounded-lg`}
            onClick={() => handleButtonClick('Parking Options')}
          >
            Parking Options
          </button>
          <button
            id="button3"
            className="bg-white text-[#5F833B] font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonClick('Long stay Parking')}
          >
            Long stay Parking
          </button>
        </div>
      </div>

      {/* Terminal Buttons and Content Area */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Terminal Buttons */}
        <div className="flex flex-col ml-12 gap-7 mt-24 w-1/4">
          {['2', '3', '4', '5'].map((terminal) => (
            <button
              key={terminal}
              id={`terminal${terminal}`}
              className={`${
                selectedTerminal === terminal ? 'bg-[#5F833B] text-white' : 'bg-gray-200 text-gray-800'
              } hover:bg-gray-300 font-bold py-2 px-4 rounded-lg shadow-md`}
              onClick={() => handleTerminalClick(terminal)}
            >
              Terminal {terminal}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 ml-8 mt-10">
          <div id="content" className="text-left text-3xl font-bold mb-4">
            <h1 className="leading-tight">{heading}</h1>
          </div>
          <div id="description" className="text-left text-lg leading-relaxed max-w-2xl mb-6">
            <p>{description}</p>
          </div>
          <div id="contentsidea" className="">
            {currentComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
