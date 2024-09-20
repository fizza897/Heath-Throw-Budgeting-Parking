import React from 'react'
import ServicesWrapper from '@/Wrappers/ServicesWrapper'
import PageLayout from '@/components/layouts/Services'
import HeroAirportParking from '@/Wrappers/HeroAirportParking'
import MeetAndGreetParking from '@/Wrappers/MeetAndParking'
import AirportForm from '@/components/forms/AirportForm'
import ContactSection from '@/components/widgets/ContactSection'
import ServiceSection from '@/components/widgets/ServiceSection'
import TerminalSection from "@/components/widgets/TestimonialSection"
import SocialShare from '@/components/widgets/SocialShare'
import Quote from "@/app/quote/page"
import BlogSection from '@/components/widgets/BlogSection'
import BlogCard from '@/components/shared/BlogCard'
import TestimonialSection from '@/components/widgets/TestimonialSection'

const page = () => {
  return (
    <PageLayout>
    <MeetAndGreetParking/>
    <div className='mt-36'>
    <AirportForm/>
    </div>
    <div className='mt-7'>
    <ServiceSection/>
    </div>
  <HeroAirportParking/>
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