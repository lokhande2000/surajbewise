import React from 'react';

import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';

import BeWiseTypography from '../BeWiseTypography';

interface GradientButtonProps {
  text: string;
  onOpen: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className='
      font-medium
      bg-gradient-to-r 
      from-[#77CBF5]
      to-primary-400
      py-2
      px-8 
      rounded-md 
      transition 
      duration-300 
      ease-in-out 
      text-white
      hover:shadow-button-glow'
    >
      <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_MD}>{text}</BeWiseTypography>
    </button>
  );
};

export default GradientButton;
