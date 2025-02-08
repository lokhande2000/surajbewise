'use client';

import Image from 'next/image';
import { dottedBg, blobBlue, blobPink, visionaryLearner, aspireAchiever } from '@/lib/constants/imagespatharray/heroSectionImg';
import HeroText from './HeroText';

const images = [visionaryLearner, aspireAchiever];

const HeroSection = () => {
  return (
    <div className='relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 mt-14 sm:mt-16 pt-8 gap-7 lg:gap-0'>
      {/* Background Image */}
      <div
        className='absolute w-full h-[65%] sm:h-full sm:w-3/4 bottom-0 right-20'
        style={{
          backgroundImage: `url(${dottedBg})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      {/* Left Background Blob */}
      <div className='absolute left-0 top-0 h-1/2 w-1/2 sm:w-1/4 flex items-start justify-start'>
        <Image height={100} width={100} className='h-full w-full' src={blobPink} alt='Blob shape background' />
      </div>
      {/* Right Background Blob */}
      <div className='absolute right-2 sm:right-1/4 bottom-0 sm:bottom-14 h-1/4 sm:h-1/2 sm:w-full lg:w-1/2'>
        <Image height={100} width={100} className='h-full w-full' src={blobBlue} alt='Blue blob shape background' />
      </div>

      {/* Left Section */}
      <div className='relative h-min lg:w-1/2'>
        <HeroText />
      </div>

      {/* Right Section */}
      <div className='pt-9 pb-4 sm:pb-0 sm:pt-0 relative flex items-center justify-center lg:justify-end w-full lg:w-1/2 mt-8 lg:mt-0'>
        <div className='relative'>
          {/* Outer Ring */}
          <div className='bg-[#FF3C4033] rounded-full h-72 w-[300px] lg:h-[502px] lg:w-[502px] flex items-center justify-center'>
            {/* Middle Ring */}
            <div className='border-r-2 border-white border-y-8 border-l-8 rounded-full h-64 w-[259px] lg:h-[434px] lg:w-[434px] flex items-center justify-center'>
              {/* Inner Ring */}
              <div className='bg-[#F8687D] border-white rounded-full h-52 w-[200px] lg:h-[344px] lg:w-[344px] border-8'></div>
            </div>
          </div>

          {/* Animated Image */}
          <div className='h-full w-full absolute bottom-5 flex items-center justify-center'>
            <div className='image-slider bottom-5 lg:bottom-12'>
              {images.map((image, index) => (
                <Image
                  height={100}
                  width={100}
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className='slider-image h-full w-full '
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;