import clsx from 'clsx';
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

  let classNum = clsx('rounded-md shadow-md text-white dark:text-gray-800 flex items-center justify-center',
    !variant && 'bg-gray-400 dark:bg-gray-200',
    variant === 'primary' && 'bg-blue-300 dark:bg-blue-200',
    variant === 'warning' && 'bg-orange-400 dark:bg-orange-300',
    variant === 'success' && 'bg-emerald-500 dark:bg-emerald-300',
    variant === 'secondary' && 'bg-stone-500 dark:bg-stone-200',
    variant === 'outlineWarning' && 'bg-transparent border-[1px] border-orange-300 dark:text-orange-100 text-orange-500',
    variant === 'outlinePrimary' && 'bg-transparent border-[1px] border-blue-300 dark:text-orange-100 text-gray-800 dark:text-white',
    !size && 'px-3 h-9',
    size === 'sm' && 'px-2 h-[32px] min-w-[35px] text-sm',
    size === 'lg' && 'px-3 h-9 text-lg',
    className
  )

  if (isLoading) {
    return (
      <button
        type={'button'}
        className={`${classNum} cursor-pointer`}
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
        className={`${classNum} cursor-default opacity-50`}
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
          className={`${classNum} cursor-pointer`}
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
      className={`${classNum} cursor-pointer`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
