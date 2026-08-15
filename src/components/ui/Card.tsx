import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true }) => {
  return (
    <div
      className={clsx(
        'bg-white border border-[#E8E7E1] rounded-xl p-6 sm:p-8',
        hoverEffect && 'transition-all duration-300 hover:border-[#D9CFC0] hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
};
