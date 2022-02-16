import ModalContext from '@context/ModalContext';
import { useContext } from 'react';
import { FiX } from 'react-icons/fi';

interface ModalHeaderProps {
  children: React.ReactNode;
  hideIconClose?: boolean;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, hideIconClose }) => {
  const { setIsOpen } = useContext(ModalContext);

  return (
    <div className='py-4 px-5 border-b border-b-gray-300 dark:border-b-gray-600 flex items-center justify-between'>
      <h5 className='font-bold text-lg'>{children}</h5>
      {!hideIconClose && (
        <span onClick={() => setIsOpen(false)} className='cursor-pointer text-2xl'>
          <FiX />
        </span>
      )}
    </div>
  );
};

export default ModalHeader;
