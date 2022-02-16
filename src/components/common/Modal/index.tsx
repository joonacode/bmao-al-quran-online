import ModalContext from '@context/ModalContext';
import React, { useEffect, useRef } from 'react';
import { Zoom } from 'react-awesome-reveal';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnClickOverlay?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  zIndex?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  closeOnClickOverlay = true,
  size = 'md',
  zIndex = 'z-50',
}) => {
  const refModal = useRef<HTMLDivElement>(null);

  let sizeClassName = '';
  if (size === 'xs') {
    sizeClassName = 'w-[95%] sm:w-[400px]';
  } else if (size === 'sm') {
    sizeClassName = 'w-[95%] sm:w-[550px]';
  } else if (size === 'md') {
    sizeClassName = 'w-[95%] sm:w-[600px]';
  } else if (size === 'lg') {
    sizeClassName = 'w-[95%] md:w-[768px]';
  } else if (size === 'xl') {
    sizeClassName = 'w-[95%] lg:w-[80%]';
  } else if (size === 'full') {
    sizeClassName = 'w-[100%]';
  }

  useEffect(() => {
    const handleClick = (e: any) => {
      if (refModal.current?.contains(e.target)) {
        return;
      }
      if (closeOnClickOverlay) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onClose, closeOnClickOverlay]);

  if (isOpen) {
    return (
      <ModalContext.Provider
        value={{
          isOpen,
          setIsOpen: onClose,
        }}
      >
        <div
          className={`${zIndex} flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-gray-700/50 dark:bg-gray-900/80 overflow-auto`}
        >
          <div ref={refModal} className='w-full sm:w-auto'>
            <Zoom duration={400} delay={0}>
              <div className={`${sizeClassName} mx-auto bg-white dark:bg-gray-700 rounded-md`}>
                {children}
              </div>
            </Zoom>
          </div>
        </div>
      </ModalContext.Provider>
    );
  }
  return null;
};

export default Modal;
