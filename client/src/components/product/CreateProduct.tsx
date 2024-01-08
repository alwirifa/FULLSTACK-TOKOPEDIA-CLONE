import React, { useState } from 'react';
import axios from 'axios';

interface ProductForm {
  name: string;
  description: string;
  price: string;
}

interface CreateProductProps {
  onProductCreated: (product: ProductForm) => void;
}

const CreateProduct: React.FC<CreateProductProps> = ({ onProductCreated }) => {
  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    description: '',
    price: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/products', formData);
      onProductCreated(res.data);
      setFormData({
        name: '',
        description: '',
        price: ''
      });
    } catch (error) {
      console.error('Failed to create product:', error);
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
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default CreateProduct;
