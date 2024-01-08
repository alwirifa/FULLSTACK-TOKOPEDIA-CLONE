import React, { useState } from 'react';
import axios from 'axios';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
}

interface EditProductProps {
  product: Product;
  onUpdate: (updatedProduct: Product) => void;
}

const EditProduct: React.FC<EditProductProps> = ({ product, onUpdate }) => {
  const [formData, setFormData] = useState<Product>(product);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/products/${product._id}`, formData);
      onUpdate(res.data);
    } catch (error) {
      console.error('Failed to update product:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Fields with initial values from 'product' */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditProduct;
