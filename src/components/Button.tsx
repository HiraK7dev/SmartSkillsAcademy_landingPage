
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  onClick,
  type = "button"
}: ButtonProps) => {
  const baseClasses = "rounded-lg font-medium transition-all duration-300 ease-in-out transform active:scale-[0.98] flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-resolutionBlue hover:bg-resolutionBlue/90 text-white shadow-md hover:shadow-lg",
    secondary: "bg-selectiveYellow hover:bg-selectiveYellow/90 text-resolutionBlue shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-resolutionBlue text-resolutionBlue hover:bg-resolutionBlue/5"
  };
  
  const sizeClasses = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-3 px-6",
    lg: "text-lg py-4 px-8"
  };
  
  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
