interface ModalFooterProps {
  children: React.ReactNode;
  disableFlexEnd?: boolean;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, disableFlexEnd = false }) => {
  return (
    <div
      className={`py-3 px-5 border-t border-t-gray-300 dark:border-t-gray-600 flex items-center ${
        !disableFlexEnd ? 'justify-end' : ''
      } gap-2`}
    >
      {children}
    </div>
  );
};

export default ModalFooter;
