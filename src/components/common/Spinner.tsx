import { FiLoader } from 'react-icons/fi';

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return <FiLoader className={`animate-spin ${className}`} />;
};

export default Spinner;
