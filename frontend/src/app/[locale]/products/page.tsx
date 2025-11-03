'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface Product {
  id: number;
  name_en: string;
  name_fa: string;
  description_en: string;
  description_fa: string;
  price: string;
  image: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const t = useTranslations('ProductList');

  useEffect(() => {
    async function getProducts() {
      const res = await fetch('http://localhost:8000/api/products/');
      const products = await res.json();
      setProducts(products);
    }
    getProducts();
  }, []);

  return (
    <div>
      <h1>{t('title')}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name_en}</li>
        ))}
      </ul>
    </div>
  );
}
