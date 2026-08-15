import React from 'react';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'Our Practice', path: '/practice' },
  { label: 'Services', path: '/services' },
  { label: 'Our Doctors', path: '/doctor' },
  { label: 'Patient Info', path: '/patient-info' },
  { label: 'About Us', path: '/about' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            clsx(
              'text-sm font-medium transition-colors duration-200 hover:text-[#526E68]',
              isActive ? 'text-[#526E68] font-semibold' : 'text-[#17221F]/80'
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
