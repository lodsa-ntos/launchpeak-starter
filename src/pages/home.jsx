import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CompanyLogo from '../components/CompanyLogo';
import PurposeSection from '../components/PurposeSection';
import FeatureSection from '../components/FeatureSection';
import ExempleSection from '../components/ExempleSection';
import PriceSection from '../components/PriceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import './../index.css'

function Home() {
    return (
        <main className='relative min-h-screen overflow-x-hidden'>
            <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-[#3d55cc]/20 to-[#3d55cc]/20 rounded-full blur-[80px] -z-10'></div>

            <div className='overflow-hidden'>
                <Navbar />
                <HeroSection />
                <CompanyLogo />
                <PurposeSection />
                <FeatureSection />
                <ExempleSection />
                <PriceSection />
                <ContactSection />
                <Footer />

            </div>
        </main>
    )
}

export default Home;