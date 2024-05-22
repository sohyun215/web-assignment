import CategoryCardContainer from '@/components/Card/CategoryCardContainer';
import Header from '@/components/common/Header';
import NavBar from '@/components/common/NavBar';

const HomePage = () => {
  return (
    <>
      <Header title="홈" />
      <main className="px-4 pb-[70px] pt-24">
        <CategoryCardContainer />
      </main>
      <NavBar />
    </>
  );
};

export default HomePage;
