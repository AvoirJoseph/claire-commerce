import React, { useState } from 'react';
import axios from 'axios';

const ProductUpload = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    userID: '',
    userName: '',
    productName: '',
    productPrice: '',
    productQuantity: '',
    productDescription: '',
    productTag1: ''
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append('image', file);
    uploadData.append('userID', formData.userID);
    uploadData.append('userName', formData.userName);
    uploadData.append('productName', formData.productName);
    uploadData.append('productPrice', formData.productPrice);
    uploadData.append('productQuantity', formData.productQuantity);
    uploadData.append('productDescription', formData.productDescription);
    uploadData.append('productTag1', formData.productTag1);

    try {
      await axios.post('http://localhost:8800/upload', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Product uploaded successfully');
    } catch (err) {
      console.error(err);
      alert('Product upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <input type="text" name="userID" placeholder="User ID" onChange={handleChange} />
      <input type="text" name="userName" placeholder="User Name" onChange={handleChange} />
      <input type="text" name="productName" placeholder="Product Name" onChange={handleChange} />
      <input type="text" name="productPrice" placeholder="Product Price" onChange={handleChange} />
      <input type="text" name="productQuantity" placeholder="Product Quantity" onChange={handleChange} />
      <textarea name="productDescription" placeholder="Product Description" onChange={handleChange}></textarea>
      <input type="text" name="productTag1" placeholder="Product Tag" onChange={handleChange} />
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default ProductUpload;
