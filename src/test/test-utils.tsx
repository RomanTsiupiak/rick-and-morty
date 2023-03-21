import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

type RenderProvidersProps = {
  children: React.ReactNode;
};

const RenderProviders = ({ children }: RenderProvidersProps) => <BrowserRouter>{children}</BrowserRouter>;

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: RenderProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
