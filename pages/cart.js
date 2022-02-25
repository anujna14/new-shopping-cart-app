import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartCard from "../Components/CartCard";
import ErrorCard from "../Components/ErrorCard";
import img from "../public/assets/emptyShoppingBag.png";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  return (
    <div className="container mx-auto mt-32">
      {cart.length === 0 ? (
        <ErrorCard>
          <Image
            src={img}
            width={200}
            height={200}
            className="object-cover"
            alt="notFoundImage"
          />
          <h1 className="font-bold text-3xl">Your cart is empty </h1>
          <h1 className="text-sm text-gray-400">
            You have no items in your shopping cart.
          </h1>
          <p className="text-sm text-gray-400 mb-3">Lets go buy something!</p>
          <Link href="/">
            <a className="px-10 py-2 mt-3 bg-blue-600 rounded-full text-white hover:bg-blue-300 hover:text-gray-600">
              Shop Now
            </a>
          </Link>
        </ErrorCard>
      ) : (
        <>
          <div className=" grid gap-y-5 gap-x-5 grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 mx-8 sm:mx-0">
            {cart.map((item) => (
              <CartCard key={item.id} cartItem={item} />
            ))}
          </div>
          <div className="flex justify-center items-center py-10">
            <h2 className="font-bold text-2xl mb-32">
              <span>Grand Total: $</span>
              {getTotalPrice()}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
