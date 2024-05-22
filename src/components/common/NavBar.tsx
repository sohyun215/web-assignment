'use client';

import { NAVIGATIONS } from '@/constants/navigation';
import NavItem from './NavItem';

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 flex h-[70px] w-full justify-evenly bg-white pt-2 shadow-[0_3px_16px_1px_rgba(0,0,0,0.15)]">
      {NAVIGATIONS.map((item) => (
        <NavItem
          key={item.name}
          path={item.path}
          name={item.name}
          Icon={item.icon}
        />
      ))}
    </nav>
  );
};

export default NavBar;
