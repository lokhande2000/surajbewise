import React from 'react';

import { TYPOGRAPHY_VARIANT, VARIANT_STYLE_MAP, VARIANT_TAG_MAP } from '@/lib/constants/typography';

interface BeWiseTypographyProps {
  variant: TYPOGRAPHY_VARIANT;
  children: React.ReactNode;
  className?: string;
}

const BeWiseTypography: React.FC<BeWiseTypographyProps> = ({ variant, children, className = '' }) => {
  const Tag: React.ElementType = VARIANT_TAG_MAP[variant];

  return <Tag className={`${className} ${VARIANT_STYLE_MAP[variant]}`}>{children}</Tag>;
};

export default BeWiseTypography;
