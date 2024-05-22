'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/style';

const TopNavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-20 hidden h-16 w-full items-center shadow-[0_3px_16px_1px_rgba(0,0,0,0.05)] lg:flex">
      <div className="mx-auto flex w-full items-center justify-between px-4 lg:w-[1024px]">
        <h1 className="text-xl font-bold">Logo</h1>
        <ul className="flex gap-8 text-lg">
          <li>
            <Link
              href="/"
              className={cn(
                'hover:text-green02',
                pathname === '/' && 'text-green01',
              )}
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              href="/store"
              className={cn(
                'hover:text-green02',
                pathname === '/store' && 'text-green01',
              )}
            >
              스토어
            </Link>
          </li>
          <li>
            <Link
              href="/magazine"
              className={cn(
                'hover:text-green02',
                pathname === '/magazine' && 'text-green01',
              )}
            >
              매거진
            </Link>
          </li>
          <li>
            <Link
              href="/mypage"
              className={cn(
                'hover:text-green02',
                pathname === '/mypage' && 'text-green01',
              )}
            >
              마이페이지
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <Image
                src="/icons/cart.svg"
                width={24}
                height={24}
                alt="장바구니 아이콘"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
