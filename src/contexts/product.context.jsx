import { createContext, useState } from "react";

import CATEGORIES from "../categories-data";

export const ProductsContext = createContext({
  categories: [],
  setCategories: () => {},
  directory: [],
  setDirectory: () => {},
  products: [],
  setProducts: () => {},
  isLoading: true,
  setIsLoading: () => {},
  categoryItems: [],
  setCategoryItems: () => {},
  sortOrder: true,
  setSortOrder: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState(CATEGORIES);
  const [directory, setDirectory] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(true);

  const value = {
    isLoading,
    setIsLoading,
    categories,
    setCategories,
    directory,
    setDirectory,
    products,
    setProducts,
    categoryItems,
    setCategoryItems,
    sortOrder,
    setSortOrder,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
