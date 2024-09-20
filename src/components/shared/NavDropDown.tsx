import React from "react";
// import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

// Define the types for the data prop
interface NavItem {
  icon?: React.ReactNode;
  name: string;
}

interface NavDropDownProps {
  data: {
    title: string;
    path?: string;
    runs?: NavItem[];
  };
}

const NavDropDown: React.FC<NavDropDownProps> = ({ data }) => {
  return (
    <div className="relative group z-10">
      <div className="flex items-center justify-between w-full cursor-pointer">
        <span>{data?.title || "Data not Available"}</span>
        {/* <IoIosArrowDown /> */}
      </div>
      <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 w-56">
        {data?.runs?.map((item, index) => (
          <Link key={index} href={data?.path || ""} passHref>
            <div className="p-2 hover:bg-black hover:text-white">
              <span className="flex gap-2 items-center">
                {item?.icon}
                {item?.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropDown;
