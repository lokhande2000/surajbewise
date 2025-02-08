'use client';
import React, { useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';
import { submitContactForm } from '@/services/contact';
import { FormData, ToastData } from '@/types/form';
import { contactFormSchema, ContactFormData } from '@/utils/form/validation';

import NotificationToast from '../features/toasts/NotificationToast';
import Toast from '../features/toasts/Tost';

import BeWiseTypography from './BeWiseTypography';

const initialFormData: FormData = {
  firstName: '',
  institutionName: '',
  phoneNumber: '',
  email: '',
  message: '',
};

const ContactForm: React.FC<{ text: string; onClose: () => void }> = ({ text, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [showToast, setShowToast] = useState(false);
  const [showCustomToast, setShowCustomToast] = useState(false);
  const [toastData, setToastData] = useState<ToastData>({ type: 'success', message: '' });
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // await submitContactForm(data);
      setShowToast(true);

      setTimeout(() => {
        onClose();
        setShowToast(false);
      }, 2000);

      setFormData(initialFormData);
    } catch (error) {
      setToastData({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred',
      });
      setShowCustomToast(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='h-full w-full text-start'>
      <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H6} className='font-semibold mb-8 !text-body-lg'>
        {text}
      </BeWiseTypography>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 sm:gap-14 text-start'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14 text-black'>
          <div>
            <input
              type='text'
              placeholder='First Name'
              {...register('firstName')}
              className={`w-full p-3 border-b-2 focus:outline-none ${errors.firstName ? 'border-red-500' : ''}`}
              aria-label='First Name'
            />
            {errors.firstName ? <p className='text-red-500 text-sm'>{errors.firstName.message}</p> : null}
          </div>

          <div>
            <input
              type='text'
              placeholder='Institution Name'
              {...register('institutionName')}
              className={`w-full p-3 border-b-2 focus:outline-none ${errors.institutionName ? 'border-red-500' : ''}`}
              aria-label='Institution Name'
            />
            {errors.institutionName ? <p className='text-red-500 text-sm'>{errors.institutionName.message}</p> : null}
          </div>

          <div>
            <input
              type='text'
              placeholder='Phone Number'
              {...register('phoneNumber')}
              className={`w-full p-3 border-b-2 focus:outline-none ${errors.phoneNumber ? 'border-red-500' : ''}`}
              aria-label='Phone Number'
            />
            {errors.phoneNumber ? <p className='text-red-500 text-sm'>{errors.phoneNumber.message}</p> : null}
          </div>

          <div>
            <input
              type='email'
              placeholder='Email'
              {...register('email')}
              className={`w-full p-3 border-b-2 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
              aria-label='Email Address'
            />
            {errors.email ? <p className='text-red-500 text-sm'>{errors.email.message}</p> : null}
          </div>
        </div>

        <textarea
          rows={2}
          placeholder='Message (optional)'
          {...register('message')}
          className={`w-11/12 p-3 m-0 text-black resize-none overflow-hidden focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
          aria-label='Message'
        />
        {errors.message ? <p className='text-red-500 text-sm'>{errors.message.message}</p> : null}

        <div className='w-full flex items-end justify-center sm:justify-end border-t-2 pt-8'>
          <button
            type='submit'
            className='border font-bold border-primary-400 py-2 px-8 rounded-md text-primary-400 hover:bg-primary-50/30'
          >
            Request a Call Back
          </button>
        </div>

        {showCustomToast ? (
          <Toast type={toastData.type} message={toastData.message} onClose={() => setShowCustomToast(false)} />
        ) : null}

        {showToast ? <NotificationToast onClose={() => setShowToast(false)} /> : null}
      </form>
    </div>
  );
};

export default ContactForm;
