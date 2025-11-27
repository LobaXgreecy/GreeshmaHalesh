import React from 'react';

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  size?: 'normal' | 'large' | 'tall' | 'wide';
  delay?: number;
}

export const BentoItem: React.FC<BentoItemProps> = ({ children, className = '', size = 'normal', delay = 0 }) => {
  // Map size prop to Tailwind col/row spans
  const sizeClasses = {
    normal: 'col-span-1 row-span-1',
    large: 'col-span-1 md:col-span-2 row-span-2',
    tall: 'col-span-1 row-span-2',
    wide: 'col-span-1 md:col-span-2 row-span-1',
  };

  return (
    <div 
      className={`
        relative overflow-hidden rounded-xl p-6 md:p-8
        bg-card border border-glass-border
        transition-all duration-500 ease-out
        hover:border-gray-600 hover:shadow-2xl
        animate-slide-up
        ${sizeClasses[size]}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};