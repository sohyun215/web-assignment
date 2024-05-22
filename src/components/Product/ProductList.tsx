import ProductCard from '../Card/ProductCard';

const DUMMY_PRODUCTS = [
  {
    productNo: 1,
    productName: '비타민C',
    imageUrl:
      'https://img.freepik.com/premium-photo/vitamin-bottle-with-orange-multivitamin-supplement-mockup_875825-89536.jpg?w=1480',
    price: 30000,
    discountRate: 20,
    freeShipping: false,
  },
  {
    productNo: 2,
    productName: '오메가3',
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/06/22/11/18/fish-oil-6355910_1280.jpg',
    price: 30000,
    discountRate: 13,
    freeShipping: true,
  },
  {
    productNo: 3,
    productName: '루테인',
    imageUrl:
      'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/drb/drb00370/v/67.jpg',
    price: 41000,
    discountRate: 20,
    freeShipping: true,
  },
  {
    productNo: 4,
    productName: 'NOW Foods, 마그네슘 캡슐, 400mg, 베지 캡슐 180정',
    imageUrl:
      'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01283/v/51.jpg',
    price: 18000,
    discountRate: 5,
    freeShipping: false,
  },
  {
    productNo: 5,
    productName: 'NOW Foods, 아연, 50mg, 250정',
    imageUrl:
      'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01522/v/24.jpg',
    price: 13000,
    discountRate: 13,
    freeShipping: true,
  },
  {
    productNo: 6,
    productName: 'NOW Foods, 비오틴, 5,000mcg, 베지 캡슐 120정',
    imageUrl:
      'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00474/v/27.jpg',
    price: 12800,
    discountRate: 0,
    freeShipping: false,
  },
];

const ProductList = () => {
  return (
    <ul className="mx-auto grid gap-4 lg:grid-cols-4 lg:gap-8">
      {DUMMY_PRODUCTS.map((product) => (
        <ProductCard key={product.productNo} {...product} />
      ))}
    </ul>
  );
};

export default ProductList;
