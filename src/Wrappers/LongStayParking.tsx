import React from 'react'
import List from "@/app/Images/list.png"; 
import Parking from "@/app/Images/parking.png";
import Shield from "@/app/Images/shield.png";
import Panels from "@/app/Images/panels.png"
import Image from "next/image";
const LongStayParking = () => {
  return (
    <>
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section 1 */}
        <div className="space-y-4">
          <div className="flex justify-start ml-[-360px] items-center"> {/* Align items vertically */}
            <div className="w-10 mr-10 mb-40 flex-shrink-0">
              <Image src={List} alt="plane" width={40} height={40} /> {/* Added width and height for consistent image size */}
            </div>
            <p className="text-lg text-gray-800 leading-relaxed">
            <span className='text-black font-bold'>Reliable Heathrow car parks:</span> We offer a simple booking service for any airport parking service. Simply choose your airport and terminal and choose your dates and times. You will then be able to see all the available options and prices. Our exclusive online deals are available to book immediately through our website. Prices may change and the same deal may not be available next time you search. Once you enter your details on our site, we send your details to your chosen Heathrow airport parking partner. They will then email you a confirmation with all the car park details and instructions. If you don't receive the email confirmation, please get in touch with our customer service centre. We also offer free cancellation or booking changes within 24 hours of booking. So don't worry if you made a mistake, we can fix it.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <div className="flex justify-start ml-[-360px] items-center">
            <div className="w-10 mr-10 mb-40 flex-shrink-0">
              <Image src={Parking} alt="mask" width={40} height={40} />
            </div>
            <p className="text-lg text-gray-800 leading-relaxed">
            <span className='text-black font-bold'>Secure payments:</span> When you book with Parkos, you can opt to pay online when you book, or directly to the car park according to their terms. Different Heathrow airport parking providers offer different payment options and you should check before booking that you are happy with the payment options. For online payments we accept most major credit cards and PayPal payments. We use a secure payment provider and none of your payment details are available to or held by Parkos. You can also download a copy of your invoice from the Parkos website. If you choose to pay onsite at the car park, the Heathrow airport parking provider will take your payment. Depending on their procedures, you may pay on arrival at the car park or when you return to collect your car from the airport car park. If you experience any problems please contact our customer service centre.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <div className="flex justify-start ml-[-360px] items-center">
            <div className="w-10 mr-10 mb-40 flex-shrink-0">
              <Image src={Shield} alt="thumbs up" width={40} height={40} />
            </div>
            <p className="text-lg text-gray-800 leading-relaxed">
            <span className='text-black font-bold'>Reviews:</span> Feel free to check out the reviews on our website. We encourage all our customers to leave a review in order to monitor customer satisfaction. We keep track of our reviews and try to address any issues that arise from them. If you have special requirements please check the individual parking provider page for details of their services. Most Heathrow parking providers offer reserved parking spaces for those with mobility issues, but some may not. If, after reading the provider page, you still have questions, please contact the customer service centre, who will try to provide answers. Our service enables you to choose from a range of parking options to suit your situation. We combine convenience, service and price to give you the best airport parking deal. Try to check which parking at Heathrow airport services are provided by your chosen Heathrow parking provider before you book.
            </p>
          </div>
        </div>
        {/* Section 4 */}
        <div className="space-y-4">
          <div className="flex justify-start ml-[-360px] items-center">
            <div className="w-10 mr-10 mb-40 flex-shrink-0">
              <Image src={Panels} alt="thumbs up" width={40} height={40} />
            </div>
            <p className="text-lg text-gray-800 leading-relaxed">
            <span className='text-black font-bold'>Customer service:</span> Here at Parkos, we want you to find the best car parking for you based on your individual needs. That's why we provide detailed information on all our parking providers. Whether you choose a budget Heathrow airport parking Park and Ride or Meet and Greet service, we want you to have the best experience from start to finish. We hope that our simple and transparent booking system, flexible payment options and excellent value will keep customers coming back. Choosing holiday parking shouldn't be a chore. We try to keep things simple, so that you can enjoy planning the rest of your trip. With a good selection of partners offering safe and secure parking, we hope to keep our customers happy. When you've booked through our website and used the services of our parking partners, please leave a review. We are always trying to improve the offers on the website.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default LongStayParking