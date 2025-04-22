import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  name,
  role,
  avatar,
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 flex flex-col h-full border border-primary-900/20 shadow-[0_4px_20px_-4px_rgba(11,27,63,0.2)]"
      whileHover={{ y: -5, boxShadow: '0 8px 30px -6px rgba(11,27,63,0.25)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 text-primary-800">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11H6.21C6.48 9.2 7.48 7.5 10 7V4C6 4.5 3 7.5 3 11.5C3 15 5.5 17 8 17C10.5 17 12 15.5 12 13C12 12 11 11 10 11ZM22 11H18.21C18.48 9.2 19.48 7.5 22 7V4C18 4.5 15 7.5 15 11.5C15 15 17.5 17 20 17C22.5 17 24 15.5 24 13C24 12 23 11 22 11Z"/>
        </svg>
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow">{content}</p>
      
      <div className="flex items-center mt-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-semibold text-primary-900">{name}</p>
          <p className="text-sm text-primary-800">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;