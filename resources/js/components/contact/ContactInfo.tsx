// components/contact/ContactInfo.tsx
export default function ContactInfo() {
    const addresses = [
        {
            country: "United Kingdom",
            address: "International House 24 Holborn Viaduct, London, EC1A 2BN, United Kingdom"
        },
        {
            country: "Nigeria",
            address: "2nd Floor 1, Adeola Adeoye Street Off Toyin Street ikeja, Lagos Nigeria."
        },
        {
            country: "Ireland",
            address: "21 Gillabbey Terrace, Gillabbey Street, Cork, T12 KPN4, Republic of Ireland"
        }
    ];

    const phoneNumbers = [
        { country: "United Kingdom", number: "+234 (1) 700-1770" },
        { country: "Nigeria", number: "(+234) 91 534 14314" }
    ];

    return (
        <div className="p-6 md:p-8">
            <h2 className="text-3xl text-[30px] font-bold mb-4">Have Any Questions?</h2>
            <p className="text-gray-600 mb-12 text-lg">
                Have an inquiry or some feedback for us? Fill out the form below to contact our team.
            </p>

            {/* Addresses */}
            <div className="px-8 py-8 rounded-2xl border-2 "
                style={{
                    backgroundImage: `
                        linear-gradient(white, white),
                        linear-gradient(90deg, #c0392b 0%, rgba(192, 57, 43, 0.2) 50%, rgba(192, 57, 43, 0) 100%)
                    `,
                    backgroundOrigin: 'padding-box, border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '2px solid transparent'
                }}>

                <div className="space-y-8 ">
                    {addresses.map((item, index) => (
                    <div key={index} className={index !== 0 ? "border-t border-gray-200 mt-2 pt-2" : ""}>
                        <div className="flex items-start gap-3">
                            {/* Location Icon */}
                            <svg 
                                className="w-6 h-6 text-[#c0392b] mt-1 flex-shrink-0" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                                />
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                                />
                            </svg>
                            <div>
                                <h3 className="font-bold text-xl mb-2">{item.country}</h3>
                                <p className="text-gray-600">{item.address}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
             {/* Phone Numbers */}
            <div 
                className="px-8 py-8 mt-10 rounded-2xl bg-white"
                style={{
                    backgroundImage: `
                        linear-gradient(white, white),
                        linear-gradient(90deg, #c0392b 0%, rgba(192, 57, 43, 0.2) 50%, rgba(192, 57, 43, 0) 100%)
                    `,
                    backgroundOrigin: 'padding-box, border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '2px solid transparent'
                }}
            >
                {/* Content */}
                <div className="flex items-center gap-3 mb-6">
                    <svg 
                        className="w-6 h-6 text-[#c0392b] flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" 
                        />
                    </svg>
                    <div className="font-bold text-xl">
                        {/* Phone Numbers List */}
                        {phoneNumbers.map((item, index) => (
                            <div key={index} className={index !== 0 ? "border-t border-gray-200 mt-4 pt-4" : ""}>
                                <p className="text-gray-600 mt-0">
                                    {item.country}: {item.number}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}