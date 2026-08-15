import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#17221F] text-white pt-16 pb-12 mt-20 border-t border-[#253632]">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#253632]">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-white text-[#17221F] flex items-center justify-center font-serif text-lg font-bold">
                H
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">
                HARMONY <span className="text-[#D9CFC0] text-sm font-sans font-light">DENTAL</span>
              </span>
            </div>
            <p className="text-xs text-[#E8E7E1]/70 leading-relaxed font-sans max-w-sm">
              Personalized dental care built around listening, clear guidance, and a treatment plan that makes sense for you in a comfortable environment.
            </p>
            <p className="text-[11px] text-[#D9CFC0]/50 italic">
              A sales & technology demo by Zenova Enterprises.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">Explore</h4>
            <ul className="space-y-2 text-sm text-[#E8E7E1]/80 font-sans">
              <li>
                <Link to="/practice" className="hover:text-[#D9CFC0] transition-colors">
                  Our Practice
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D9CFC0] transition-colors">
                  Treatments & Services
                </Link>
              </li>
              <li>
                <Link to="/doctor" className="hover:text-[#D9CFC0] transition-colors">
                  Meet Dr. Mitchell
                </Link>
              </li>
              <li>
                <Link to="/patient-info" className="hover:text-[#D9CFC0] transition-colors">
                  Patient Information
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#D9CFC0] transition-colors">
                  Patient Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">Practice Hours</h4>
            <div className="space-y-2 text-xs text-[#E8E7E1]/80 font-sans">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#526E68] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Mon – Thu</p>
                  <p className="text-[#E8E7E1]/60">8:00 AM – 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 pt-1">
                <Clock className="w-4 h-4 text-[#526E68] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Friday</p>
                  <p className="text-[#E8E7E1]/60">8:00 AM – 2:00 PM</p>
                </div>
              </div>
              <div className="pt-1 text-[#D9CFC0]/60 text-[11px]">
                Sat & Sun: Closed (Emergency line available)
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">Contact & Location</h4>
            <ul className="space-y-2.5 text-xs text-[#E8E7E1]/80 font-sans">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#526E68] flex-shrink-0 mt-0.5" />
                <span>123 Healthcare Way, Suite 400, San Diego, CA 92101</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#526E68] flex-shrink-0" />
                <span>+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#526E68] flex-shrink-0" />
                <span>hello@harmonydental.demo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#E8E7E1]/50 font-sans gap-4">
          <p>© {new Date().getFullYear()} Harmony Dental Care. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Accessibility Statement</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
