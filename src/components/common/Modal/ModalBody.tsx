interface ModalBodyProps {
  children: React.ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return (
    <div className='h-auto max-h-[calc(100vh_-_200px)] overflow-auto py-4 px-5'>{children}</div>
  );
};

export default ModalBody;
