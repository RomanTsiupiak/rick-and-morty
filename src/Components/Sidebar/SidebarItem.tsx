import React, { useEffect, useState } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import clsx from 'clsx';

type SidebarItemProps = {
  name: string;
  to: string;
  icon: React.ReactElement;
};

export const SidebarItem = ({ name, to, icon }: SidebarItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const match = useMatch({ path: to, end: true });

  useEffect(() => {
    setIsActive(!!match);
  }, [match]);

  const classes = clsx(
    `${isActive ? 'text-[#5368ED] border-b-[1px] border-solid border-[#5368ED] rounded-xl' : 'text-[#9A9A9A]'}`,
    'w-full flex p-[16px] gap-[16px] hover:bg-[#EEEEEE] rounded cursor-pointer'
  );

  return (
    <NavLink to={to}>
      <div className={classes}>
        <div>{icon}</div>
        <p>{name}</p>
      </div>
    </NavLink>
  );
};
