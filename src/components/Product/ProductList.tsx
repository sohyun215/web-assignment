import { Product } from '@/types/product';
import ProductCard from './ProductCard';

const ProductList = async () => {
  const res = await fetch('http://localhost:3000/api/product');
  const { productList }: { productList: Product[] } = await res.json();

  return (
    <ul className="mx-auto grid gap-4 lg:grid-cols-4 lg:gap-8">
      {productList.map((product) => (
        <ProductCard key={product.productNo} {...product} />
      ))}
    </ul>
  );
};

export default ProductList;
