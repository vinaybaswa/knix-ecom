import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import ShoppingIcon from "../../assets/shopping-bag.svg?react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      className="w-11 h-11 relative flex items-center justify-center cursor-pointer"
      onClick={toggleCart}
    >
      <ShoppingIcon className="w-6 h-6" />
      <span className="absolute bottom-3 text-xs font-bold">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
