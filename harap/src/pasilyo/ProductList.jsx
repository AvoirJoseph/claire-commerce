import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="productShowCase">
      {products.map((product) => (
        <div key={product.productID} className="productFrontRow">
          <img src={`http://localhost:8800/${product.productImage}`} alt={product.productName} />
          <h3>{product.productName}</h3>
          <p>Price: {product.productPrice}</p>
          <p>Quantity: {product.productQuantity}</p>
          <p>Description: {product.productDescription}</p>
          <p>Tag: {product.productTag1}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
