import Image from 'next/image';
import officeImage from '../public/office.png'; // apni image ko yahan import karen


const AboutUs = () => {
  return (
    <div className='sm:container'>
    <div className="container flex justify-center items-center">
      <div className="bg-white rounded-xl flex flex-col lg:flex-row w-full">
      <div className="relative w-[43%] h-[85vh] ml-[50px]"> {/* Height set to 50% of the viewport height */}
      {/* <Image 
            src={officeImage} 
            layout="fill" 
            objectFit="cover" 
            className='rounded-xl' 
            alt="Office" 
          /> */}
          <Image src={"/office.png"} layout='fill' className='rounded-xl w-[30px]' objectFit="cover" alt="Office" />

        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 sm:p-8 space-y-6 ml-[25px]"> {/* Added space-y-6 for more spacing */}
            <h1 className="text-xl sm:text-2xl md:text-[60px] font-bold mt-[-20px] mb-6">About Us</h1> {/* Added margin-bottom for spacing */}
            <div className='space-y-4'> {/* Added space-y-4 for spacing between subheading and paragraphs */}
              <div className='mb-4'> {/* Added margin-bottom for spacing between the first subheading and paragraph */}
                <h1 className="text-lg sm:text-xl md:text-[20px] font-bold mb-2">Reliable & Secure Parking Solutions</h1>
                <p className="text-gray-700 text-sm md:text-[16px]"> {/* Removed unnecessary mb-2 */}
                  At Budget Parking Heathrow, we prioritize your peace of mind with secure and convenient parking options. Our facilities are equipped with 24/7 CCTV, secure fencing, and regular patrols, ensuring your vehicle is safe while you travel.
                </p>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-[20px] font-bold mb-2">Affordable & Customer-Focused Services</h1>
                <p className="text-gray-700 text-sm md:text-[16px]">
                  We believe in providing budget-friendly parking without sacrificing quality. With options like Park and Ride and Meet and Greet, we cater to various needs and budgets, all backed by exceptional customer service to make your experience seamless from start to finish.
                </p>
              </div>
            </div>
            <button className="bg-primary w-fit mt-6 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md h-[50px]"> {/* Changed to rounded-full */}
              Our Parking Options
            </button> {/* Increased margin-top for spacing */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;