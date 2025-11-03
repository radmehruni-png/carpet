'use client';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

interface Product {
  id: number;
  name_en: string;
  price: string;
}

export default function Checkout() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('Checkout must be used within a CartProvider');
  }

  const { cart, clearCart } = cartContext;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, you would process the payment here.
    alert('Order placed successfully!');
    clearCart();
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div>
          <label htmlFor="credit-card">Credit Card</label>
          <input type="text" id="credit-card" name="credit-card" required />
        </div>
        <button type="submit">Place Order</button>
      </form>
      <h2>Order Summary</h2>
      <ul>
        {cart.map((item: Product) => (
          <li key={item.id}>
            {item.name_en} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
