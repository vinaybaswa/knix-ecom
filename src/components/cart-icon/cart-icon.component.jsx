import { useContext, useEffect, useRef } from "react";

import { CartContext } from "../../contexts/cart.context";

import ShoppingIcon from "../../assets/shopping-bag.svg?react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const ref = useRef();
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCartOpen && !ref?.current?.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div
      className="w-11 h-11 relative flex items-center justify-center cursor-pointer"
      onClick={toggleCart}
      ref={ref}
    >
      <ShoppingIcon className="w-6 h-6" />
      <span className="absolute bottom-3 text-xs font-bold">0</span>
    </div>
  );
};

export default CartIcon;
