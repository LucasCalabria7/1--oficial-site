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
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md';
  
  const variantClasses = {
    primary: 'bg-gradient-button text-white shadow-dark hover:shadow-gold transform hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900',
    text: 'text-gold-500 hover:text-gold-400 hover:underline',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const width = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${width} ${className}`;
  
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );
  
  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
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