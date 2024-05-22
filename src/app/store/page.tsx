import ProductList from '@/components/Product/ProductList';
import Header from '@/components/common/Header';
import NavBar from '@/components/common/NavBar';

const StorePage = () => {
  return (
    <>
      <Header title="스토어" />
      <main className="mx-auto px-4 pb-24 pt-20 lg:w-[1024px]">
        <ProductList />
      </main>
      <NavBar />
    </>
  );
};

export default StorePage;
