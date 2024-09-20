import Image from 'next/image'
import React from 'react'
import Services from "@/app/Images/Servies.png"

const AirportParking = () => {
  return (
    <>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 flex flex-col justify-between">
              <h2 className="text-[40px] font-bold">Airport Parking</h2>
              <p className="text-black mb-6">
                While you were comparing prices of parkings without any doubt you've read the term Meet and Greet parking. All major airports offer a Meet and Greet parking service: Heathrow, Gatwick and Manchester Airport to name a few of the airports. But how does Meet and Greet parking work and what are the pros and cons?
              </p>
              <h2 className="text-[35px] font-bold mb-4">What is Airport Parking</h2>
              <p className="text-black mb-6">
                The big difference between Meet and Greet parking and traditional parking is that when you use Meet and Greet parking, you don't have to park your car yourself. You drive to the departure terminal and hand over your car to a driver who will park your car for you. The big advantage of Meet and Greet parking is saving time, there is no need to catch the shuttle bus to the airport.
              </p>
              <div>
                <h2 className="text-[35px] font-bold mb-4">How does it work?</h2>
                <h3 className="font-bold text-black">Step 1. Make a reservation</h3>
                <p className="mt-3 text-black w-[210%]">
                  You make a reservation on the Parkos website where you can clearly see the costs for Meet and Greet parking. You will receive a confirmation email with clear instructions of the parking within a few minutes. In this email will be a description of the location where you will meet the driver and there will be a telephone number you will need to call prior to arriving.
                </p>
                <h3 className="font-bold text-black mt-5">Step 2. You drive to the departure terminal</h3>
                <p className="mt-3 text-black w-[210%]">
                  In contrast to Park and Ride parking, you will drive to the departure terminal. In your confirmation email you will find the clear description of the location where you will meet the driver to which you hand over your car.
                </p>
                <h3 className="font-bold text-black mt-5">Step 3. Hand over your car keys to the car park staff member</h3>
                <p className="mt-3 text-black w-[210%]">
                  At the agreed time, a driver will wait for you at the departure terminal. Together with you they will check your car for any damage, so there will be no surprises or misunderstandings afterwards. The staff member of the parking will take your car keys and drive your car to the parking while you continue your journey. The driver will drive your car to the car park and will park it for you.
                </p>
                <h3 className="font-bold text-black mt-5">Step 4. Getting your car returned after arriving back at the airport</h3>
                <p className="mt-3 text-black w-[210%]">
                  The moment you arrive back at the airport you will need to call the parking provider. As soon as they know your plane landed, a driver will drive your car to the agreed location at arrivals or departures and will meet you there. You will both check the car for any damages and you will be able to continue your trip home shortly after.
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-end">
              <Image src={Services} alt="Meet and Greet Parking" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className='py-6'>
        <div className="container px-4 gap-4 py-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 text-center">What are the pros and cons?</h1>
          <div className="flex flex-wrap gap-8 mr-[10%] justify-center">
            {/* Pros Card */}
            <div className="bg-[#85BB65] mr-20 rounded-lg shadow-md" style={{ width: '32%' }}>
              <div className="gradient-pros rounded-t-lg p-4" style={{ borderRadius: '30px 30px 0 0', background: 'linear-gradient(135deg, #85BB65, #3C552E)' }}>
                <h2 className="text-xl font-bold text-white text-center">Pros</h2>
              </div>
              <div className="bg-white p-6 rounded-b-lg">
                <ul className="list-disc ml-6 space-y-5">
                  {Array(5).fill("").map((_, index) => (
                    <li className="flex items-center" key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      You will drive to the departures terminal yourself.
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Cons Card */}
            <div className="bg-[#E53E3E] rounded-lg shadow-md" style={{ width: '32%' }}>
  <div className="gradient-cons rounded-t-lg p-4" style={{ borderRadius: '30px 30px 0 0', background: 'linear-gradient(135deg, #E53E3E, #B83232)' }}>
    <h2 className="text-xl font-bold text-white text-center">Cons</h2>
  </div>
  <div className="bg-white p-6 rounded-b-lg">
    <ul className="list-disc ml-6 space-y-5">
      {Array(5).fill("").map((_, index) => (
        <li className="flex items-center" key={index}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          You will drive to the departures terminal yourself.
        </li>
      ))}
    </ul>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  )
}

export default AirportParking
