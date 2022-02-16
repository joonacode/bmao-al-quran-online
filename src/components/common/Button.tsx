import Link from 'next/link';

export interface ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  isLink?: boolean;
  variant?: 'primary' | 'success' | 'secondary' | 'warning' | 'outlineWarning' | 'outlinePrimary';
  href?: any;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  isLoading,
  isDisabled,
  variant,
  children,
  className,
  onClick,
  isLink,
  href,
  size,
  ...rest
}) => {
  let classNameArr = [
    'rounded-md shadow-md text-white dark:text-gray-800 flex items-center justify-center',
    'bg-gray-400 dark:bg-gray-200',
  ];

  if (variant) {
    classNameArr.pop();
    if (variant === 'primary') {
      classNameArr.push('bg-blue-300 dark:bg-blue-200');
    } else if (variant === 'warning') {
      classNameArr.push('bg-orange-400 dark:bg-orange-300');
    } else if (variant === 'success') {
      classNameArr.push('bg-emerald-500 dark:bg-emerald-300');
    } else if (variant === 'secondary') {
      classNameArr.push('bg-stone-500 dark:bg-stone-200');
    } else if (variant === 'outlineWarning') {
      classNameArr.push(
        'bg-transparent border-[1px] border-orange-300 dark:text-orange-100 text-orange-500',
      );
    } else if (variant === 'outlinePrimary') {
      classNameArr.push(
        'bg-transparent border-[1px] border-blue-300 dark:text-orange-100 text-gray-800 dark:text-white',
      );
    }
  }

  if (size === 'sm') {
    classNameArr.push('px-2 h-[32px] min-w-[35px] text-sm');
  } else if (size === 'lg') {
    classNameArr.push('px-3 h-9 text-lg');
  } else {
    classNameArr.push('px-3 h-9');
  }

  if (isLoading) {
    return (
      <button
        type={'button'}
        className={`${classNameArr.join(' ')} cursor-pointer ${className ? className : ''}`}
        {...rest}
      >
        Loading..
      </button>
    );
  }

  if (isDisabled) {
    return (
      <button
        type={'button'}
        className={`${classNameArr.join(' ')} cursor-default opacity-50 ${
          className ? className : ''
        }`}
        {...rest}
      >
        {children}
      </button>
    );
  }

  if (isLink) {
    return (
      <Link href={href}>
        <a
          className={`${classNameArr.join(' ')} cursor-pointer ${className ? className : ''}`}
          {...rest}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${classNameArr.join(' ')} cursor-pointer ${className ? className : ''}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
