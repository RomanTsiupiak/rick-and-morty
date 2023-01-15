import React from 'react';

type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="w-full h-full p-[24px]">
      <h1 className="text-4xl font-bold">{title}</h1>
      {children}
    </div>
  );
};
