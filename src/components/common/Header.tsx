import Image from 'next/image';
import Link from 'next/link';

const Header = ({ title }: { title?: string }) => {
  return (
    <header className="fixed flex h-16 w-full items-center justify-between bg-bgIvory px-4">
      <h1 className="font-bold">{title}</h1>
      <Link href="/cart">
        <Image
          src="/icons/cart.svg"
          width={24}
          height={24}
          alt="장바구니 아이콘"
        />
      </Link>
    </header>
  );
};

export default Header;
