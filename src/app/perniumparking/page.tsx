import AirportForm from '@/components/forms/AirportForm'
import PageLayout from '@/components/layouts/Services'
import BlogSection from '@/components/widgets/BlogSection'
import ServiceSection from '@/components/widgets/ServiceSection'
import TestimonialSection from '@/components/widgets/TestimonialSection'
import ParkRide from '@/Wrappers/ParkRide'
import Quote from "@/app/quote/page"
import React from 'react'
import HeroParkRide from '@/components/widgets/HeroParkRide'
import HeroPerniumParking from '@/components/widgets/HeroPerniumParking'
import PremiumAndValetParking from '@/components/widgets/PremiumAndValetParking'

const page = () => {
  return (
    <>
   <PageLayout>
  <HeroPerniumParking/>
  <div className='mt-32'>
    <AirportForm/>
  </div>
    <div className='mt-7'>
    <ServiceSection/> 
    </div>
    <PremiumAndValetParking/>
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