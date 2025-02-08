import Link from 'next/link';

import BewiseImage from '@/components/common/BewiseImage';
import { LinkButton } from '../common/buttons';

const Header = () => {
  return (
    <div
      className={
        'fixed top-0 right-0 w-full h-14 sm:h-16 md:h-20 drop-shadow-md flex items-center justify-between py-2 px-5 bg-white z-40'
      }
    >
      <BewiseImage />
      <div className='hidden sm:block'>
        <LinkButton href='#contact'>Reach out to Us</LinkButton>
      </div>
    </div>
  );
};

export default Header;
