import Image from 'next/image';
import React from 'react';
import ContactForm from '../../ContactForm';

interface NestedChildModalProps {
  closeChildModal: () => void;
}

const NestedChildModal: React.FC<NestedChildModalProps> = ({ closeChildModal }) => {
  return (
    <div className='fixed sm:absolute min-h-screen w-full inset-0 z-50 sm:z-30 flex sm:items-center justify-center bg-[#0e0e0ecf] sm:bg-[#888686] pb-4 sm:pb-0 example overflow-y-scroll example'>
      <div className='w-full sm:w-11/12 h-min lg:w-3/4 mt-20 sm:mt-0 bg-white rounded-5xl lg:rounded-lg  shadow-lg overflow-hidden'>
        {/* Modal Header */}
        <div className='sticky top-0 left-0 bg-white z-10 border-b-4 lg:border-b-0 mb-2 flex items-center justify-end px-4 py-3'>
          <Image
            height={100}
            width={50}
            className='absolute top-2 left-1/2 transform -translate-x-1/2 lg:hidden flex'
            src={'/icons/modalicon/dashicon.svg'}
            alt='dashicon'
          />
          <Image
            height={25}
            width={25}
            onClick={closeChildModal}
            src={'/icons/modalicon/close.svg'}
            alt='close-icon'
            className='cursor-pointer'
          />
        </div>

        {/* Modal Body */}
        <div className='h-full w-full flex flex-col lg:flex-row pb-10 px-14 '>
          <ContactForm text={'Reach out to us'} onClose={closeChildModal} />
        </div>
      </div>
    </div>
  );
};

export default NestedChildModal;
