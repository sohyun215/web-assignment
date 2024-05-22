'use client';

import { cn } from '@/utils/style';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  path: string;
  name: string;
  Icon: ({ className }: { className: string }) => JSX.Element;
}

const NavItem = ({ path, name, Icon }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <div className="flex w-[70px] flex-col items-center">
      <Link href={path}>
        <Icon
          className={cn('text-mainGray', path === pathname && 'text-green01')}
        />
      </Link>
      <span
        className={cn(
          'text-mainGray text-sm',
          path === pathname && 'text-green01',
        )}
      >
        {name}
      </span>
    </div>
  );
};

export default NavItem;
