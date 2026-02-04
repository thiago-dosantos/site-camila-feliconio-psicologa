// components/Button.tsx
import { ReactNode } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: ReactNode;
  showWhatsAppIcon?: boolean;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  icon,
  showWhatsAppIcon = false 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0';
  
  const variants = {
    primary: 'bg-[#D9A299] text-white hover:bg-[#c98e86]',
    secondary: 'bg-[#F0E4D3] text-[#2C1810] hover:bg-[#e4d5c1]',
    outline: 'border-2 border-[#D9A299] text-[#D9A299] hover:bg-[#D9A299] hover:text-white'
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  const buttonContent = (
    <>
      {showWhatsAppIcon && <FaWhatsapp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />}
      {icon}
      <span className="transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${buttonClass} group`} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${buttonClass} group`}>
      {buttonContent}
    </button>
  );
}