import { createContext } from 'react';

interface IContext {
  isOpen: boolean;
  setIsOpen: (status: boolean) => void;
}

const ModalContext = createContext<IContext>({
  isOpen: false,
  setIsOpen: () => null,
});

export default ModalContext;
