import React from 'react';
import BlogCard from '../shared/BlogCard';

const BlogSection = () => {
    const cardData = [
        {
            title: "Birmingham airport",
            description: "Convenient and secure parking options at Birmingham Airport and Convenient",
            imageUrl: "/birmingham-airport.webp",
        },
        {
            title: "Bristol airport",
            description: "Affordable and reliable parking at Bristol Airport.",
            imageUrl: "/bristol.webp",
        },
        {
            title: "East midlands airports",
            description: "Find the best parking deals at East Midlands Airport.",
            imageUrl: "/east-midlands-airport.webp",
        },
        {
            title: "Edinburgh Airport",
            description: "Park with ease at Edinburgh Airport with our various options.",
            imageUrl: "/edinburgh-airport.webp",
        },
        {
            title: "Gatewick airport",
            description: "Secure your spot at Gatwick Airport with our parking services.",
            imageUrl: "/gatwick-parking.webp",
        },
        {
            title: "Glasgow airport",
            description: "Stress-free parking solutions at Glasgow Airport.",
            imageUrl: "/glasgow.webp",
        },
        {
            title: "Heathrow airport",
            description: "Premium parking options at London Heathrow Airport.",
            imageUrl: "/london-heathrow.webp",
        },
        {
            title: "Liverpool airport",
            description: "Safe and affordable parking at Liverpool Airport.",
            imageUrl: "/liverpool-airport.webp",
        },
        {
            title: "Luton airport",
            description: "Easy and convenient parking at London Luton Airport.",
            imageUrl: "/london-luton.webp",
        },
        {
            title: "Manchester Airport",
            description: "Park with confidence at Manchester Airport.",
            imageUrl: "/manchester.webp",
        },
        {
            title: "Southend airport",
            description: "Reliable parking solutions at London Southend Airport.",
            imageUrl: "/london-southend-airport.webp",
        },
        {
            title: "Stansted airport",
            description: "Affordable and secure parking at London Stansted Airport.",
            imageUrl: "/london-stansted.webp",
        },
    ];

    return (
        <div className='sm:container w-full mt-[80px]'>
            <div className='mx-auto w-[90%] space-y-[6px]'>
                <h2 className='uppercase text-[60px] font-bold text-center mt-[-200px]'>Where to Find Us</h2>
                <p className='text-center text-[16px] font-normal'>Select your Heathrow terminal, compare parking options, prices, and services across a range of budget-friendly car parks. Don't see the service you need? We're constantly expanding, and new parking options will be available soon to meet your needs. Stay tuned for more additions!</p>
            </div>
            
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4'>
                {cardData.map((item, index) => (
                    <BlogCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export default BlogSection;
