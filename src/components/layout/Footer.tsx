'use client';

import Image from 'next/image';
import Link from 'next/link';

import { BEWISE_SOCIAL, BEWISE_URLS } from '@/lib/constants/bewiseUrls';
import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';
import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  maile,
  shareIcon,
} from '@/lib/constants/imagespatharray/contactslogo';

import BeWiseTypography from '../common/BeWiseTypography';
import EmailSubscribe from '../common/EmailSubscribe';

const Footer = () => {
  return (
    <div className='w-full h-min-full bg-footer text-black pt-10 px-10 sm:px-20 pb-5'>
      <div className='flex flex-col gap-5 sm:gap-8'>
        <div className='grid sm:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-2'>
            <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H6} className='mb-2 sm:mb-3 font-semibold font-lato'>
              Our Solutions
            </BeWiseTypography>
            <Link href={BEWISE_URLS.PARENTS}>
              <BeWiseTypography
                variant={TYPOGRAPHY_VARIANT.BODY_SM}
                className='text-grayVariants-200 !text-mob-body-md !font-medium'
              >
                Parents - BeWise
              </BeWiseTypography>
            </Link>
            <Link href={BEWISE_URLS.PARTNERS}>
              <BeWiseTypography
                variant={TYPOGRAPHY_VARIANT.BODY_SM}
                className='text-grayVariants-200 text-mob-body-md !font-medium'
              >
                Institutions / Partner with us
              </BeWiseTypography>
            </Link>
            <Link href={BEWISE_URLS.WISECONNECT}>
              <BeWiseTypography
                variant={TYPOGRAPHY_VARIANT.BODY_SM}
                className='text-grayVariants-200 text-mob-body-md !font-medium'
              >
                Teachers - WiseConnect
              </BeWiseTypography>
            </Link>
            <Link href='/'>
              <BeWiseTypography
                variant={TYPOGRAPHY_VARIANT.BODY_SM}
                className='text-grayVariants-200 text-mob-body-md !font-medium'
              >
                College Campus
              </BeWiseTypography>
            </Link>
          </div>
          <div className='flex flex-col gap-5 sm:items-end'>
            <div className='flex flex-col gap-4'>
              <BeWiseTypography
                variant={TYPOGRAPHY_VARIANT.BODY_MD}
                className='sm:text-center text-grayVariants-200 !font-medium w-full mb-2 sm:mb-3'
              >
                Contact Us
              </BeWiseTypography>
              <div className='flex items-center gap-7'>
                <Link href={BEWISE_SOCIAL.FACEBOOK} target='_blank'>
                  <Image height={15} width={15} src={facebookIcon} alt='Facebook' />
                </Link>

                <Link href={BEWISE_SOCIAL.INSTAGRAM} target='_blank'>
                  <Image height={23} width={23} src={instagramIcon} alt='Instagram' />
                </Link>

                <Link href={BEWISE_SOCIAL.LINKEDIN} target='_blank'>
                  <Image height={23} width={23} src={linkedinIcon} alt='LinkedIn' />
                </Link>

                <Link href='mailto:contact@bewise.in'>
                  <Image height={23} width={23} src={maile} alt='E-Mail' />
                </Link>

                <Link
                  href='/'
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== 'undefined') {
                      navigator
                        .share({
                          title: 'Check out this website!',
                          url: location.href,
                        })
                        .catch(() => {
                          alert('Sharing is not supported in this browser. Please copy the link manually.');
                        });
                    } else {
                      alert('Sharing is not supported in this browser. Please copy the link manually.');
                    }
                  }}
                >
                  <Image height={23} width={23} src={shareIcon} alt='Share' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <EmailSubscribe />
        <div className='flex flex-col text-center text-grayVariants-200'>
          <div className='w-full flex items-center gap-2 justify-center sm:gap-5 flex-wrap'>
            <Link href={BEWISE_URLS.TERMS_CONDITIONS}>
              <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_XS}>Terms & Conditions</BeWiseTypography>
            </Link>
            <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_XS}>|</BeWiseTypography>
            <Link href={BEWISE_URLS.PRIVACY_POLICY}>
              <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_XS}>Privacy Policy</BeWiseTypography>
            </Link>
            <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_XS}>|</BeWiseTypography>
            <Link href={BEWISE_URLS.COPYRIGHT_IP}>
              <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_XS}>Copyright & IP Policy</BeWiseTypography>
            </Link>
          </div>
          <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_XS} className='mt-2 sm:mt-0'>
            © Copyright 2023 BeWise. All Rights Reserved
          </BeWiseTypography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
