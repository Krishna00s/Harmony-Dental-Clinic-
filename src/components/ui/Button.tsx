import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#526E68] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md';

  const variants = {
    primary: 'bg-[#17221F] text-white hover:bg-[#253632] shadow-sm',
    secondary: 'bg-[#526E68] text-white hover:bg-[#415954] shadow-sm',
    outline: 'border border-[#17221F] text-[#17221F] hover:bg-[#17221F] hover:text-white',
    ghost: 'text-[#17221F] hover:bg-[#E8E7E1]/50',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
