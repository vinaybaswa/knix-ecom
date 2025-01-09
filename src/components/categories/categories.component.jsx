import { Fragment, useContext, useEffect } from "react";

import { ProductsContext } from "../../contexts/product.context";
import ProductCard from "../product-card/product-card.component";
import { ButtonInverted } from "../button/button.component";
import Spinner from "../spinner/spinner.component";

const Categories = () => {
  const {
    isLoading,
    setIsLoading,
    products,
    setProducts,
    sortOrder,
    setSortOrder,
  } = useContext(ProductsContext);

  const handleSort = () => setSortOrder(!sortOrder);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?sort=${sortOrder ? "asc" : "desc"}`
        );
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [sortOrder]);

  return (
    <Fragment>
      <ButtonInverted
        onClick={handleSort}
        additionalStyles={"bg-red mt-4 ml-auto"}
      >
        {!sortOrder ? "Sort a to z" : "Sort z to a"}
      </ButtonInverted>
      <h2 className="text-lg sm:text-xl md:text-3xl mb-6 text-center">
        SHOP ALL
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-24">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Categories;
