import { getProductsByCategory } from "../api/product/[category]";
import { useRouter } from "next/router";
import ProductCard from "../../Components/ProductCard";
import PageNotFound from "../404";

const ProductCategoryPage = ({ products }) => {
  const router = useRouter();
  if (products.length === 0) {
    return (
      <PageNotFound
        message={
          "we couldn't find the product you looking for please go to the"
        }
      />
    );
  }
  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-center mx-5 py-9 text-2xl capitalize font-sans">
        Results for <span className="">{router.query.category}</span>
      </h1>
      <div className=" grid gap-y-5 gap-x-5 grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 mb-28">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage;

export async function getServerSideProps(context) {
  const category = context.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}
