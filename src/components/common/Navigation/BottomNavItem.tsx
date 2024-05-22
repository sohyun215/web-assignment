'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/style';
interface NavItemProps {
  path: string;
  name: string;
  Icon: ({ className }: { className: string }) => JSX.Element;
}

const BottomNavItem = ({ path, name, Icon }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <div className="w-[70px]">
      <Link href={path} className="flex flex-col items-center">
        <Icon
          className={cn('text-mainGray', path === pathname && 'text-green01')}
        />
        <span
          className={cn(
            'text-xs text-mainGray',
            path === pathname && 'font-medium text-green01',
          )}
        >
          {name}
        </span>
      </Link>
    </div>
  );
};

export default BottomNavItem;
