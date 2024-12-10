import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="w-full min-h-24 flex items-center border-b border-gray-400 py-4 px-0 text-lg">
      <div className="w-[23%] pr-4">
        <img src={image} alt={`${title}`} className="w-full h-full" />
      </div>
      <span className="w-[29%] pr-1"> {title} </span>
      <span className="w-[20%] flex">
        <div className="cursor-pointer" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="my-0 mx-2">{quantity}</span>
        <div className="cursor-pointer" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="w-[20%]"> {price}</span>
      <div className="pl-2 cursor-pointer" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
