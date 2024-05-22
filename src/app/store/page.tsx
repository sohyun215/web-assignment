import ProductList from '@/components/Product/ProductList';
import Header from '@/components/common/Header';
import NavBar from '@/components/common/NavBar';

const StorePage = () => {
  return (
    <>
      <Header title="스토어" />
      <main className="px-4 pb-24 pt-20">
        <ProductList />
      </main>
      <NavBar />
    </>
  );
};

export default StorePage;
