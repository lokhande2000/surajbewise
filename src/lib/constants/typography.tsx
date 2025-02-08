import React from 'react';

export enum TYPOGRAPHY_VARIANT {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  BODY_XL = 'body-xl',
  BODY_LG = 'body-lg',
  BODY_MD = 'body-md',
  BODY_SM = 'body-sm',
  BODY_XS = 'body-xs',
}

export const VARIANT_TAG_MAP: Record<TYPOGRAPHY_VARIANT, React.ElementType> = {
  [TYPOGRAPHY_VARIANT.H1]: 'h1',
  [TYPOGRAPHY_VARIANT.H2]: 'h2',
  [TYPOGRAPHY_VARIANT.H3]: 'h3',
  [TYPOGRAPHY_VARIANT.H4]: 'h4',
  [TYPOGRAPHY_VARIANT.H5]: 'h5',
  [TYPOGRAPHY_VARIANT.H6]: 'h6',
  [TYPOGRAPHY_VARIANT.BODY_XL]: 'p',
  [TYPOGRAPHY_VARIANT.BODY_LG]: 'p',
  [TYPOGRAPHY_VARIANT.BODY_MD]: 'p',
  [TYPOGRAPHY_VARIANT.BODY_SM]: 'p',
  [TYPOGRAPHY_VARIANT.BODY_XS]: 'p',
};

export const VARIANT_STYLE_MAP: Record<TYPOGRAPHY_VARIANT, string> = {
  [TYPOGRAPHY_VARIANT.H1]: 'font-lora text-grayVariants-200 font-bold text-mob-h1 sm:text-h1',
  [TYPOGRAPHY_VARIANT.H2]: 'font-lora text-grayVariants-200 font-bold text-mob-h2 sm:text-h2',
  [TYPOGRAPHY_VARIANT.H3]: 'font-lora text-grayVariants-200 font-semibold text-mob-h3 sm:text-h3',
  [TYPOGRAPHY_VARIANT.H4]: 'font-lora text-grayVariants-200 font-medium text-mob-h4 sm:text-h4',
  [TYPOGRAPHY_VARIANT.H5]: 'font-lora text-grayVariants-200 font-medium text-mob-h5 sm:text-h5',
  [TYPOGRAPHY_VARIANT.H6]: 'font-lora text-grayVariants-200 font-regular text-mob-h6 sm:text-h6',
  [TYPOGRAPHY_VARIANT.BODY_XL]: 'font-lato font-semibold text-mob-body-xl sm:text-body-xl',
  [TYPOGRAPHY_VARIANT.BODY_LG]: 'font-lato font-medium text-mob-body-lg sm:text-body-lg',
  [TYPOGRAPHY_VARIANT.BODY_MD]: 'font-lato font-regular text-mob-body-md sm:text-body-md',
  [TYPOGRAPHY_VARIANT.BODY_SM]: 'font-lato font-regular text-mob-body-sm sm:text-body-sm',
  [TYPOGRAPHY_VARIANT.BODY_XS]: 'font-lato font-regular text-mob-body-xs sm:text-body-xs',
};
