import React from 'react';

import { UiDivider } from './UiDivider';

type PageLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="w-full h-full p-[24px]">
      <h1 className="text-4xl font-bold">{title}</h1>
      <UiDivider direction="x" />
      <div className="w-full h-full mt-[32px]">{children}</div>
    </div>
  );
};
