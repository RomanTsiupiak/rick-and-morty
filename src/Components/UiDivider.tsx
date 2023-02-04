import React from 'react';

type UiDividerProps = {
  direction: 'x' | 'y';
};

export const UiDivider = ({ direction }: UiDividerProps) => {
  const classes = direction === 'x' ? 'w-full h-[1px] bg-[#DDDDDD] my-[16px]' : 'w-[1px] h-full bg-[#DDDDDD] mx-[16px]';
  return <div className={classes} />;
};
