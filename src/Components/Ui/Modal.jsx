// src/components/ui/modal.jsx
import React, { useState } from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-black">X</button>
        {children}
      </div>
    </div>
  );
};
