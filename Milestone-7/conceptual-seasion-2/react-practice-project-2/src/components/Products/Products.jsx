import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Products = ({ handleCartProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="md:w-2/3 border">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleCartProduct={handleCartProduct}
        ></Product>
      ))}
    </div>
  );
};

export default Products;