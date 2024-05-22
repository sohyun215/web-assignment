import ProductList from '@/components/Product/ProductList';
import Header from '@/components/common/Header';
import BottomNavBar from '@/components/common/Navigation/BottomNavBar';

const StorePage = () => {
  return (
    <>
      <Header title="스토어" />
      <main className="mx-auto px-4 pb-24 pt-20 lg:w-[1024px]">
        <ProductList />
      </main>
      <BottomNavBar />
    </>
  );
};

export default StorePage;
