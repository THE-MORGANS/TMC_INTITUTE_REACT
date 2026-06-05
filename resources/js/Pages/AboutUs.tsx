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
import CorePillarsSection from '@/components/home/CorePillarsSection';
import EcosystemSection from '@/components/home/EcosystemSection';
import { ContactUsSection } from '@/components/about/ContactUsSection';

export default function AboutUs() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return ( 
        <>
            <Head title="About us" />
            <NavBar scrolled={scrolled} />
            <BannerSection 
            title = "Empowering your global education journey"
            subtitle = "We are dedicated to guiding students toward the best international study opportunities through expert advice and personalized support. From course selection to admissions and relocation, we simplify every step of the process. With strong partnerships and a commitment to excellence, we help students achieve their academic goals and build successful futures worldwide."
            />
            <AboutContent/>
            <WhoWeAreSection />
            <WhatWeDoSection />
            <CorePillarsSection />
            <EcosystemSection />
            <ContactUsSection/>
            <OnlineCoursesSection/>
            <Footer/> 
        </>
    );
}