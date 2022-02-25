const ErrorCard = (props) => {
  return (
    <div className="bg-white h-[480px] w-72 sm:w-[450px] shadow-lg mx-auto px-2 text-center pt-12 font-sans">
      {props.children}
    </div>
  );
};

export default ErrorCard;
