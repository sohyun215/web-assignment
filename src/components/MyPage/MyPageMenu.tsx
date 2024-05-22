import Link from 'next/link';

const MyPageMenu = () => {
  return (
    <section className="mt-4 flex flex-col gap-6">
      <div>
        <div className="mb-3 text-sm font-bold">MY 쇼핑</div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="#">주문 내역</Link>
          </li>
          <li>
            <Link href="#">취소/반품/교환/환불 내역주문 내역</Link>
          </li>
          <li>
            <Link href="#">멤버십 관리</Link>
          </li>
        </ul>
      </div>

      <div>
        <div className="mb-3 text-sm font-bold">MY 혜택</div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="#">멤버십 혜택</Link>
          </li>
          <li>
            <Link href="#">적립금 교환</Link>
          </li>
        </ul>
      </div>

      <div>
        <div className="mb-3 text-sm font-bold">MY 활동</div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="#">문의하기</Link>
          </li>
          <li>
            <Link href="#">문의내역 확인</Link>
          </li>
          <li>
            <Link href="#">리뷰관리</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MyPageMenu;
