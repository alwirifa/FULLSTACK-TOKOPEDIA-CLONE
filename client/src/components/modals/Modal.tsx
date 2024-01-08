import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/50" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow transition-all duration-500 ease-in-out
          ${open ? "translate-y-0 opacity-100" : "translate-y-[500px] opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-full text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <IoCloseOutline size={24}/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
