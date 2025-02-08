'use client';
import React, { useState } from 'react';
import Toast from '../features/toasts/Tost';

const EmailSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState(null);

  const showToast = (type: string, message: string) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      showToast('error', 'Please enter a valid email address.');
      return;
    }

    try {
      const formData = { email };
      const response = await fetch('https://bewise-api-test.azurewebsites.net/api/user/auth/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status === 400) {
          showToast('error', 'Invalid request. Please check your input.');
        } else if (response.status === 500) {
          showToast('error', 'Server error. Please try again later.');
        } else {
          showToast('error', `Error ${response.status}: ${response.statusText}`);
        }
        return;
      }

      showToast('success', 'Subscription successful!');
      setEmail('');
    } catch (error) {
      showToast('error', error.message);
      setEmail('');
    }
  };

  return (
    <div className='flex items-center'>
      <form onSubmit={handleSubscribe} className='flex'>
        <input
          type='email'
          placeholder='Enter email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-4/5 sm:w-56 text-[#2A2A2A] outline-none border-[#CED4DA] text-body-sm border-2 rounded-md h-9 pl-2 sm:px-2 flex-1'
        />
        <button
          type='submit'
          className='bg-primary-400 text-white border text-body-sm font-semibold rounded-md h-9 px-2 sm:px-4 cursor-pointer'
        >
          Subscribe
        </button>
      </form>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  );
};

export default EmailSubscribe;
