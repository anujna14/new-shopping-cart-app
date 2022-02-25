import Navbar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="py-5 bg-gray-200 text-gray-500 fixed z-10 h-24 inset-0">
        <Navbar />
      </header>
    </>
  );
};

export default Header;
