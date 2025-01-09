import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { ButtonInverted } from "../../components/button/button.component";

import { ProductsContext } from "../../contexts/product.context";

const Category = () => {
  const { category } = useParams();
  const {
    categoryItems,
    setCategoryItems,
    isLoading,
    setIsLoading,
    sortOrder,
    setSortOrder,
  } = useContext(ProductsContext);

  const handleSort = () => setSortOrder(!sortOrder);

  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}?sort=${
            sortOrder ? "asc" : "desc"
          }`
        );
        const data = await response.json();
        setCategoryItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchCategoryItems();
  }, [category, sortOrder]);

  return (
    <Fragment>
      <ButtonInverted onClick={handleSort} additionalStyles="mt-4 ml-auto">
        {!sortOrder ? "Sort a to z" : "Sort z to a"}
      </ButtonInverted>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2 className="text-lg sm:text-2xl md:text-3xl mb-6 text-center">
            {category.toUpperCase()}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-24">
            {categoryItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Category;
