import { useContext } from "react";

import { ProductsContext } from "../../contexts/product.context";
import ProductCard from "../product-card/product-card.component";

const Categories = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="grid grid-cols-4 gap-4 gap-y-28 p-5 pt-0 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Categories;
