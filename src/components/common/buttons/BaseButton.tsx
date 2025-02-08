import React, { ButtonHTMLAttributes } from 'react';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'font-bold rounded-md transition-all duration-200 flex items-center justify-center';

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-400 text-white hover:bg-primary-500';
      case 'secondary':
        return 'bg-secondary-400 text-white hover:bg-secondary-500';
      case 'outline':
        return 'border border-primary-400 text-primary-400 hover:bg-primary-50/30';
      case 'text':
        return 'text-primary-400 hover:bg-primary-50/30';
      default:
        return '';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'py-1 px-4 text-sm';
      case 'md':
        return 'py-2 px-6 text-base';
      case 'lg':
        return 'py-3 px-8 text-lg';
      default:
        return '';
    }
  };

  const buttonClasses = [baseStyles, getVariantStyles(), getSizeStyles(), fullWidth ? 'w-full' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
