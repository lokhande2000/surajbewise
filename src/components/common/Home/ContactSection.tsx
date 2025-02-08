'use client';
import Image from 'next/image';
import Link from 'next/link';

import BeWiseTypography from '@/components/common/BeWiseTypography';
import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';
import ContactForm from '@/components/common/ContactForm';
import { facebookIcon, instagramIcon, linkedinIcon, phoneIcon, whatsappIcon } from '@/lib/constants/imagespatharray/contactslogo';

const ContactSection = () => {
  return (
    <div id='contact' className=' w-full bg-white pb-20 px-10 sm:px-20 lg:px-20 flex flex-col gap-8'>
      <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H2}>Get in Touch</BeWiseTypography>
      <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_MD} className='mb-10 w-full sm:w-2/3 lg:w-8/12 !text-body-md'>
        Want to learn more about how we can collaborate with your college to offer these valuable programs? Share your
        details below, and our team will reach out to you.
      </BeWiseTypography>

      <div className='flex flex-col lg:flex-row justify-evenly gap-24 py-4'>
        <div className='w-full py-4'>
          <ContactForm text={'For a Call Back'} onClose={undefined} />
        </div>

        <div className='hidden lg:block border-[1px] border-[#D6D6D6]'></div>

        <div className='w-full lg:w-1/2 flex flex-col items-start gap-12 py-4'>
          <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H6} className='font-semibold !text-mob-h3 lg:!text-body-lg'>
            Connect with us
          </BeWiseTypography>

          <ul className='flex flex-col gap-6'>
            <li className='flex items-center gap-4'>
              <span>
                <Image height={30} width={30} src={phoneIcon} alt='Phone icon' />
              </span>
              <div className='pl-2'>
                <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_LG}>Call us</BeWiseTypography>
                <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_MD} className='text-primary-400 mt-2'>
                  +91 7338178936
                </BeWiseTypography>
              </div>
            </li>
            <li className='flex items-center gap-4'>
              <span className='text-green-500 mr-3'>
                <Image height={30} width={30} src={whatsappIcon} alt='WhatsApp icon' />
              </span>
              <div>
                <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_LG} className='mb-1'>
                  Whatsapp us
                </BeWiseTypography>
                <Link
                  className='text-primary-400 border-b-2 mt-1 border-primary-400 hover:text-primary-600 hover:border-primary-600 '
                  target='_blank'
                  href='https://wa.me/7338178936'
                >
                  https://wa.me/7338178936
                </Link>
              </div>
            </li>
          </ul>

          <div className='w-full py-5 border-b-2 border-gray-200 block lg:hidden'></div>

          <div className='flex flex-col gap-7'>
            <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H6} className='font-semibold !text-mob-h3 lg:!text-body-lg'>
              Follow Us :
            </BeWiseTypography>
            <div className='flex items-center ml-4 space-x-7'>
              <Link target='_blank' href='https://www.facebook.com/bewise.in'>
                <Image height={19} width={19} src={facebookIcon} alt='Facebook icon' />
              </Link>
              <Link target='_blank' href='https://www.linkedin.com/company/bewise-in/'>
                <Image height={30} width={30} src={linkedinIcon} alt='LinkedIn icon' />
              </Link>
              <Link target='_blank' href='https://www.instagram.com/bewise_in/'>
                <Image height={30} width={30} src={instagramIcon} alt='Instagram icon' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
