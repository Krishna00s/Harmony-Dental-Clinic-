import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Mail } from 'lucide-react';
import { navItems } from './Navbar';
import { Button } from '../ui/Button';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#17221F]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F7F7F4] shadow-2xl p-6 flex flex-col justify-between z-50 border-l border-[#E8E7E1]">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#E8E7E1]">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#17221F] text-white flex items-center justify-center font-serif text-sm font-bold">
                H
              </div>
              <span className="font-serif font-semibold text-lg text-[#17221F] tracking-tight">
                Harmony Dental
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#17221F]/70 hover:text-[#17221F] rounded-lg focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-8 flex flex-col space-y-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive ? 'text-[#526E68] font-semibold' : 'text-[#17221F]/80 hover:text-[#526E68]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#E8E7E1]">
          <NavLink to="/contact" onClick={onClose} className="w-full">
            <Button variant="primary" className="w-full py-3 text-sm">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </NavLink>
          <div className="mt-4 text-center text-xs text-[#17221F]/50">
            San Diego, CA • +1 (555) 234-5678
          </div>
        </div>
      </div>
    </div>
  );
};
