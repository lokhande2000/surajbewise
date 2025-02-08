'use client';

import Image from 'next/image';
import BeWiseTypography from '@/components/common/BeWiseTypography';
import { FEATURED_PARTNERS_LOGOS } from '@/lib/constants/imagespatharray/featuredPartners';
import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';

const FeaturedPartners = () => {
  return (
    <div className='sm:w-full sm:px-10 lg:px-2 mx-10 md:mx-20 my-5 sm:my-14 flex flex-col gap-10 sm:gap-14 items-center justify-center'>
      <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H2} className='w-full sm:w-11/12 text-start pb-8'>
        Our Featured Partners
      </BeWiseTypography>

      <div className='grid grid-cols-2 py-10 sm:grid-cols-3 gap-10 place-items-center transition-all duration-1000 ease-in-out transform hover:scale-90 hover:gap-16'>
        {FEATURED_PARTNERS_LOGOS.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`partner-logo-${index}`}
            height={100}
            width={100}
            className='h-full w-full object-contain transition-transform duration-1000 ease-in-out hover:scale-125'
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPartners;
