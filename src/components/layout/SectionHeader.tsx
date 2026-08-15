import React from 'react';
import { Badge } from '../ui/Badge';
import { clsx } from 'clsx';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}) => {
  return (
    <div className={clsx('max-w-2xl mb-10 md:mb-14', centered && 'mx-auto text-center', className)}>
      {eyebrow && <Badge variant="teal" className="mb-3">{eyebrow}</Badge>}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#17221F] tracking-tight leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#17221F]/70 font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
