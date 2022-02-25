import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5 bg-gray-200 text-center text-gray-600 flex justify-center items-center inset-x-0 fixed h-24 bottom-0 space-x-3 ">
      Copyright <FaCopyright className="ml-2" />
      <span className="text-red-300 pr-1">Pick-Up Point</span>{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
