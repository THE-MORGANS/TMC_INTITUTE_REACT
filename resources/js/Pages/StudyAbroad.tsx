import AboutContent from '@/components/about/AboutContent';
import ContactSection from '@/components/contact/ContactSection';
import OnlineCoursesSection from '@/components/contact/OnlineCoursesSection';
import Footer from '@/Layouts/Footer';
import NavBar from '@/Layouts/Navbar';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from "react";
import { ContactUsSection } from '@/components/about/ContactUsSection';
import BannerSectionTwo from '@/components/home/BannerSectionTwo';
import PartnerLogosSection from '@/components/studyAboard/PartnerLogosSection';
import StudyAbroadServicesSection from '@/components/studyAboard/StudyAbroadServicesSection';
import ServicesSection from '@/components/studyAboard/ServicesSection';
import FAQSection from '@/components/studyAboard/FAQSection';

export default function StudyAbroad() {
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
            <BannerSectionTwo/>
            <PartnerLogosSection />
            <StudyAbroadServicesSection />
            <ServicesSection />
            <FAQSection />
           
            <ContactUsSection/>
            <OnlineCoursesSection/>
            <Footer/> 
        </>
    );
}