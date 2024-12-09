import { useContext } from "react";
import SHOP_DATA from "../../shop-data.json";

import { ProductsContext } from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ id, title, image}) => (
        <div key={id}>
          <h1>{title}</h1>
          <img src={image} className="w-40"/>
        </div>
      ))}
    </div>
  );
};

export default Shop;
