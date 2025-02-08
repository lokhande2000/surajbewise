'use client';
import Image from 'next/image';
import { useState } from 'react';

import BeWiseTypography from '@/components/common/BeWiseTypography';
import { feturesCards } from '@/lib/constants/arrays/feturesCards';
import { features_Icons } from '@/lib/constants/featuresShowcaseIconspath';
import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';

const FeaturesShowcase = () => {
  const [hoveredIndices, setHoveredIndices] = useState(new Set());

  const handleMouseEnter = (index: number) => {
    setHoveredIndices((prev) => new Set(prev).add(index));
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndices((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  return (
    <div className='min-h-screen w-full bg-squarebackground bg-center bg-cover bg-no-repeat py-10'>
      <div className='ml-14 sm:ml-20'>
        <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H2} className='w-full text-start'>
          What Sets us Apart
        </BeWiseTypography>
      </div>
      <main className='max-w-6xl sm:max-w-7xl mx-auto pt-20  pb-8 sm:px-0 '>
        <div
          className={`w-full flex flex-wrap justify-center gap-y-20 transition-[gap] duration-500 ease-in-out ${
            hoveredIndices.size > 0 ? 'gap-x-16' : 'gap-x-14'
          }`}
        >
          {feturesCards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-start gap-4 text-center w-3/4 sm:w-1/2 lg:w-96 rounded-md transition-transform duration-1000 ${
                hoveredIndices.has(index) ? 'scale-125 z-10' : 'scale-100'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div>
                <Image
                  height={80}
                  width={80}
                  src={features_Icons[index] || '/icons/featuresShowcaseIcon/programs2.svg'}
                  alt='img'
                />
              </div>
              <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H6} className='!font-medium !text-content'>
                {card.title}
              </BeWiseTypography>
              <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_MD} className='font-medium text-grayVariants-50 px-10'>
                {card.description}
              </BeWiseTypography>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FeaturesShowcase;
