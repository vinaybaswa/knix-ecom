import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="absolute w-80 h-[340px] flex flex-col p-5 border border-black bg-white top-[90px] right-10 z-10">
      {!cartCount && <div className="text-lg my-12 mx-auto">Your cart is empty</div>}
      <div className="h-60 flex flex-col overflow-scroll">
      {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button
        additionalStyles="mt-auto bg-black text-white hover:opacity-70"
        onClick={goToCheckoutHandler}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
