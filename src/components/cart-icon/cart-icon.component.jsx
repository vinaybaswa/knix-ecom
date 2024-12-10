import ShoppingIcon from "../../assets/shopping-bag.svg?react";

const CartIcon = () => {
  return (
    <div className="w-11 h-11 relative flex items-center justify-center">
      <ShoppingIcon className="w-6 h-6" />
      <span className="absolute bottom-3 text-xs font-bold">0</span>
    </div>
  );
};

export default CartIcon;
