import { useState } from "react";
import heroBgImage from '@/assets/images/banner_img.jpg';
import heroImage from '@/assets/images/hero-img2.png';

type BannerSectionProps = {
  title?: string;
  subtitle?: string;
};

export function BannerSection({ title, subtitle }: BannerSectionProps) {

  return (
    <section
      className="relative flex min-h-[70vh] w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBgImage})`, 
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
   
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-40 pb-20 text-center">
        <p className="text-center text-[50px] font-extrabold leading-[100%] tracking-normal text-white">
          {title ?? "We're here to guide you every step of the way"}
        </p>
        <p className="mx-auto max-w-4xl py-3 text-center font-['Inter'] text-base font-normal leading-relaxed tracking-[0.01em] text-white">
          {subtitle ?? "Have questions or need assistance? Reach out to our team for expert support on admissions, course selection, and study abroad opportunities. We're committed to providing timely, reliable, and personalized guidance to help you make the best decisions for your academic journey."}
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href={route('login')} className="btn-primary" style={{ fontSize: 15, padding: "14px 34px", borderRadius:"50px" }}>Apply Now</a>
          <a href={route('contact')} className="btn-outline" style={{ fontSize: 15, padding: "14px 34px", borderRadius:"50px" }}>Partner With Us</a>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;