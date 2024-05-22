import Image from 'next/image';
import Link from 'next/link';

const Header = ({ title }: { title?: string }) => {
  return (
    <header className="fixed z-10 flex h-16 w-full bg-bgIvory">
      <div className="absolute flex h-full w-full items-center justify-between px-4 lg:left-1/2  lg:w-[1024px] lg:-translate-x-1/2">
        <h1 className="font-bold">{title}</h1>
        <Link href="/cart">
          <Image
            src="/icons/cart.svg"
            width={24}
            height={24}
            alt="장바구니 아이콘"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
