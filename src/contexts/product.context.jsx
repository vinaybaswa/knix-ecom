import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({
  categories: [],
  directory: [],
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [directory, setDirectory] = useState([]);
  const [products, setProducts] = useState([]);

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
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const value = {
    products,
    setProducts,
    categories,
    setCategories,
    directory,
    setDirectory,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
