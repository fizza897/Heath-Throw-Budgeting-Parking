import AirportForm from '@/components/forms/AirportForm'
import PageLayout from '@/components/layouts/Services'
import BlogSection from '@/components/widgets/BlogSection'
import ServiceSection from '@/components/widgets/ServiceSection'
import TestimonialSection from '@/components/widgets/TestimonialSection'
import Quote from "@/app/quote/page"
import React from 'react'
import HeroParkRide from '@/components/widgets/HeroParkRide'
import OnsiteParking from '@/Wrappers/OnsiteParking'
import HeroOnsiteParking from '@/components/widgets/HeroOnsiteParking'

const page = () => {
  return (
    <>
   <PageLayout>
  <HeroOnsiteParking/>
  <div className='mt-32'>
    <AirportForm/>
  </div>
    <div className='mt-7'>
    <ServiceSection/> 
    </div>
    <OnsiteParking/>
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