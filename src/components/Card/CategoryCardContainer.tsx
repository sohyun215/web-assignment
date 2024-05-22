import CategoryCard from './CategoryCard';

const CategoryCardContainer = () => {
  return (
    <section className="flex flex-wrap gap-4">
      <CategoryCard title="스토어" path="/store" iconImg="/icons/store.svg" />
      <CategoryCard
        title="내 쿠폰함"
        path="/mypage/coupon"
        iconImg="/icons/coupon.svg"
      />
      <CategoryCard
        title="매거진"
        path="/magazine"
        iconImg="/icons/magazine.svg"
      />
      <CategoryCard title="이벤트" path="/event" iconImg="/icons/event.svg" />
    </section>
  );
};

export default CategoryCardContainer;
