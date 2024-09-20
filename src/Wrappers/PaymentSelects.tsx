"use client";
import React, { useState } from "react";

const PaymentSelects: React.FC = () => {
  const [isCardSelected, setIsCardSelected] = useState<boolean>(false);

  const handleRadioChange = (): void => {
    setIsCardSelected(!isCardSelected);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6" style={{ marginTop: "6%" }}>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="pay-by-card"
            name="payment-method"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
            onChange={handleRadioChange}
            checked={isCardSelected}
          />
          <label htmlFor="pay-by-card" className="ml-2">
            Pay By Card
          </label>
        </div>
        {isCardSelected && (
          <>
            <div className="mb-4">
              <label htmlFor="card-holder-name" className="block text-gray-700 font-bold mb-2">
                Card Holder Name
              </label>
              <input
                type="text"
                id="card-holder-name"
                className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="card-name" className="block text-gray-700 font-bold mb-2">
                Card Name
              </label>
              <input
                type="text"
                id="card-name"
                className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
                placeholder="1234 1234 1234"
              />
            </div>
            <div className="flex mb-4">
              <div className="flex-1 mr-2">
                <label htmlFor="expiry-date" className="block text-gray-700 font-bold mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry-date"
                  className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cvc" className="block text-gray-700 font-bold mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
                />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="agree-to-terms"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded mb-3"
              />
              <label htmlFor="agree-to-terms" className="ml-2 mt-4">
                By Continuing, You Agree To Compare The Parking{" "}
                <a href="#" className="text-blue-500">
                  Terms And Conditions
                </a>
              </label>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PaymentSelects;
