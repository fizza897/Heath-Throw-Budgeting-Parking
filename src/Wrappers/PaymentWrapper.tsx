"use client";
import React, { useEffect, useState } from "react";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaPoundSign } from "react-icons/fa"
import { IoCarSportOutline } from "react-icons/io5";
import { CiCalendar, CiClock1, CiLocationOn } from "react-icons/ci";
import PaymentSelects from "./PaymentSelects";

// ContactDetails Component
const ContactDetails = ({ formData, setFormData }: any) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [people, setPeople] = useState(0);

  const handleIncrement = () => {
    setPeople(people + 1); 
  };

  const handleDecrement = () => {
    setPeople(people - 1); 
  };
  const router = useRouter();
  return (
    <>
      <h1 className="text-4xl text-center font-semibold">
        Parking <span className="text-[#85BB65] font-semibold">Booking</span>{" "}
        Form
      </h1>
      <div className="p-4 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg">
        <h2 className="text-lg sm:text-xl  mb-4 md:text-[32px] font-bold">
          Contact Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
              Title*
            </label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
            >
              <option value="">Select a Title</option>
              <option value="mr">Mr.</option>
              <option value="ms">Ms.</option>
              <option value="mrs">Mrs.</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 bg-[#ECE8E8] rounded-lg w-full border-gray-500 border-opacity-50"
            />
            <label>Only letters, spaces, and hyphens</label>
          </div>
          <div>
            <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
              Last Name*
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
            <label>Only letters, spaces, and hyphens</label>
          </div>
          <div>
            <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
            <label>Only valid email addresses</label>
          </div>
          <div>
            <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
              Contact Number*
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
          </div>
          <div className="relative ">
            <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
              People*
            </label>
            <div className="relative">
              <input
                type="text"
                value={people}
                readOnly
                className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
              />
              <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center pr-2">
                <button
                  className="text-gray-600 hover:text-black"
                  onClick={handleIncrement}
                >
                  <FaChevronUp />
                </button>
                <button
                  className="text-gray-600 hover:text-black"
                  onClick={handleDecrement}
                >
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
              Address*
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
            <label>
              Only letters, numbers, spaces, commas, periods, and hyphens
            </label>
          </div>
          <div>
            <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
              Post Code*
            </label>
            <input
              type="text"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
            />
            <label>
              Only letters, numbers, spaces, and hyphens (3 to 10 characters)
            </label>
          </div>
          <p>
            You will recive booking confirmation, parking procedure and car park
            details on above entered email address.
          </p>

          <div className="col-span-1 sm:col-span-2">
            <label className="block mb-2 text-sm sm:text-lg md:text-[32px] font-bold">
              Flight Details*
            </label>
            <div className="flex items-center mt-2 gap-2">
              <p className="capitalize font-bold text-xs sm:text-sm">
                Do you have flight details
              </p>
              <input
                type="radio"
                name="flightDetailsConfirmation"
                value="yes"
                onChange={handleChange}
                className="mr-2"
              />
              <label className="mr-4 text-xs sm:text-sm">Yes</label>
              <input
                type="radio"
                name="flightDetailsConfirmation"
                value="no"
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-xs sm:text-sm">No</label>
            </div>
            {formData?.flightDetailsConfirmation == "yes" ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
                      Departure Terminal*
                    </label>
                    <select
                      name="departureTerminal"
                      className="border bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
                      onChange={handleChange}
                    >
                      <option>Select</option>
                      <option value="terminal2">Terminal 2</option>
                      <option value="terminal3">Terminal 3</option>
                      <option value="terminal4">Terminal 4</option>
                      <option value="terminal5">Terminal 5</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
                      Departure Flight No*
                    </label>
                    <input
                      type="text"
                      name="departureFlightNumber"
                      value={formData.departureFlightNumber}
                      onChange={handleChange}
                      className="border bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
                    />
                    <label>Only Letters followed by numbers</label>
                  </div>

                  <div className="flex flex-col">
                    <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
                      Arrival Terminal*
                    </label>
                    <select
                      name="arrivalTerminal"
                      className="border bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
                      onChange={handleChange}
                    >
                      <option>Select</option>
                      <option value="terminal2">Terminal 2</option>
                      <option value="terminal3">Terminal 3</option>
                      <option value="terminal4">Terminal 4</option>
                      <option value="terminal5">Terminal 5</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">
                      Arrival Flight No*
                    </label>
                    <input
                      type="text"
                      name="arrivalFlightNo"
                      value={formData.arrivalFlightNo}
                      onChange={handleChange}
                      className="border bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
                    />
                    <label>Only Letters followed by numbers</label>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

// VehicleDetails Component

// PaymentDetails Component
const PaymentDetails = ({ formData, setFormData }: any) => {
  const router = useRouter();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const addSmsService = (e: any) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        smsService: true,
        price: JSON.stringify(+parseFloat(formData.price).toFixed(2) + 0.9),
      });
    } else {
      setFormData({
        ...formData,
        smsService: false,
        price: JSON.stringify(+parseFloat(formData.price).toFixed(2) - 0.9),
      });
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
          <div className="bg-white rounded-lg shadow-md p-6">
  <input
    type="checkbox"
    id="sms-service"
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
  />
  <label htmlFor="sms-service" className="ml-2 mb-2">
    Add SMS Service £0.99
  </label>
  <p className="mt-4">
    You Will Receive Your Parking Booking Confirmation, To Your Mobile For Fast And Easy Check In.
  </p>
</div>
           <div>
            <PaymentSelects/>
           </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
           <h2
  className="text-2xl text-center bg-[#85BB65]  hover:bg-green-500 text-white font-bold py-2 px-4 rounded mb-4 cursor-pointer hover:bg-green-600"
>
  Booking Details
</h2>
            <div className="flex items-center mb-4">
            <CiLocationOn />
              <span className="ml-2">Traveling From:</span>
              <span className="ml-auto">Gatwick Airport</span>
            </div>
            <div className="flex items-center mb-4">
            <CiCalendar />
              <span className="ml-2">Departure Date:</span>
              <span className="ml-auto">Wed, 14 Aug 2024</span>
            </div>
            <div className="flex items-center mb-4">
            <CiClock1 />
              
              <span className="ml-2">Drop-Off Time:</span>
              <span className="ml-auto">12:00</span>
            </div>
            <div className="flex items-center mb-4">
            <CiCalendar />
              <span className="ml-2">Return Date, Time:</span>
              <span className="ml-auto">Thu, 19 Sep 2024, 12:00</span>
            </div>
            <div className="flex items-center mb-4">
            <IoCarSportOutline />
              <span className="ml-2">Quote Type:</span>
              <span className="ml-auto">240.98</span>
            </div>
            <div className="flex items-center mb-4">
            <FaPoundSign />
              <span className="ml-2">Booking Fee:</span>
              <span className="ml-auto">1.95</span>
            </div>
            <div className="mt-16">
            <h2
  className="text-2xl text-center  bg-[#85BB65] text-white font-bold py-2 px-4 rounded  cursor-pointer hover:bg-green-600"
>
  Total Price
</h2>
  </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Main Page Component
const PaymentWrapper = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    people: "",
    flightDetailsConfirmation: "",
    vehicles: [{ make: "", model: "", color: "", regNo: "" }],
    paymentOption1: false,
    paymentOption2: false,
  });

  useEffect(() => {
    const localStorageData: any | null = (() => {
      const data = localStorage.getItem("userdata");
      return data ? JSON.parse(data) : null;
    })();

    setFormData((prevData) => ({
      ...prevData,
      ...localStorageData,
    }));
  }, []);

  const handleVehicleChange = (e: any, index: number) => {
    const { name, value } = e.target;
    const newVehicles: any = [...formData.vehicles];
    newVehicles[index][name] = value;
    setFormData({ ...formData, vehicles: newVehicles });
  };

  const VehicleDetails = ({ vehicle, index, handleVehicleChange }: any) => {
    const addVehicle = () => {
      setFormData({
        ...formData,
        vehicles: [
          ...formData.vehicles,
          { make: "", model: "", color: "", regNo: "" },
        ],
      });
    };
    const removeVehicle = (index: number) => {
      const newVehicles = formData.vehicles.filter((_, i) => i !== index);
      setFormData({ ...formData, vehicles: newVehicles });
    };

    return (
      <div className="p-4 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base sm:text-xl md:text-[32px] font-bold">
            Vehicle Details {index + 1}
          </h2>
          <div className="sm:flex gap-2">
            <button
              onClick={addVehicle}
              className="bg-primary flex items-center text-xs sm:text-base gap-2 text-white py-2 px-3 rounded-lg"
            >
              <FaPlusCircle />
              Add Extra Car
            </button>
            {index > 0 && (
              <button
                onClick={() => removeVehicle(index)}
                className="bg-red-500 flex w-full mt-2 sm:mt-0 sm:w-fit items-center text-xs sm:text-base gap-2 text-white py-2 px-3 rounded-lg"
              >
                <FaTrashAlt />
                Remove
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 md:text-[20px] font-bold">Make*</label>
            <input
              type="text"
              name="make"
              value={vehicle.make}
              placeholder={"TBC"}
              onChange={(e) => handleVehicleChange(e, index)}
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
            />
            <label>Only letters, numbers, spaces, and hyphens</label>
          </div>
          <div>
            <label className="block mb-2 md:text-[20px] font-bold">
              Model*
            </label>
            <input
              type="text"
              name="model"
              value={vehicle.model}
              placeholder={"TBC"}
              onChange={(e) => handleVehicleChange(e, index)}
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
            />
          </div>
          <div>
            <label className="block mb-2 md:text-[20px] font-bold">
              Color*
            </label>
            <input
              type="text"
              name="color"
              value={vehicle.color}
              placeholder={"TBC"}
              onChange={(e) => handleVehicleChange(e, index)}
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
            />
          </div>
          <div>
            <label className="block mb-2 md:text-[20px] font-bold">
              Reg No*
            </label>
            <input
              type="text"
              name="regNo"
              value={vehicle.regNo}
              placeholder={"TBC"}
              onChange={(e) => handleVehicleChange(e, index)}
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sm:container p-2 sm:p-10 flex flex-col gap-4">
      <ContactDetails
        key="step1"
        formData={formData}
        setFormData={setFormData}
      />
      {formData.vehicles.map((vehicle, index) => (
        <VehicleDetails
          key={index}
          vehicle={vehicle}
          index={index}
          handleVehicleChange={handleVehicleChange}
        />
      ))}

      <PaymentDetails
        key="step3"
        formData={formData}
        setFormData={setFormData}
      />
      {/* <Confirmation key="step4" formData={formData} /> */}
    </div>
  );
};

export default PaymentWrapper;
