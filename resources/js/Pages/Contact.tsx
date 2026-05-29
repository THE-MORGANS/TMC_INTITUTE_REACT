import ContactSection from '@/components/contact/ContactSection';
import OnlineCoursesSection from '@/components/contact/OnlineCoursesSection';
import BannerSection from '@/components/home/BannerSection';
import Footer from '@/Layouts/Footer';
import NavBar from '@/Layouts/Navbar';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from "react";

export default function Contact() {
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
                title = "We’re here to guide you every step of the way"
                subtitle = "Have questions or need assistance? Reach out to our team for expert support on admissions, course selection, and study abroad opportunities. We’re committed to providing timely, reliable, and personalized guidance to help you make the best decisions for your academic journey."
            />
            <ContactSection/>
            <OnlineCoursesSection/>
            <Footer/>
        </>
    );
}