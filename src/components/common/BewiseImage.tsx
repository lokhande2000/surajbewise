import Image from 'next/image';

import bewisesvg from '../../../public/images/bewiseLogo/bewiseLogo.svg';

const BewiseImage = () => {
  return (
    <div className='h-[48px] sm:w-[250px] flex items-center justify-start w-[180px]'>
      <Image src={bewisesvg} alt='bewise-logo' className='w-3/4 object-contain sm:w-3/5 md:w-[65%]' />
    </div>
  );
};

export default BewiseImage;
