interface InputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  name: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, className, label, onChange, ...rest }) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border-[1px] border-gray-200/50 dark:border-gray-700 bg-gray-50 dark:bg-transparent focus:ring-0 outline-none focus:outline-none px-4 py-2 rounded-md  ${
        className || ''
      } disabled:text-gray-700/40 `}
      {...rest}
    />
  );
};

export default Input;
