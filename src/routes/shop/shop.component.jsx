import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContext } from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid grid-cols-4 gap-4 gap-y-28 p-5 pt-0 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Shop;
