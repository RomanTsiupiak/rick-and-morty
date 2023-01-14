import React from 'react';

import { LogoIcon, UserIcon, LocationIcon, DashboardIcon, PlayIcon } from '../Icons';

import { SidebarItem } from './SidebarItem';

const pages = [
  { id: 1, to: '/dashboard', name: 'Dashboard', icon: <DashboardIcon size="24" /> },
  { id: 2, to: '/characters', name: 'Characters', icon: <UserIcon size="24" /> },
  { id: 3, to: '/locations', name: 'Locations', icon: <LocationIcon size="24" /> },
  { id: 4, to: '/episodes', name: 'Episodes', icon: <PlayIcon size="24" /> },
];

const Sidebar = () => {
  return (
    <div className="w-[256px] h-full bg-[#FFFFFF] flex flex-col items-center pt-[16px] flex-shrink-0">
      <div className="flex gap-[16px] items-center">
        <LogoIcon size="64" />
        <p>Rick and Morty</p>
      </div>
      <div className="w-full mt-[32px]">
        {pages.map((item) => (
          <SidebarItem key={item.id} name={item.name} to={item.to} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
