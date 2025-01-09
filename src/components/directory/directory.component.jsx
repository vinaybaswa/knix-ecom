import { useContext, useEffect } from "react";

import { ProductsContext } from "../../contexts/product.context";

import DirectoryItem from "../directory-item/directory-item.component";
import Spinner from "../spinner/spinner.component";

const Directory = () => {
  const { isLoading, setIsLoading, categories, directory, setDirectory } =
    useContext(ProductsContext);

  // Fetch one product from each category to create a directory
  useEffect(() => {
    setIsLoading(true);
    Promise.all(
      categories.map((category) =>
        fetch(`https://fakestoreapi.com/products/category/${category}?limit=1`)
      )
    )
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => setDirectory(data.flat(), setIsLoading(false)));
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="w-full flex flex-wrap justify-between">
      {directory.map((product) => (
        <DirectoryItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Directory;
