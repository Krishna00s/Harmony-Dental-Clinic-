import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#E8E7E1] py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-serif text-lg md:text-xl font-medium text-[#17221F] hover:text-[#526E68] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#526E68] rounded-sm py-1"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={clsx(
            'w-5 h-5 text-[#526E68] transition-transform duration-300 flex-shrink-0 ml-4',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={clsx(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden text-sm md:text-base text-[#17221F]/70 leading-relaxed font-sans pr-6">
          {answer}
        </div>
      </div>
    </div>
  );
};
