import React from 'react';

export const Input = ({ type = 'text', value, onChange, className, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`border rounded-md p-2 ${className}`}
      placeholder={placeholder}
    />
  );
};
export default Input