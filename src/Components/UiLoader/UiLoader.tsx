import React from 'react';
import clsx from 'clsx';

import './UiLoader.css';

type UiLoaderProps = {
  isFull?: boolean;
  size?: 's' | 'm' | 'l';
} & React.ComponentProps<'svg'>;

const UiLoader = ({ isFull = false, size = 'm', className, ...rest }: UiLoaderProps) => {
  const classes = clsx(
    'ui_loader',
    size === 's' && 'w-[24px] h-[24px]',
    size === 'm' && 'w-[42px] h-[42px]',
    size === 'l' && 'w-[64px] h-[64px]',
    className
  );
  const loader = (
    <svg width={70} height={70} viewBox="0 0 48 48" className={classes} {...rest}>
      <circle className="ui_loader__circle" r="20" cx="24" cy="24" fill="none" stroke="currentColor" strokeWidth={4} />
    </svg>
  );

  if (isFull) {
    return <div className="fixed bg-[#E5E5ED]/30 inset-0 flex items-center justify-center">{loader}</div>;
  }

  return loader;
};

export default UiLoader;
