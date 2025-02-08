import Link from 'next/link';

import BeWiseTypography from '@/components/common/BeWiseTypography';
import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';
import { LinkButton } from '../../buttons';

const HeroText = () => {
  return (
    <div className='w-11/12 m-auto sm:m-0 sm:w-full h-full flex flex-col items-start gap-10'>
      <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H1} className='!leading-[150%]'>
        Empowering Student Success Through Collaboration
      </BeWiseTypography>
      <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_XL} className='!font-medium lg:!font-semibold !text-body-xl '>
        We enhance your university's student experience with services that promote skill development, growth and career
        success while driving impactful outcomes for students and new revenue opportunities for your institution.
      </BeWiseTypography>
      <LinkButton href='#contact'>Reach out to Us</LinkButton>
    </div>
  );
};

export default HeroText;
