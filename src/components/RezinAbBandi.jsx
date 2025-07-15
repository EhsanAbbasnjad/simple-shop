// MahsolShowcase.jsx
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 301,
    title: "محصول شماره یک",
    price: "۲۵۰٬۰۰۰",
    image: "/img/STA_05 (2).jpg",
    description: "رزین با کیفیت بالا برای عایق‌کاری سطحی.",
    rating: 4,
    images: [
      "/img/STA_05 (2).jpg",
      "/img/RezzinAbbandi/05.jpg",
      "/img/RezzinAbbandi/06.jpg"
    ],
  },
  {
    id: 302,
    title: "محصول شماره دو",
    price: "۳۹۰٬۰۰۰",
    image: "/img/RezzinAbbandi/رزین آب بندی و آب گریز T100 2 - Copy.jpg",
    description: "مناسب برای جلوگیری از نفوذ آب و رطوبت.",
    rating: 5,
    images: [
      "/img/RezzinAbbandi/رزین آب بندی و آب گریز T100 2 - Copy.jpg",
      "/img/RezzinAbbandi/STA_09.jpg",
      "/img/RezzinAbbandi/06.jpg"
    ],
  },
  {
    id: 303,
    title: "محصول شماره سه",
    price: "۱۵۰٬۰۰۰",
    image: "/img/RezzinAbbandi/STA_020.jpg",
    description: "محصولی مناسب برای محافظت از سطوح ساختمانی.",
    rating: 3,
    images: [
      "/img/RezzinAbbandi/STA_020.jpg",
      "/img/RezzinAbbandi/012 (1).jpg",
      "/img/RezzinAbbandi/012.jpg"
    ],
  },
];

function MahsolShowcase() {
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          description={item.description}
          images={item.images}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default MahsolShowcase;
