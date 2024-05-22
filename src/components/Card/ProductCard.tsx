import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/style';
import { Product } from '@/types/product';

const ProductCard = ({
  productNo,
  productName,
  price,
  discountRate,
  imageUrl,
  freeShipping,
}: Product) => {
  const discountPrice = price - (price * discountRate) / 100;

  return (
    <li className="shadow-card block h-[119px] w-full rounded-[10px] p-2 md:h-40 lg:h-96 lg:w-56">
      <Link
        href={`/product/detail/${productNo}`}
        className="flex h-full gap-4 lg:flex-col"
      >
        <Image
          src={imageUrl}
          priority
          width={0}
          height={0}
          sizes="100vw"
          alt={productName}
          className="h-[105px] w-[105px] rounded-md object-cover md:h-36 md:w-36 lg:h-64 lg:w-full"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="line-clamp-1 font-medium">{productName}</span>
            {freeShipping && (
              <span className="text-[10px] font-medium">무료배송</span>
            )}
          </div>

          <div className="mt-2">
            <span
              className={cn(
                'text-xs text-[#C8C8C8]',
                price === discountPrice && 'text-base font-bold text-mainText',
              )}
            >
              {price.toLocaleString('ko-KR')}원
            </span>
            {price !== discountPrice && (
              <>
                <div className="flex gap-2 font-bold">
                  <span className="text-mainRed">{discountRate}%</span>
                  <span>{discountPrice.toLocaleString('ko-KR')}원</span>
                </div>
                <div className="text-mainRed text-[10px] font-medium">
                  쿠폰 할인가
                </div>
              </>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
