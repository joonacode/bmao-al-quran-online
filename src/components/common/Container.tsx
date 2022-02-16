interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className = '', children }) => {
  return <div className={`max-w-7xl w-full mx-auto px-5 ${className}`}>{children}</div>;
};

export default Container;
