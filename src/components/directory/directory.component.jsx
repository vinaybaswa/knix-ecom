import { useContext } from "react";

import { ProductsContext } from "../../contexts/product.context";

import DirectoryItem from "../directory-item/directory-item.component";

const Directory = () => {
  const { directory } = useContext(ProductsContext);

  return (
    <div className="w-full flex flex-wrap justify-between">
      {directory.map((product) => (
        <DirectoryItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Directory;
