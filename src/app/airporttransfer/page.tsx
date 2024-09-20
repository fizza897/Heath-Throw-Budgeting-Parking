import AirportForm from '@/components/forms/AirportForm'
import PageLayout from '@/components/layouts/Services'
import ServiceSection from '@/components/widgets/ServiceSection'
import TestimonialSection from '@/components/widgets/TestimonialSection'
import AirportTransfer from '@/Wrappers/AirportTransfer'
import Quote from "@/app/quote/page"
import React from 'react'
import BlogSection from '@/components/widgets/BlogSection'
import HeroAirportTransfer from '@/components/widgets/HeroAirportTransfer'

const page = () => {
  return (
    <PageLayout>
  <HeroAirportTransfer/>
  <div className='mt-32'>
    <AirportForm/>
  </div>
    <div className='mt-7'>
    <ServiceSection/> 
    </div>
    <AirportTransfer/>
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
  )
}

export default page