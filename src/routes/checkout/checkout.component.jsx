import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { ButtonInverted } from "../../components/button/button.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="w-[55%] min-h-[90vh] flex flex-col items-center mt-50 mb-0 mx-auto">
      <div className="w-full py-2 px-0 flex justify-between border-b border-gray-400">
        <div className="w-[23%]">
          <span>Product</span>
        </div>
        <div className="w-[29%]">
          <span>Description</span>
        </div>
        <div className="w-[20%]">
          <span>Quantity</span>
        </div>
        <div className="w-[20%]">
          <span>Price</span>
        </div>
        <div className="w-[8%]">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="mt-7 ml-auto text-4xl font-extralight">
        TOTAL: ${cartTotal}
      </div>
      <ButtonInverted additionalStyles="mt-4 ml-auto">
        Pay now
      </ButtonInverted>
    </div>
  );
};

export default Checkout;
