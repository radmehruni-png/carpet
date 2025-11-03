'use client';

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

interface Product {
  id: number;
  name_en: string;
  name_fa: string;
  description_en: string;
  description_fa: string;
  price: string;
  image: string;
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('ProductDetail must be used within a CartProvider');
  }

  const { addToCart } = cartContext;

  useEffect(() => {
    async function getProduct(id: string) {
      const res = await fetch(`http://localhost:8000/api/products/${id}/`);
      const product = await res.json();
      setProduct(product);
    }
    getProduct(params.id);
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name_en}</h1>
      <p>{product.description_en}</p>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
