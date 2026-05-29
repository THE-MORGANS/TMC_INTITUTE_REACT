import AboutContent from '@/components/about/AboutContent';
import ContactSection from '@/components/contact/ContactSection';
import OnlineCoursesSection from '@/components/contact/OnlineCoursesSection';
import BannerSection from '@/components/home/BannerSection';
import Footer from '@/Layouts/Footer';
import NavBar from '@/Layouts/Navbar';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from "react";

export default function AboutUs() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return ( 
        <>
            <Head title="Contact" />
            <NavBar scrolled={scrolled} />
            <BannerSection 
            title = "Empowering your global education journey"
            subtitle = "We are dedicated to guiding students toward the best international study opportunities through expert advice and personalized support. From course selection to admissions and relocation, we simplify every step of the process. With strong partnerships and a commitment to excellence, we help students achieve their academic goals and build successful futures worldwide."
            />
            <AboutContent/>
            <Footer/>
        </>
    );
}