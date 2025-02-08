import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, className = '' }) => {
  const baseStyles = `
    font-medium
    text-mob-body-md
    sm:text-body-md
    bg-gradient-to-r 
    from-[#77CBF5]
    to-primary-400
    lg:from-primary-100
    lg:to-primary-500 
    py-3
    sm:py-4
    px-8
    sm:px-6
    rounded-md 
    transition 
    duration-300 
    ease-in-out 
    text-white
    hover:shadow-button-glow
  `;

  return (
    <Link href={href} className={`${baseStyles} ${className}`.trim()}>
      {children}
    </Link>
  );
};

export default LinkButton;
