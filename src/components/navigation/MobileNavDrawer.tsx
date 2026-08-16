import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#17221F]/60 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Solid Opaque Drawer Container */}
      <div className="relative w-full max-w-xs h-full bg-[#F7F7F4] shadow-2xl p-6 flex flex-col justify-between z-50 border-l border-[#E8E7E1] overflow-y-auto">
        <div>
          {/* Drawer Header */}
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
              className="p-2 text-[#17221F]/70 hover:text-[#17221F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#526E68]"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="mt-8 flex flex-col space-y-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive ? 'text-[#526E68] font-semibold' : 'text-[#17221F]/80 hover:text-[#526E68]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="pt-6 border-t border-[#E8E7E1] mt-auto">
          <NavLink to="/contact" onClick={onClose} className="w-full block">
            <Button variant="primary" className="w-full py-3.5 text-sm font-medium">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </NavLink>
          <div className="mt-4 text-center text-xs text-[#17221F]/60 font-sans">
            Dublin 2 • +353 (0)1 678 4500
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
