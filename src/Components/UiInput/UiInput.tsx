import React from 'react';
import clsx from 'clsx';

type UiInputProps = {
  className?: string;
  withIcon?: boolean;
  icon?: React.ReactNode;
} & React.ComponentProps<'input'>;

export const UiInput = ({ withIcon, icon, className, ...rest }: UiInputProps) => {
  return (
    <div className="relative">
      {icon}
      <input
        className={clsx(
          'border-solid border-[1px] outline-none px-[16px] py-[4px] rounded-md',
          withIcon && 'pr-[32px]',
          className
        )}
        {...rest}
      />
    </div>
  );
};
