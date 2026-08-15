import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'stone' | 'sand';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'teal', className }) => {
  const base = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase';
  const variants = {
    teal: 'bg-[#526E68]/10 text-[#526E68] border border-[#526E68]/20',
    stone: 'bg-[#E8E7E1] text-[#17221F] border border-[#D9CFC0]/40',
    sand: 'bg-[#D9CFC0]/30 text-[#17221F] border border-[#D9CFC0]',
  };

  return <span className={clsx(base, variants[variant], className)}>{children}</span>;
};
