// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { FaShoppingCart } from 'react-icons/fa';


function ProductCard({ id, title, price, image, description, images, rating }) {
  return (
    <div className="product-card">
      <Link
        to={`/product/${id}`} // ✅ استفاده از id
        state={{ title, price, images, description, rating }}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img src={image || "/rtyy.jpeg"} alt={title} />
        <h3>{title}</h3>
        <p>{price} تومان</p>
      </Link>

      <button>
        <FaShoppingCart style={{ marginLeft: '8px' }} />
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductCard;
