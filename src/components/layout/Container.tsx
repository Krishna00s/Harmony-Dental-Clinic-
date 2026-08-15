import React from 'react';
import { clsx } from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Container: React.FC<ContainerProps> = ({ children, className, size = 'lg' }) => {
  const maxProps = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={clsx('mx-auto px-4 sm:px-6 lg:px-8 w-full', maxProps[size], className)}>
      {children}
    </div>
  );
};
