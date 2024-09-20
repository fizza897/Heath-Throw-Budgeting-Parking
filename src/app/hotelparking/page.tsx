import AirportForm from '@/components/forms/AirportForm'
import PageLayout from '@/components/layouts/Services'
import BlogSection from '@/components/widgets/BlogSection'
import ServiceSection from '@/components/widgets/ServiceSection'
import TestimonialSection from '@/components/widgets/TestimonialSection'
import ParkRide from '@/Wrappers/ParkRide'
import Quote from "@/app/quote/page"
import React from 'react'
import HeroParkRide from '@/components/widgets/HeroParkRide'
import LongShortStay from '@/components/widgets/LongShortStay'
import HeroLongStay from '@/components/widgets/HeroLongStay'
import HeroHotelParking from '@/components/widgets/HeroHotelParking'
import HotelAndParking from '@/components/widgets/HotelAndParking'

const page = () => {
  return (
    <>
   <PageLayout>
  <HeroHotelParking/>
  <div className='mt-32'>
    <AirportForm/>
  </div>
    <div className='mt-7'>
    <ServiceSection/> 
    </div>
    <HotelAndParking/>
  <div className=''>
    </div>
    <div className='mt-6'>
    </div>
    <div className='mt-11'>
    <TestimonialSection/>
    </div>
    <Quote/>
    <BlogSection/>
    </PageLayout>
    
    </>
  )
}

export default page