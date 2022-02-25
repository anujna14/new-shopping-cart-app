import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import { toast } from "react-toastify";

const CartCard = ({ cartItem }) => {
  const dispatch = useDispatch();
  const notifyAdd = () => toast("Item added to Cart");
  const notifyRemove = () => toast("Item removed from Cart");
  const notifyDelete = () => toast("Item Deleted");
  return (
    <div className="flex flex-col justify-around  bg-gray-100 py-8 px-3 h-72">
      <div className="flex">
        <Image
          className="object-contain"
          src={cartItem.image}
          alt={cartItem.product}
          height={300}
          width={300}
        />
        <div className="ml-2">
          <h1 className="truncate max-w-[200px] md:max-w-[260px] capitalize font-sans font-bold text-gray-500">
            {cartItem.product}
          </h1>
          <h1 className="text-gray-500 font-robo">Price: $ {cartItem.price}</h1>
          <p className="text-gray-500 font-robo font-bold">
            Quantity: {cartItem.quantity}
          </p>
          <div className="py-3">
            <button
              onClick={() => {
                dispatch(incrementQuantity(cartItem.id));
                notifyAdd();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                dispatch(decrementQuantity(cartItem.id));
                notifyRemove();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                dispatch(removeFromCart(cartItem.id));
                notifyDelete();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p className="flex justify-center items-center tracking-wide">
        <span className="font-bold tracking-wide">Total: </span> $
        {cartItem.quantity * cartItem.price}
      </p>
    </div>
  );
};

export default CartCard;
