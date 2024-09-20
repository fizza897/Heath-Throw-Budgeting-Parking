import AirportForm from '@/components/forms/AirportForm'
import PageLayout from '@/components/layouts/Services'
import ServiceSection from '@/components/widgets/ServiceSection'
import AirportAndParking from '@/Wrappers/AirportAndParking'
import AirportParking from '@/Wrappers/AirportParking'
import ServicesWrapper from '@/Wrappers/ServicesWrapper'
import TestimonialSection from '@/components/widgets/TestimonialSection'
import Quote from "@/app/quote/page"
import BlogSection from '@/components/widgets/BlogSection'
import React from 'react'

const page = () => {
  return (
    <PageLayout>
      <AirportAndParking/>
      <div className='mt-36'>
      <AirportForm/>
      </div>
      <div className='mt-7'>
      <ServiceSection/>
      </div>
    <AirportParking/>
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