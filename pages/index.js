import CategoryCard from "../Components/CategoryCard";

const Home = () => {
  return (
    <main className="flex-1 overflow-y-auto p-5 my-28 ">
      <div className="grid  sm:grid-cols-2  sm:gap-4 sm:gap-y-4">
        <CategoryCard
          image="https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          name="jewelery"
        />
        <CategoryCard
          image="https://images.unsplash.com/photo-1593259037198-c720f4420d7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          name="electronics"
        />
      </div>
      <div className="grid  md:grid-cols-6 md:gap-4">
        <div className="md:col-span-4">
          <CategoryCard
            image="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            name="men's clothing"
          />
        </div>
        <div className=" sm:col-span-2  sm:row-span-3 ">
          <CategoryCard
            image="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            name="women's clothing"
          />
          <CategoryCard
            image="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            name="Accessories"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
