import React from 'react';

import { UiDivider } from './UiDivider';

type PageLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="w-full h-full min-h-full p-[24px] box-border overflow-y-auto">
      <h1 className="text-4xl font-bold">{title}</h1>
      <UiDivider direction="x" />
      <div className="w-full mt-[32px]">{children}</div>
    </div>
  );
};
