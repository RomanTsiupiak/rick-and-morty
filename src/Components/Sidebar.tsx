import React from 'react';

import { LogoIcon, UserIcon, LocationIcon, DashboardIcon, PlayIcon } from './Icons';

const pages = [
  { id: 1, to: '/dashboard', name: 'Dashboard', icon: <DashboardIcon /> },
  { id: 2, to: '/characters', name: 'Characters', icon: <UserIcon /> },
  { id: 3, to: '/locations', name: 'Locations', icon: <LocationIcon /> },
  { id: 4, to: '/episodes', name: 'Episodes', icon: <PlayIcon /> },
];

const Sidebar = () => {
  return (
    <div className="w-[256px] h-full bg-[#FFFFFF] flex flex-col items-center pt-[16px]">
      <div className="flex gap-[16px] items-center">
        <LogoIcon size="64" />
        <p>Rick and Morty</p>
      </div>
      <div className="w-full mt-[32px]">
        {pages.map((item) => (
          <div
            key={item.id}
            className="w-full flex p-[16px] gap-[16px] hover:bg-[#EEEEEE] hover:rounded hover:border-b-[1px] hover:border-solid hover:border-[#DDDDDD] cursor-pointer"
          >
            <div>{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
