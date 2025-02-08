'use client';
import React, { useState } from 'react';
import NestedMain from './ModalComponents/NestedMain';
import NestedChildModal from './ModalComponents/NestedChildModal';

interface BenefitDetails {
  id: number;
  title: string;
  info: string;
  cardImage: string;
  modalImage: string;
  objectives: { description: string; details?: string[] }[];
}
interface NestedModalsProps {
  benefitDetails: BenefitDetails;
}

const NestedModals: React.FC<NestedModalsProps> = ({ benefitDetails }) => {
  const [isMainModalOpen, setIsMainModalOpen] = useState(false);
  const [isChildModalOpen, setIsChildModalOpen] = useState(false);

  const openMainModal = () => setIsMainModalOpen(true);
  const closeMainModal = () => setIsMainModalOpen(false);

  const openChildModal = () => {
    setIsChildModalOpen(true);
    closeMainModal(); // Close the parent modal
  };

  const closeChildModal = () => setIsChildModalOpen(false);

  return (
    <div className='text-center'>
      {/* Button to open Main Modal */}
      <button
        className='border-2 font-medium lg:border border-primary-400 text-body-sm py-1 px-6 rounded-md text-primary-400 hover:bg-primary-50/30'
        onClick={openMainModal}
      >
        View More
      </button>

      {/* Main Modal */}
      {isMainModalOpen ? (
        <NestedMain closeMainModal={closeMainModal} benefitDetails={benefitDetails} openChildModal={openChildModal} />
      ) : null}

      {/* Child Modal */}
      {isChildModalOpen ? <NestedChildModal closeChildModal={closeChildModal} /> : null}
    </div>
  );
};

export default NestedModals;
