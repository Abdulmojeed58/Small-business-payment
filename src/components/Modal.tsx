import React from "react";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ children, className }) => {
  //   if (!isModalOpen) return;
  return (
    <div
      className={`${className} bg-[rgba(0,0,0,0.23)] absolute inset-0 h-full w-full z-10`}
    >
      {children}
    </div>
  );
};

export default Modal;
