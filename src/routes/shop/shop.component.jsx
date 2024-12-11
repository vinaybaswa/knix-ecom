import { Routes, Route } from 'react-router-dom';

import Categories from '../../components/categories/categories.component';
import Category from '../category/category.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories/>} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
