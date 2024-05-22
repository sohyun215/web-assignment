import CategoryCardContainer from '@/components/Home/CategoryCardContainer';
import CarouselBanner from '@/components/Home/CarouselBanner';
import Header from '@/components/common/Header';
import BottomNavBar from '@/components/common/Navigation/BottomNavBar';
import FloatingButton from '@/components/Home/FloatingButton';

const HomePage = () => {
  return (
    <>
      <Header title="홈" />
      <main className="relative mx-auto px-4 pb-[70px] pt-24 lg:w-[1024px]">
        <CarouselBanner />
        <CategoryCardContainer />
        <FloatingButton />
      </main>
      <BottomNavBar />
    </>
  );
};

export default HomePage;
