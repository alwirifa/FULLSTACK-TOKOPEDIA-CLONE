import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../components/Container';

// Membuat tipe untuk produk
interface Product {
  id: number;
  name: string;
  // Anda bisa menambahkan properti lain sesuai kebutuhan
}

const ProductDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        // Ambil token dari cookie
        const token: string | undefined = getCookie('token');

        if (!token) {
          console.error('Token tidak ditemukan.');
          return;
        }

        const response = await axios.get<Product[]>('/products', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${token}` // Gunakan token untuk authorization
          }
        });

        // Mengatur state dengan data produk yang diterima dari backend
        setProducts(response.data);

      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchProducts();
  }, []);

  // Fungsi untuk mengambil nilai cookie berdasarkan namanya
  const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return undefined;
  }

  return (
    <div>
      <Container>
        <h1>Daftar Produk</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default ProductDashboard;
