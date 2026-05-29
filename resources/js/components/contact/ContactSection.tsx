// components/contact/ContactSection.tsx
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactSection() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <div className="shadow-lg rounded-2xl border-2 border-[#c0392b] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    );
}