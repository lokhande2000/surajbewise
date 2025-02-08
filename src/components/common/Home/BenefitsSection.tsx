'use client';
import BeWiseTypography from '@/components/common/BeWiseTypography';
import { COLLEGE_BENEFITS } from '@/lib/constants/collegeBenefits';
import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';
import Image from 'next/image';
import NestedModals from '@/components/common/Modals/NestedModals';

const BenefitsSection = () => {
  return (
    <div className='relative'>
      <div className=' mx-5 sm:mx-10 my-5 sm:my-10 p-5 sm:p-10 bg-gradient-to-b sm:from-secondary-50 sm:to-white rounded-2xl'>
        <div className='relative grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-3 mb-5 sm:mb-16'>
          <div className='h-full w-full flex lg:border-r-2 border-gray-500 pt-0 lg:pt-4 text-start sm:text-center md:text-left mb-7 sm:mb-0'>
            <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H2} className='!font-semibold'>
              Benefits for your Institution
            </BeWiseTypography>
          </div>
          <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_LG} className='hidden sm:block p-0 lg:px-6'>
            Our tailored approach boosts student engagement, strengthens institutional outreach, and creates lasting
            impact in students' lives. Through collaborations with leading providers, we equip students with essential
            skills, networks, and opportunities for academic and professional success. Contact us to explore how we can
            support your university’s goals.
          </BeWiseTypography>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-6 px-1'>
          {COLLEGE_BENEFITS.map((benefit) => (
            <div key={benefit?.id} className='shadow-md w-full h-full rounded-xl flex flex-col pb-5'>
              <div className='relative text-center'>
                <Image
                  width={100}
                  height={100}
                  className='object-contain object-center w-full rounded-md'
                  src={benefit.cardImage}
                  alt={`Image for ${benefit.title}`}
                />
                <BeWiseTypography
                  variant={TYPOGRAPHY_VARIANT.H6}
                  className={
                    'w-9/12 lg:w-11/12 absolute bottom-2 text-center text-white left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 rounded-xl py-1 !leading-[160%] !font-medium'
                  }
                >
                  {benefit.title}
                </BeWiseTypography>
              </div>

              <div className='flex-grow flex flex-col text-start justify-start px-4 py-4 text-grayVariants-50'>
                <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_MD} className='w-full text-center'>
                  {benefit.info}
                </BeWiseTypography>
              </div>

              <div className='px-4'>
                <NestedModals benefitDetails={benefit} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
