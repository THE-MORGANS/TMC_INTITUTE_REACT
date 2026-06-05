// components/contact/OnlineCoursesSection.tsx
import courseBg from '@/assets/images/online-course-bg.jpg';
import { Link } from 'wouter';

export default function OnlineCoursesSection() {
    return (
        <div className="pb-10 bg-gray-50">
            <section 
                className="w-[70%] rounded-r-[60px] relative overflow-hidden"
                style={{
                    backgroundImage: `url(${courseBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 rounded-r-[60px]"></div>
                
                <div className="relative z-10 py-12 md:py-16 lg:py-8 pr-8 md:pr-12 lg:pr-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left side - Heading */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl text-[25] font-bold text-white mb-2 animate-pulse pl-4 md:pl-8">
                                Get Online Courses Now!!
                            </h2>
                            <div className="w-20 h-1 bg-[#c0392b] ml-4 md:ml-8 mt-4"></div>
                        </div>
                        
                        {/* Right side - Button */}
                        <div className="flex-shrink-0 pr-4 md:pr-8">
                            <Link href={route('login')} className="bg-[#c0392b] hover:bg-[#a83224] text-white font-bold py-4 px-10 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl whitespace-nowrap">
                                Join with Us →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}