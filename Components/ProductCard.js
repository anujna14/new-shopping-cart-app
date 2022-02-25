import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cart.slice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const notify = () => toast("Item added to Cart");
  return (
    <div className="flex flex-col justify-around items-center shadow-slate-400 shadow-lg py-5 rounded-b-lg mx-8 sm:mx-0">
      <Link href={`/shop/${product.id}`}>
        <a>
          <div>
            <Image
              className="object-contain"
              src={product.image}
              alt={product.product}
              height={250}
              width={250}
            />
          </div>
          <div className="w-56 group">
            <h1 className="truncate max-w-xs capitalize text-2xl font-robo font-bold text-gray-500">
              {product.product}
            </h1>
            <h2 className="capitalize text-xl group-hover:text-slate-500">
              <span>Category: </span>
              {product.category}
            </h2>
            <p className="">$ {product.price}</p>
          </div>
        </a>
      </Link>
      <div className=" flex  flex-col justify-center items-center">
        <button
          onClick={() => {
            dispatch(addToCart(product));
            notify();
          }}
          className="px-8 py-4 m-2 bg-slate-100 hover:bg-slate-900 hover:text-slate-200 rounded-sm shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
