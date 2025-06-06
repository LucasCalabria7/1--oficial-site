import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  fullWidth = false,
  external = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl';
  
  const variantClasses = {
    primary: 'relative overflow-hidden bg-gradient-to-r from-primary-700 via-primary-500 to-primary-300 text-white before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-300 before:via-primary-500 before:to-primary-700 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 shadow-[0_4px_20px_-4px_rgba(87,108,237,0.3)] hover:shadow-[0_8px_25px_-5px_rgba(87,108,237,0.5)]',
    outline: 'bg-transparent border-2 border-primary-300 text-primary-300 hover:bg-primary-300/10 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(87,108,237,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(87,108,237,0.2)]',
    text: 'text-primary-300 hover:text-primary-500 hover:bg-primary-300/10 backdrop-blur-sm',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const width = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${width} ${className}`;
  
  const content = (
    <span className="relative z-10 flex items-center justify-center">
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </span>
  );
  
  const buttonVariants = {
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: {
      y: 0,
      transition: { duration: 0.1 },
    },
  };
  
  if (href) {
    return (
      <motion.a
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      className={classes}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
};

export default Button;