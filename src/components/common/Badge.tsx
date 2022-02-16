import { memo } from 'react';

interface BadgeProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

const Badge: React.FC<BadgeProps> = ({ title, variant = 'secondary' }) => {
  let variantClass = '';
  if (variant === 'primary') {
    variantClass = 'bg-gray-200 shadow-gray-500/20 text-gray-700';
  } else if (variant === 'secondary') {
    variantClass = 'bg-gray-500 text-white';
  }
  return <div className={`text-xs px-2 shadow-sm py-1 rounded-md ${variantClass}`}>{title}</div>;
};

export default memo(Badge);
