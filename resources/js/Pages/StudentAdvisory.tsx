import AboutContent from '@/components/about/AboutContent';
import ContactSection from '@/components/contact/ContactSection';
import OnlineCoursesSection from '@/components/contact/OnlineCoursesSection';
import BannerSection from '@/components/home/BannerSection';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import Footer from '@/Layouts/Footer';
import NavBar from '@/Layouts/Navbar';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from "react";
import EcosystemSection from '@/components/home/EcosystemSection';
import { ContactUsSection } from '@/components/about/ContactUsSection';
import StudentAdvisoryContent from '@/components/studentAdvisory/studentAdvisoryContent';
import RecruitmentSection from '@/components/studentAdvisory/RecruitmentSection';
import RecruitmentCapability from '@/components/studentAdvisory/Recruitmentcapability';
import OurMarkets from '@/components/studentAdvisory/OurMarkets';
import PartnershipModel from '@/components/studentAdvisory/PartnershipModel';
import GDPRPolicy from '@/components/studentAdvisory/GDPRPolicy';

export default function StudentAdvisory() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return ( 
        <>
            <Head title="Student Advisory" />
            <NavBar scrolled={scrolled} />
            <BannerSection 
            title = "Your step-by-step guide to studying abroad"
            subtitle = "Our student advisory process is designed to make your journey simple and stress-free. We begin with a personalized consultation to understand your goals, followed by tailored course and university recommendations. From application support to visa guidance and pre-departure planning, we support you at every stage, ensuring a smooth and successful transition to your chosen destination."
            />
            <StudentAdvisoryContent/>
            <RecruitmentSection />
            <RecruitmentCapability/>
            <OurMarkets />
            <PartnershipModel/>
            <GDPRPolicy  />
            <ContactUsSection/>
            <OnlineCoursesSection/>
            <Footer/> 
        </>
    );
}