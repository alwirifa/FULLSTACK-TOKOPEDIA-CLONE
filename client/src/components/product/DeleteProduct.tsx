import React from 'react';
import axios from 'axios';

interface DeleteProductProps {
  productId: string;
  onDelete: (productId: string) => void;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ productId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/products/${productId}`);
      onDelete(productId);
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteProduct;
