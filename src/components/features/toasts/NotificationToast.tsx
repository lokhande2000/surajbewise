'use client';
import React, { useState, useEffect } from 'react';
import BeWiseTypography from '@/components/common/BeWiseTypography';
import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';

interface NotificationToastProps {
  onClose: () => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className='fixed w-11/12 sm:w-96 z-50 top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white text-center rounded-lg shadow-lg flex flex-col gap-5 items-center justify-center p-5 space-x-2'>
      <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_MD}>
        Thank you for visiting our website and reaching out to us!
      </BeWiseTypography>
      <BeWiseTypography variant={TYPOGRAPHY_VARIANT.BODY_SM}>
        We're here to assist you with any question or information you need. Stay tuned, and we'll connect with you
        shortly!
      </BeWiseTypography>
    </div>
  );
};

export default NotificationToast;
