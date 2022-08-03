import clsx from 'clsx';
import { memo } from 'react';

interface BadgeProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

const Badge: React.FC<BadgeProps> = ({ title, variant = 'secondary' }) => {
  return <div className={clsx(`text-xs px-2 shadow-sm py-1 rounded-md`,
    variant === 'primary' && 'bg-gray-200 shadow-gray-500/20 text-gray-700',
    variant === 'secondary' && 'bg-gray-500 text-white')}
  >{title}</div>;
};

export default memo(Badge);
