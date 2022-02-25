import { getProductDetails } from "../api/shop/[shopDetails]";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cart.slice";
import { toast } from "react-toastify";
import PageNotFound from "../404";
import Link from "next/link";

const ShopDetailsPage = ({ product }) => {
  const dispatch = useDispatch();
  const notify = () => toast("Item added to Cart");
  if (!product) {
    return (
      <PageNotFound
        message={
          "we couldn't find the product you looking for please go to the"
        }
      />
    );
  }
  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container mx-auto justify-center flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
          <Image
            className="object-contain object-center rounded "
            alt={product.product}
            src={product.image}
            width={720}
            height={600}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {product.product}
          </h1>
          <p className="mb-8 leading-relaxed">{product.description}</p>
          <div className="flex justify-center mb-12">
            <button
              onClick={() => {
                dispatch(addToCart(product));
                notify();
              }}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Add To Cart
            </button>
            <Link href="/shop">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetailsPage;

export async function getServerSideProps(context) {
  const productQuery = context.query.shopDetails;
  const product = await getProductDetails(productQuery);
  return { props: { product: product || null } };
}
