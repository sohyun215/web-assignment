import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/style';

interface ProductCardProps {
  productNo: number;
  productName: string;
  price: number;
  discountRate: number;
  imageUrl: string;
  freeShipping: boolean;
}

const ProductCard = ({
  productNo,
  productName,
  price,
  discountRate,
  imageUrl,
  freeShipping,
}: ProductCardProps) => {
  const discountPrice = price - (price * discountRate) / 100;

  return (
    <li className="shadow-card mt-4 block h-[119px] w-full rounded-[10px] p-2">
      <Link href={`/product/detail/${productNo}`} className="flex h-full gap-4">
        <Image
          src={imageUrl}
          priority
          width={105}
          height={105}
          alt={productName}
          className="h-auto rounded-md object-cover"
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
