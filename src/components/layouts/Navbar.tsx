"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavDropDown from "../shared/NavDropDown";
import { Button } from "../ui/button";
import { BsFillAirplaneFill, BsTrainFrontFill } from "react-icons/bs";
import { RiShip2Fill } from "react-icons/ri";
import { FaBookOpen, FaUniversity, FaCar, FaRoad } from "react-icons/fa";
import { CgRing } from "react-icons/cg";
import { GiCrossMark } from "react-icons/gi";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    airportRuns: {
      title: "Airport",
      runs: [
        { name: "Gatwick Airport", icon: <BsFillAirplaneFill /> },
        { name: "Heathrow Airport", icon: <BsFillAirplaneFill /> },
        { name: "Birmingham Airport", icon: <BsFillAirplaneFill /> },
        { name: "Manchester Airport", icon: <BsFillAirplaneFill /> },
        { name: "Stansted Airport", icon: <BsFillAirplaneFill /> },
        { name: "Luton Airport", icon: <BsFillAirplaneFill /> },
        { name: "Bristol Airport", icon: <BsFillAirplaneFill /> },
        { name: "Edinburgh Airport", icon: <BsFillAirplaneFill /> },
        { name: "Glasgow Airport", icon: <BsFillAirplaneFill /> },
        { name: "London City Airport", icon: <BsFillAirplaneFill /> },
      ],
    },
  };


  const data_1 = {
    airportRuns: {
      title: "Services",
      runs: [
        { name: "Gatwick Airport", icon: <BsFillAirplaneFill /> },
        { name: "Heathrow Airport", icon: <BsFillAirplaneFill /> },
        { name: "Birmingham Airport", icon: <BsFillAirplaneFill /> },
        { name: "Manchester Airport", icon: <BsFillAirplaneFill /> },
        { name: "Stansted Airport", icon: <BsFillAirplaneFill /> },
        { name: "Luton Airport", icon: <BsFillAirplaneFill /> },
        { name: "Bristol Airport", icon: <BsFillAirplaneFill /> },
        { name: "Edinburgh Airport", icon: <BsFillAirplaneFill /> },
        { name: "Glasgow Airport", icon: <BsFillAirplaneFill /> },
        { name: "London City Airport", icon: <BsFillAirplaneFill /> },
      ],
    },
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 ml-[20px]">
          {/* Logo */}
          <div>
            <Image
              src={"/Logo_Design-02.svg"}
              alt="Logo"
              width={150}
              height={100}
              className="w-[200px]"
            />
          </div>

          {/* Mobile Navigation (Hamburger Menu) */}
          <div className="lg:hidden">
            <div
              className="bg-primary p-2 flex rounded-md flex-col gap-1"
              onClick={toggleMenu}
            >
              <div
                className={`flex rounded-md flex-col gap-1 ${
                  isOpen ? "hidden" : ""
                }`}
              >
                <div className="w-7 h-1 rounded-md bg-white"></div>
                <div className="w-6 h-1 rounded-md bg-white"></div>
                <div className="w-5 h-1 rounded-md bg-white"></div>
              </div>
              <GiCrossMark
                className={`text-2xl text-white ${!isOpen ? "hidden" : ""}`}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block ">
            <ul className="flex items-center gap-7">
              <li className="text-gray-800 hover:text-primary transition duration-300">
                <Link href={"/"}> Home</Link>
              </li>
              <li className="relative text-gray-800 hover:text-black transition duration-300">
                <NavDropDown data={data.airportRuns} />
              </li>
              <li className="relative text-gray-800 hover:text-black transition duration-300">
                <NavDropDown data={data_1.airportRuns} />
              </li>
              <li className="text-gray-800 hover:text-primary transition duration-300">
                <Link href={"/blog"}> Blog</Link>
              </li>
              <li className="text-gray-800 hover:text-primary transition duration-300">
                <Link href={"/about"}> About Us</Link>
              </li>
              <li className="text-gray-800 hover:text-primary transition duration-300">
                <Link href={"/contact"}> Contact Us</Link>
              </li>
              <li>
                <Button className="bg-primary text-white flex">
                  <div className="flex items-center gap-1">
                    <IoPerson />
                    <span>LOGIN</span>
                  </div>
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="bg-white shadow-md mt-2 py-3 rounded-md">
              <ul className="flex flex-col items-center space-y-3">
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/"}> Home</Link>
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/about"}> Airport</Link>
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/about"}> Services</Link>
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/about"}> Blog</Link>
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/contact"}> About Us</Link>
                </li>
                <li className="text-gray-800 hover:text-primary transition duration-300">
                  <Link href={"/contact"}> Contact Us</Link>
                </li>
                <li>
                  <Button className="bg-primary text-white">
                    <div className="flex items-center gap-1">
                      <IoPerson />
                      <span>LOGIN</span>
                    </div>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
