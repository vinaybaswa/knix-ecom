import { Link } from "react-router-dom";

const DirectoryItem = ({ product }) => {
  const { image, category } = product;
  return (
    <Link
      to={`shop/${category}`}
      className="flex-col min-w-[100%] h-48 sm:min-w-[40%] sm:h-80 lg:min-w-[30%] flex-auto flex items-center 
justify-center border border-black mx-3 mt-0 mb-3 
overflow-hidden cursor-pointer first:mr-1 
last:ml-1"
    >
      <div
        className="w-full h-full bg-contain bg-no-repeat bg-center 
hover:scale-110 transition-transform"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div
        className="h-24 py-0 px-6 flex flex-col items-center border 
border-black bg-white opacity-70 absolute hover:opacity-90"
      >
        <h2 className="font-bold text-2xl my-0 mx-2 text-[#4a4a4a] uppercase">
          {category}
        </h2>
        <p className="font-light text-base">Shop Now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
