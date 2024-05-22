import CategoryCardContainer from '@/components/Card/CategoryCardContainer';
import CarouselBanner from '@/components/Carousel/CarouselBanner';
import Header from '@/components/common/Header';
import NavBar from '@/components/common/NavBar';

const HomePage = () => {
  return (
    <>
      <Header title="홈" />
      <main className="mx-auto px-4 pb-[70px] pt-24 lg:w-[1024px]">
        <CarouselBanner />
        <CategoryCardContainer />
      </main>
      <NavBar />
    </>
  );
};

export default HomePage;
