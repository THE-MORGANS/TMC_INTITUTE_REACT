import { useEffect, useState } from "react";
import { Link, usePage } from '@inertiajs/react';
import logo from '@/assets/images/logo.jpg';
import "@/css/styles.css";
 
// Types
interface NavBarProps {
  scrolled: boolean;
}

// Data
const PROGRAMMES = [
  "Governance & Risk",
  "Financial Crime Prevention",
  "ESG & Digital Risk",
  "Regulatory Technology",
  "Executive Education",
];

const NAV_LINKS = [
  { label: "Home", href: "/"},
  { label: "Programmes", href: "/programmes", hasDropdown: true },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Student Advisory", href: "/student-advisory" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];
 
// NavBar Component
export function NavBar({ scrolled }: NavBarProps) {
  const [dropOpen, setDropOpen] = useState(false);
  const page = usePage();
  const currentPath = typeof window !== 'undefined'
    ? window.location.pathname
    : page.url
      ? new URL(page.url, 'http://localhost').pathname
      : '';

  const isActive = (href: string) =>
    currentPath === href || currentPath.startsWith(`${href}/`);

 

  return (
    <nav className={`navbar ${ scrolled 
                        ? 'bg-white shadow-md  mt-0' 
                        : 'bg-black/20  mt-3' }`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo-icon">
            <img 
              src={logo} 
              alt="TMC Institute Logo" 
              width={38} 
              height={38}
              className="logo-image"
            />
          </div>
          <span className={`${scrolled ? 'text-black' : 'text-white'} font-['Inter'] font-bold text-[25px] leading-[1] tracking-[-1.5%]`}>
          TMC Institute
        </span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links">
          {NAV_LINKS.map((l) =>
            l.hasDropdown ? (
              <div 
                key={l.label} 
                className="dropdown-container"
                onMouseEnter={() => setDropOpen(true)} 
                onMouseLeave={() => setDropOpen(false)}
              >
                <Link
                  // href={l.href}
                  href="#"
                  className={`nav-link dropdown-trigger${isActive(l.href) ? ' active' : ''}`}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                >
                  {l.label} <span className="dropdown-arrow">▼</span>
                </Link>
                {dropOpen && (
                  <div className="dropdown-menu">
                    {PROGRAMMES.map((p) => (
                      <div key={p} className="dropdown-item">
                        {p}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className={`nav-link${isActive(l.href) ? ' active' : ''}`}
                aria-current={isActive(l.href) ? 'page' : undefined}
              >
                {l.label}
              </Link>
            )
          )}
          <Link href="/login" className="btn-primary" style={{ padding: "9px 22px", fontSize: 13, borderRadius:"50px" }}>
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;