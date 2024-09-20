import React from 'react';
import PageLayout from "@/components/layouts/Terminal";
import Terminal from '@/components/widgets/Terminal';
import Hero from '@/components/widgets/Hero';
import AirportForm from '@/components/forms/AirportForm';
import ContactForm from '@/components/forms/ContactForm';
import TerminalSection from "@/components/widgets/TestimonialSection"
import FAQ from '@/components/widgets/FAQ';
import ContactSection from '@/components/widgets/ContactSection';
import BlogSection from '@/components/widgets/BlogSection';
import HeroAirportParking from '@/components/widgets/HeroAirportParking';


const TerminalPage: React.FC = () => {
  return (
    <PageLayout>
      <HeroAirportParking/>
        <Terminal/>
        <TerminalSection/>
        <BlogSection/>
        <ContactSection/>
    </PageLayout>
  );
};

export default TerminalPage;