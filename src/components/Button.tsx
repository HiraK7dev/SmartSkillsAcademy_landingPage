
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
  const baseClasses = "rounded font-medium transition-all duration-300 ease-in-out transform active:scale-[0.98] flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-sm",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
    outline: "bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800/5"
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
