
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
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-sm hover:shadow",
    secondary: "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-sm hover:shadow",
    outline: "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
  };
  
  const sizeClasses = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-2.5 px-5",
    lg: "text-lg py-3 px-6"
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
