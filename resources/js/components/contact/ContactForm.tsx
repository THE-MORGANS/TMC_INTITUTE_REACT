// components/contact/ContactForm.tsx
import { useState } from 'react';
import heroBgImage from '@/assets/images/contact_img.jpg';

interface FormData {
    fullname: string;
    phone: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        fullname: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form or show success message
    };

    return (
        <div className="rounded-tr-2xl rounded-br-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Blurred background image only */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-md"
                style={{
                    backgroundImage: `url(${heroBgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>
            
            {/* Optional: Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/10 rounded-tr-2xl rounded-br-2xl"></div>
            
            {/* Content - stays clear and above the blurred background */}
            <div className="relative z-10">
                <div className="mb-6 text-left">
                    <h3 className="text-2xl font-normal text-black  opacity-100 ">
                        Contact With Us!
                    </h3>
                    <p className=" font-bold text-[50px] mt-1  opacity-100 text-black ">
                        Get In Touch
                    </p>
                    <p className="text-blacktext-[20px] text-sm   opacity-100">
                        Reach out and connect today
                    </p>
                 </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="fullname" className="block text-sm font-medium text-white mb-1">
                            Full name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c0392b] focus:border-[#c0392b] outline-none transition bg-white/90"
                            placeholder="Your full name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c0392b] focus:border-[#c0392b] outline-none transition bg-white/90"
                            placeholder="Your phone number"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c0392b] focus:border-[#c0392b] outline-none transition bg-white/90"
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c0392b] focus:border-[#c0392b] outline-none transition resize-none bg-white/90"
                            placeholder="How can we help you?"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#c0392b] hover:bg-[#a83224] text-white font-semibold py-3 rounded-lg transition duration-200 mt-4"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}