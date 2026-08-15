import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  treatment?: string;
  description?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Before treatment',
  afterAlt = 'After treatment',
  treatment,
  description,
}) => {
  // sliderPosition represents percentage of AFTER image visible (0 to 100)
  // When sliderPosition = 50%, left half is After, right half is Before
  // Dragging left (sliderPosition decreases) reveals more Before image
  // Dragging right (sliderPosition increases) reveals more After image
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div className="w-full">
      {treatment && (
        <div className="mb-3">
          <h4 className="font-serif text-lg md:text-xl font-medium text-[#17221F]">{treatment}</h4>
          {description && <p className="text-xs md:text-sm text-[#17221F]/70 mt-1">{description}</p>}
        </div>
      )}

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden select-none touch-pan-y shadow-sm border border-[#E8E7E1] bg-[#17221F]"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        role="slider"
        tabIndex={0}
        aria-label="Before and after treatment comparison slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
      >
        {/* BEFORE Image (Base background) */}
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#17221F]/80 backdrop-blur-md text-white text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Before
        </div>

        {/* AFTER Image (Top overlay clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={afterImage}
            alt={afterAlt}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-[#526E68]/90 backdrop-blur-md text-white text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            After
          </div>
        </div>

        {/* Divider Line & Drag Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 md:w-10 md:h-10 bg-white text-[#17221F] rounded-full shadow-lg flex items-center justify-center border-2 border-[#526E68]">
            <ChevronsLeftRight className="w-5 h-5 text-[#526E68]" />
          </div>
        </div>
      </div>

      <p className="mt-2 text-[11px] md:text-xs text-[#17221F]/50 italic text-center">
        * Drag handle horizontally or use left/right arrow keys. Sample clinical demonstration. Individual results vary.
      </p>
    </div>
  );
};
