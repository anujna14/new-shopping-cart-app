import Image from "next/image";
import Link from "next/link";
import img from "../public/assets/cartIcon.png";
function PageNotFound({ message }) {
  return (
    <div className="flex justify-center flex-col items-center mt-60 rounded-md bg-white h-96  w-64 sm:w-[450px] shadow-lg mx-auto font-robo text-center pt-12 ">
      <Image
        src={img}
        className="bg-yellow-400 rounded-full object-contain object-center border-4 border-yellow-500 shadow-md "
        width={150}
        alt="error-image"
        height={150}
      />
      <h1 className="mt-3 font-bold font-robo text-3xl">Sorry</h1>
      <h1 className="sm:px-16 text-sm text-slate-400  pt-3 font-sans ">
        {message ? (
          <p>{message}</p>
        ) : (
          "we couldn't find the product you looking for please go to the"
        )}
      </h1>
      <div>
        <Link href="/">
          <button className="px-10 py-2 mt-2 bg-blue-600 rounded-full text-white hover:bg-blue-300 hover:text-gray-600">
            Shop
          </button>
        </Link>
      </div>
    </div>
  );
}
export default PageNotFound;
