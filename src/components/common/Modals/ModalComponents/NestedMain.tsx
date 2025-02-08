import React from 'react';
import Image from 'next/image';
import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';
import BeWiseTypography from '../../BeWiseTypography';
import { GradientButton } from '../../buttons';

interface BenefitDetails {
  id: number;
  title: string;
  info: string;
  cardImage: string;
  modalImage: string;
  objectives: { description: string; details?: string[] }[];
}
interface NestedMainProps {
  closeMainModal: () => void;
  openChildModal: () => void;
  benefitDetails: BenefitDetails;
}

const NestedMain: React.FC<NestedMainProps> = ({ closeMainModal, openChildModal, benefitDetails }) => {
  return (
    <div className='fixed sm:absolute inset-0 z-50 sm:z-30 flex sm:items-center justify-center bg-[#0e0e0ecf] sm:bg-[#888686] overflow-y-scroll pb-4 sm:pb-0 example'>
      <div className='w-full sm:w-11/12 h-min lg:w-4/5 mt-20 sm:mt-0 bg-white rounded-5xl sm:rounded-xl shadow-lg overflow-y-scroll overflow-x-hidden overflow-hidden example'>
        {/* Modal Header */}
        <div className='sticky block lg:hidden top-0 left-0 bg-white z-10 border-b-4 lg:border-b-0 mb-2 flex items-center justify-end px-6 sm:px-4 py-3'>
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
            onClick={closeMainModal}
            src={'/icons/modalicon/close.svg'}
            alt='close-icon'
            className='cursor-pointer'
          />
        </div>

        {/* Modal Body */}
        <div className='h-full w-full flex flex-col lg:flex-row'>
          {/* Left Side: Image */}
          <div className='w-full lg:w-1/2 flex overflow-hidden items-center justify-center'>
            <Image
              height={200}
              width={500}
              className='hidden lg:block h-full w-full object-center object-cover'
              src={benefitDetails?.modalImage}
              alt='card'
            />
            <Image
              width={100}
              height={100}
              className='lg:hidden object-contain object-center p-4 sm:p-6 w-full'
              src={benefitDetails?.modalImageMobile}
              alt={`Image for ${benefitDetails.title}`}
            />
          </div>

          {/* Right Side: Content */}
          <div className='w-full flex flex-col items-start justify-start p-4'>
            <div className='hidden w-full lg:flex items-center justify-end px-4 py-4'>
              <Image
                height={30}
                width={30}
                onClick={closeMainModal}
                src={'/icons/modalicon/close.svg'}
                alt='close-icon'
                className='cursor-pointer'
              />
            </div>

            <div className='h-full w-full '>
              <div className='h-full w-full'>
                <div
                  key={benefitDetails.id}
                  className={`mb-4 p-0 sm:p-4 flex flex-col gap-6 text-start bg-contain ${benefitDetails.id == 1 ? 'bg-entrepreneurship-bg' : benefitDetails.id == 2 ? 'bg-studyabroad-bg' : benefitDetails.id == 3 ? 'bg-Internshiphub-bg' : benefitDetails.id == 4 ? 'bg-financial-bg' : null}  bg-no-repeat bg-center object-contain`}
                >
                  <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H5}>{benefitDetails.title}</BeWiseTypography>
                  <div className='mx-5'>
                    {benefitDetails?.objectives?.map((objective, key) => (
                      <div key={key} className='mt-2'>
                        <ul className='list-disc font-medium'>
                          <li className='text-md text-start text-gray-800 '>{objective?.description}</li>
                        </ul>
                        {
                          <div className='ml-4 lg:ml-6 mt-1'>
                            {objective.details?.map((objDetail, index) => (
                              <div key={index} className='flex text-md text-gray-800'>
                                <li></li>
                                <li className='list-none text-nowrap mr-1 font-bold'>{objDetail?.stage}</li>
                                <li className='list-none'>{objDetail?.targetAudience}</li>
                              </div>
                            ))}
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                  <div className='w-full text-start'>{benefitDetails?.providedBy}</div>
                  <div className='text-white text-center lg:text-start'>
                    <GradientButton text={'Reach Out to Us'} onOpen={openChildModal} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedMain;
