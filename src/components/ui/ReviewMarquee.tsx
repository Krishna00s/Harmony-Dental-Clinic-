import React, { useEffect, useState } from 'react';
import { getTestimonials } from '../../services/testimonialsService';
import type { Testimonial } from '../../types';
import { Star } from 'lucide-react';

export const ReviewMarquee: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error('Error loading marquee testimonials:', err);
      }
    }
    loadTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  // Duplicate items array twice to create a seamless infinite loop
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-[#E8E7E1]/50 border-t border-[#E8E7E1] py-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#526E68]">
          Trusted by Our Patients
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="group relative w-full overflow-hidden flex">
        {/* Subtle left/right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#E8E7E1] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#E8E7E1] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center space-x-5 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-72 sm:w-80 bg-white border border-[#E8E7E1] rounded-xl p-4 sm:p-5 shadow-xs transition-all duration-300 group-hover/marquee:opacity-70 hover:!opacity-100 hover:scale-[1.04] hover:shadow-md hover:border-[#D9CFC0] cursor-pointer"
            >
              <div className="flex text-amber-500 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#17221F]/85 font-sans leading-relaxed line-clamp-3 mb-3">
                "{item.quote}"
              </p>
              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#E8E7E1]/60">
                <span className="font-semibold text-[#17221F]">— {item.displayName}</span>
                <span className="text-[#526E68] text-[10px]">{item.context}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
