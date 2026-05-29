import aboutImg from '@/assets/images/about_img.jpg';


// components/about/AboutContent.tsx
export default function AboutContent() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Welcome Section */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left side - Text Content - 60% */}
                        <div className="lg:w-[60%]">
                            <div className="relative">
                                <div className="absolute -left-4 top-0 w-1 h-20 bg-[#c0392b] rounded-full"></div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 pl-6">
                                    Welcome to TMC Institute
                                </h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    TMC Institute was established in 2016 and has been operating regionally and internationally since its inception. 
                                    As a member of The Morgans Consortium, the institute has excelled over the years in training and developing talents. 
                                    We assist organizations in identifying knowledge gaps and tailor relevant training and courses to bridge and 
                                    improve efficiency and productivity across various sectors.
                                </p>
                                <p>
                                    We are the leading and specialized provider of corporate training, including Governance, Risk Management, 
                                    Compliance and Financial Crime Prevention and Leadership training. Our focus is on cultivating the right attitude 
                                    and skills in your teams. To date, TMC Institute has successfully delivered training courses throughout the region, 
                                    with a growing list of clients every year. We capitalize on our in-depth knowledge of the needs of organizations 
                                    and financial institutions.
                                </p>
                            </div>
                        </div>

                        {/* Right side - Image - 40% */}
                        <div className="lg:w-[40%] group">
                            <div className="rounded-3xl overflow-hidden shadow-lg relative h-80 border-t-2 border-l-2 border-r-2 border-[#c0392b]">
                                <img 
                                    src={aboutImg} 
                                    alt="TMC Institute Campus" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="mb-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                      
                        {/* Right side - Image - 40% */}
                        <div className="lg:w-[40%] group">
                            <div className="rounded-3xl overflow-hidden shadow-lg relative h-80 border-t-2 border-l-2 border-r-2 border-[#c0392b]">
                                <img 
                                    src={aboutImg} 
                                    alt="TMC Institute Campus" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                          {/* Left side - Text Content - 60% */}
                        <div className="lg:w-[60%]">
                           
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                
                                <p>
                                    For over a decade, we have been providing training to a wide range of organizations in the region, with a special emphasis on financial institutions as our primary clientele. Our certified and experienced team possesses an in-depth understanding and knowledge of the region’s financial services. We provide world-class training packed with practical examples and top-notch case studies.
                                </p>
                                {/* Education Options Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                    {/* Undergraduate Education */}
                                    <div className="bg-gray-50 rounded-2xl p-8 border-2 border-[#c0392b]/20 hover:shadow-lg transition-shadow">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Undergraduate Education</h3>
                                        <p className="text-[#c0392b] font-semibold mb-6">With flexible courses</p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-gray-600">
                                                <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Get access to 4,000+ of our top courses
                                            </li>
                                            <li className="flex items-center gap-3 text-gray-600">
                                                <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Popular topics to learn now
                                            </li>
                                            <li className="flex items-center gap-3 text-gray-600">
                                                <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Find the right instructor for you
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Postgraduate Education */}
                                    <div className="bg-gray-50 rounded-2xl p-8 border-2 border-[#c0392b]/20 hover:shadow-lg transition-shadow">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Postgraduate Education</h3>
                                        <p className="text-[#c0392b] font-semibold mb-6">Study flexibly online</p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-gray-600">
                                                <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                                Advanced postgraduate programs
                                            </li>
                                            <li className="flex items-center gap-3 text-gray-600">
                                                <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                                Globally recognized certifications
                                            </li>
                                            <li className="flex items-center gap-3 text-gray-600">
                                                <svg className="w-5 h-5 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" />
                                                </svg>
                                                Study from anywhere in the world
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>

                

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="bg-[#c0392b] hover:bg-[#a83224] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 hover:scale-105">
                        Explore Our Programs
                    </button>
                </div>
            </div>
        </section>
    );
}