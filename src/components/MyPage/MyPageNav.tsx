import Image from 'next/image';
import Link from 'next/link';

const MyPageNav = () => {
  return (
    <ul className="flex justify-between py-5 md:justify-evenly">
      <li className="block w-16">
        <Link
          href="/mypage/wishlist"
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/icons/heart.svg"
            width={24}
            height={24}
            alt="찜 리스트"
          />
          <span className="font-medium">찜 리스트</span>
        </Link>
      </li>
      <li className="block w-16">
        <Link
          href="/mypage/coupon"
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/icons/coupon.svg"
            width={24}
            height={24}
            alt="내 쿠폰함"
          />
          <span className="font-medium">내 쿠폰함</span>
        </Link>
      </li>
      <li className="block w-16">
        <Link
          href="/mypage/point"
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/icons/point.svg"
            width={24}
            height={24}
            alt="내 적립금"
          />
          <span className="font-medium">내 적립금</span>
        </Link>
      </li>
    </ul>
  );
};

export default MyPageNav;
