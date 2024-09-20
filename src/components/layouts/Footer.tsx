import Image from 'next/image';
import React from 'react';
import { BsFillAirplaneFill } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import Link from 'next/link';
import { FaCar, FaHandshake, FaMapSigns, FaBuilding, FaCalendarAlt, FaStar, FaHotel, FaConciergeBell, FaTaxi } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="mt-[50px] bg-cover bg-center bg-secondary-dark text-white py-10 text-xs sm:text-sm" style={{ backgroundImage: "url('/footer-bg.png')" }}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col gap-6">
        
        <div className="space-y-4 md:flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="text-xs sm:text-sm md:text-base">Know more about our Privacy Policy - you can easily unsubscribe any time!</p>
          </div>
          <div className="flex items-center md:w-[40%] mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter Your Email Address..."
              className="w-full p-3 rounded-md text-black border-2 border-transparent focus:border-white focus:outline-none"
            />
            <button className="bg-primary p-3 rounded-md border-2 border-transparent focus:border-white focus:outline-none ml-[-10px] w-[40%] text-white">SUBSCRIBE</button>
          </div>
        </div>
    
        <hr className='my-4' />
        
        <div className="flex flex-col md:flex-row flex-wrap gap-10">
          <div className="space-y-4 flex-1">
            <Image src="/Logo_footer.png" alt="Heathrow Budget Parking" width={200} height={100} className="mb-4" />
            <p className="text-xs sm:text-sm md:text-base leading-[1.85] w-[130%]">
              Budget Parking Heathrow offers secure, affordable, and convenient parking solutions tailored to your needs. Enjoy peace of mind while you travel with our 24/7 support and a range of budget-friendly options.
            </p>
          </div>
          
          <div className="flex-1 space-y-6 ml-[100px]">
            <h3 className="text-lg sm:text-xl font-bold">Airport</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className='flex items-center gap-3'><BsFillAirplaneFill />Gatwick Airport</li>
              <li className='flex items-center gap-3'><BsFillAirplaneFill />Heathrow Airport</li>
              <li className='flex items-center gap-3'><BsFillAirplaneFill />Birmingham Airport</li>
              <li className='flex items-center gap-3'><BsFillAirplaneFill />Manchester Airport</li>
              <li className='flex items-center gap-3'><BsFillAirplaneFill />Stansted Airport</li>
              <li className='flex items-center gap-3'><BsFillAirplaneFill />Luton Airport</li>
              <li className='flex items-center gap-3'><BsFillAirplaneFill />Bristol Airport</li>
              <li className='flex items-center gap-3'><BsFillAirplaneFill />Edinburgh Airport</li>
              <li className='flex items-center gap-3'><BsFillAirplaneFill />Glasgow Airport</li>
              <li className='flex items-center gap-3'><BsFillAirplaneFill />London City Airport</li>
            </ul>
          </div>
          
          <div className="flex-1 space-y-6 ml-6">
            <h3 className="text-lg sm:text-xl font-bold">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2"><FaCar className="text-white" /><Link href={'/airport'}>Airport Parking</Link></li>
              <li className="flex items-center gap-2"><FaHandshake className="text-white" /><Link href={'/meeting'}>Meeting And Greet Parkings</Link></li>
              <li className="flex items-center gap-2"><FaMapSigns className="text-white" /><Link href={"/parks"}>Parks And Rides</Link></li>
              <li className="flex items-center gap-2"><FaBuilding className="text-white" /><Link href={'/onsite'}>Onsite Parkings</Link></li>
              <li className="flex items-center gap-2"><FaCalendarAlt className="text-white" /><Link href={'/long'}>Long & Short Stay</Link></li>
              <li className="flex items-center gap-2"><FaStar className="text-white" /><Link href={'/airport'}>Premium & Valet Parking</Link></li>
              <li className="flex items-center gap-2"><FaHotel className="text-white" /><Link href={'/meeting'}>Hotel & Parking</Link></li>
              <li className="flex items-center gap-2"><FaConciergeBell className="text-white" /><Link href={"/parks"}>Airport Lounges</Link></li>
              <li className="flex items-center gap-2"><FaTaxi className="text-white" /><Link href={'/onsite'}>Airport Transfer</Link></li>
            </ul>
          </div>

          <div className="flex-1 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold">Important Reading</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href={'/about'}>About Us</Link></li>
              <li><Link href={'/contact'}>Contact Us</Link></li>
              <li><Link href={"/policy"}>Privacy Policy</Link></li>
              <li><Link href={'/terms'}>Terms & Conditions</Link></li>
              <li><Link href={'/faqs'}>FAQs</Link></li>
            </ul>
          </div>
        </div>
    
        <hr className='my-4' />
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
            <p>Working Hours: Mon - Sun 24h</p>
            <div className="flex justify-center space-x-4 mt-4 sm:mt-0">
              <Image src={'/paymentcards.png'} alt='' width={200} height={100} />
            </div>
          </div>
          <hr className='my-4' />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p>&copy; 2024 Copyright Heathrow Budget Parking. All Rights Reserved.</p>
            <div className="flex items-center justify-center gap-6 mt-4 md:mt-0 text-white text-xl">
              <a href="https://www.linkedin.com/company/budgetparking/about/?viewAsMember=true" target='_blank'><FaLinkedinIn /></a>
              <a href="https://x.com/HBudgetParking" target='_blank'><FaTwitter /></a>
              <a href="https://www.instagram.com/hbudgetparking/" target='_blank'><PiInstagramLogoFill /></a>
              <a href="https://www.facebook.com/budgetparking/" target='_blank'><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
