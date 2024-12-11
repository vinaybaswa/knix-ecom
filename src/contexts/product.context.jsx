import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({
  categories: [],
  setCategories: () => {},
  directory: [],
  setDirectory: () => {},
  products: [],
  setProducts: () => {},
  isLoading: true,
  setISLoading: () => {},
  categoryItems: [],
  setCategoryItems: () => {},
  sortOrder: true,
  setSortOrder: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [isLoading, setISLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [directory, setDirectory] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(true);

  // Fetch all the available categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch one product from each category to create a directory
  useEffect(() => {
    Promise.all(
      categories.map((category) =>
        fetch(`https://fakestoreapi.com/products/category/${category}?limit=1`)
      )
    )
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => setDirectory(data.flat()));
  }, [categories]);

  // Fetch all the products to show in the shop page
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?sort=${
            sortOrder ? "asc" : "desc"
          }`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [sortOrder]);

  const value = {
    isLoading,
    setISLoading,
    categories,
    setCategories,
    directory,
    setDirectory,
    products,
    setProducts,
    categoryItems,
    setCategoryItems,
    sortOrder,
    setSortOrder
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
