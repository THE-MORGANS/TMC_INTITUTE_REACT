import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, useEffect, useState } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

export default function Guest({ children }: PropsWithChildren) {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div>
            <NavBar scrolled={scrolled} />
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div> */}

            <div>
                {children}
            </div> 
            <Footer/>
        </div>
    );
}
