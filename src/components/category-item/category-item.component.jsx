const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div
      className="min-w-[40%] h-[600px] flex-auto flex items-center 
justify-center border border-black mx-3 mt-0 mb-3 
overflow-hidden cursor-pointer first:mr-1 
last:ml-1"
    >
      <div
        className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div
        className="h-24 py-0 px-6 flex flex-col items-center border 
border-black bg-white opacity-70 absolute hover:opacity-90"
      >
        <h2 className="font-bold text-2xl my-0 mx-2 text-[#4a4a4a] uppercase">{title}</h2>
        <p className="font-light text-base">Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
