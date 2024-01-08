import React from 'react';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
}

interface ShowProductProps {
  product: Product;
}

const ShowProduct: React.FC<ShowProductProps> = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      {/* You can add more details or styles as needed */}
    </div>
  );
};

export default ShowProduct;
