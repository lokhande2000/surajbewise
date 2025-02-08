import React from 'react';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
  return (
    <div
      className={`fixed z-50 top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:justify-between px-3 sm:px-6 py-4 rounded-lg shadow-lg transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}
    >
      <span className='text-nowrap'>{message}</span>
      <button className='text-lg' onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
