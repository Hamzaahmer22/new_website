import React from 'react';

export const Button = ({ onClick, children, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 rounded-md bg-blue-500 text-white ${className}`}
    >
      {children}
    </button>
  );
};