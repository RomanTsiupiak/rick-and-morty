import React from 'react';

import { UiDivider } from './UiDivider';

type PageLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="w-full min-h-full p-[24px] box-border">
      <h1 className="text-4xl font-bold">{title}</h1>
      <UiDivider direction="x" />
      <div className="w-full h-[calc(100vh_-_97px)] overflow-auto">{children}</div>
    </div>
  );
};
