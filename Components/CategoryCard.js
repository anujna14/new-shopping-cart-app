import Link from "next/link";
import Image from "next/image";

const CategoryCard = ({ image, name }) => {
  return (
    <div className="grid sm:grid-col-2 shadow-md m-4 rounded-lg">
      <Image
        className="object-cover"
        src={image}
        height={700}
        width={1000}
        alt={name}
      />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className="flex flex-col justify-center items-center pt-2 mb-4">
          <h3 className="capitalize font-robo">{name}</h3>
          <p className="px-8 py-4 m-2 bg-slate-100 hover:bg-slate-900 hover:text-slate-200">
            SHOP NOW
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
