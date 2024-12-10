import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { image, title, price } = product;

  return (
    <div className="group w-full h-[350px] flex flex-col items-center relative">
      <img
        src={image}
        className="w-full h-[95%] object-contain object-center mb-1 group-hover:opacity-80"
      />
      <div className="w-full h-[5%] flex flex-col justify-between items-center text-lg">
        <span className="">${price}</span>
        <span className="mb-4">{title}</span>
      </div>
      <Button additionalStyles="w-[80%] opacity-70 absolute top-[255px] hidden group-hover:flex group-hover:opacity-85">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
