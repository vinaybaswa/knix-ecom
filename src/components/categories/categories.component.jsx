import { Fragment, useContext } from "react";

import { ProductsContext } from "../../contexts/product.context";
import ProductCard from "../product-card/product-card.component";
import { ButtonInverted } from "../button/button.component";

const Categories = () => {
  const { products, sortOrder, setSortOrder } = useContext(ProductsContext);

  const handleSort = () => setSortOrder(!sortOrder);

  return (
    <Fragment>
      <ButtonInverted
        onClick={handleSort}
        additionalStyles={"bg-red mt-4 ml-auto"}
      >
        {!sortOrder ? "Sort a to z" : "Sort z to a"}
      </ButtonInverted>
      <h2 className="text-lg sm:text-xl md:text-3xl mb-6 text-center">SHOP ALL</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-24">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Categories;
