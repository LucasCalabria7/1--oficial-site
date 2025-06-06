import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium',
  variant = 'dark' 
}) => {
  const sizeMap = {
    small: 'h-8',
    medium: 'h-10',
    large: 'h-12 md:h-14',
  };
  
  return (
    <img 
      src="/src/assets/logo-sem-bg.png" 
      alt="1% World" 
      className={`${sizeMap[size]} w-auto`}
    />
  );
};

export default Logo;