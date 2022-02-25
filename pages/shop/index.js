import ProductCard from "../../Components/ProductCard";
import { getProducts } from "../api/product";

const ShopPage = ({ products }) => {
  return (
    <div className="container mx-auto mt-24">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-sans font-bold py-8 text-gray-600 uppercase hover:text-gray-900 leading-7 tracking-wide ">
          All Results
        </h1>
      </div>

      <div className=" grid gap-y-5 gap-x-5 grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 mb-28">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();

  return { props: { products } };
}
