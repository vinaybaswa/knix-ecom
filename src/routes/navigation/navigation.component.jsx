import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import KnixLogo from "../../assets/knix.svg?react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

export const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <header className="h-16 w-full flex justify-between mb-6 bg-red-200 sticky z-10 -top-1 opacity-100">
        <Link to="/" className="h-full w-20 p-2 pt-4">
          <KnixLogo />
        </Link>
        <div className="w-[50%] h-full flex items-center justify-end text-lg">
          <Link to="/shop" className="py-2 px-4">
            Shop
          </Link>
          <Link to="/shop" className="py-2 px-4">
            Login
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
