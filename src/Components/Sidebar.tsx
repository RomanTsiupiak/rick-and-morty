import React from 'react';

import { LogoIcon } from './Icons';

const Sidebar = () => {
  return (
    <div className="max-w-[300px] h-full bg-amber-600 flex flex-col items-center p-[8px]">
      <div className="flex gap-[16px] items-center">
        <LogoIcon size="64" />
        <p>Rick and Morty</p>
      </div>
    </div>
  );
};

export default Sidebar;
