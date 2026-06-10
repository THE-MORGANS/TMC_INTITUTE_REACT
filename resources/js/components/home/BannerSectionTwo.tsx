import { useState } from "react";
import heroBgImage from '@/assets/images/banner_img.jpg';
import heroImage from '@/assets/images/hero-img3.jpg';

type BannerSectionProps = {
  title?: string;
  subtitle?: string;
};

export function BannerSectionTwo({ title, subtitle }: BannerSectionProps) {
  return (
    <section
      className="relative flex min-h-[70vh] w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 pt-20"
      style={{ backgroundImage: `url(${heroBgImage})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-16 gap-12">
        
        {/* Text Content - Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white">
          <p className="font-inter font-medium text-[20px] leading-[100%] tracking-normal pb-8">
            STUDY ABROAD PROGRAM
          </p>
          <h1 className="font-inter font-extrabold text-[50px] leading-[100%] tracking-normal mb-4">
            Your Journey,<br/>
            Our Expertise.
          </h1>
          <p className="text-[clamp(1rem,2vw,1.2rem)] text-gray-200 max-w-xl mb-6">
            At TMC Institute, we are your strategic Study Abroad Buddy.
            We guide you every step of the way, from choosing the right program to securing your visa and settling in.
          </p>
          
          <a 
            href="/login" 
            className="btn-primary !inline-flex !flex-row items-center gap-2 text-[15px] md:text-base px-[34px] md:px-8 py-[14px] md:py-3 rounded-[200px] w-auto" 
            style={{ borderRadius:"50px", display: 'inline-flex', flexDirection: 'row', alignItems: 'center' }}
          >
            Get Started
            <svg 
              className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

        </div>

        {/* Image - Right Side with rounded corners */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
          <img
            src={heroImage}
            alt="Hero illustration"
            className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default BannerSectionTwo;