const CartItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;
  return (
    <div className="w-full flex h-20 mb-4">
      <img src={image} alt={`${title}`} className="w-[30%]" />
      <div className="w-[70%] flex flex-col items-start justify-center py-3 px-5">
        <span className="text-sm">{title}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
