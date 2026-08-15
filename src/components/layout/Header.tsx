import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Mail } from 'lucide-react';
import { Navbar } from '../navigation/Navbar';
import { MobileNavDrawer } from '../navigation/MobileNavDrawer';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-[#F7F7F4]/90 backdrop-blur-md shadow-sm py-3 border-b border-[#E8E7E1]'
          : 'bg-transparent py-5'
      )}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-full bg-[#17221F] text-white flex items-center justify-center font-serif text-lg font-bold transition-transform duration-300 group-hover:scale-105">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-[#17221F] tracking-tight leading-none">
                HARMONY
              </span>
              <span className="text-[10px] tracking-[0.2em] font-sans text-[#526E68] uppercase font-semibold mt-0.5">
                Dental Care
              </span>
            </div>
          </Link>

          {/* Desktop Navbar */}
          <Navbar />

          {/* Action CTAs */}
          <div className="flex items-center space-x-4">
            <NavLink to="/contact" className="hidden sm:inline-flex">
              <Button variant="primary" size="md" className="shadow-none">
                <Mail className="w-4 h-4 mr-1.5" />
                Contact Us
              </Button>
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="lg:hidden p-2 text-[#17221F] hover:text-[#526E68] rounded-lg transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </header>
  );
};
