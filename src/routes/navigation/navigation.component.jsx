import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import KnixLogo from "../../assets/knix.svg";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="h-16 w-full flex justify-between mb-6 bg-red-200">
        <Link to="/" className="h-full w-20 p-2 pt-4">
          <img src={KnixLogo} />
        </Link>
        <div className="w-[50%] h-full flex items-center justify-end text-lg">
          <Link to="/shop" className="py-2 px-4">
            Shop
          </Link>
          <Link to="/shop" className="py-2 px-4">
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
