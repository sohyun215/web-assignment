'use client';

import { NAVIGATIONS } from '@/constants/navigation';
import BottomNavItem from './BottomNavItem';

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 flex h-[70px] w-full justify-center bg-white pt-2 shadow-[0_3px_16px_1px_rgba(0,0,0,0.15)] lg:hidden">
      <div className="flex w-full justify-evenly lg:w-[1024px]">
        {NAVIGATIONS.map((item) => (
          <BottomNavItem
            key={item.name}
            path={item.path}
            name={item.name}
            Icon={item.icon}
          />
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
