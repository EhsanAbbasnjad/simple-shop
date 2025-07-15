// MahsolShowcase.jsx
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 501,
    title: "محصول شماره یک",
    price: "۲۵۰٬۰۰۰",
    image: "/img/IMG_5827.JPG",
    description: "مادر رنگ دوکاره مخصوص رنگ‌های اکریلیک و پلاستیک، دارای طیف رنگی متنوع با پوشش‌دهی بالا و مقاومت بالا می‌باشد. آنتی‌باکتریال و سازگار با محیط زیست است. قابلیت ترکیب شدن با رنگ‌های پلاستیک و اکریلیک را دارد."
,
    rating: 4,
    images: [
      "/img/IMG_5827.JPG",
      "/img/018.jpg",
      
    ],
  },
  {
    id: 502,
    title: "محصول شماره دو",
    price: "۳۹۰٬۰۰۰",
    image: "/img/IMG_5828.JPG",
    description: "مادر رنگ دوکاره مخصوص رنگ‌های اکریلیک و پلاستیک، دارای طیف رنگی متنوع با پوشش‌دهی بالا و مقاومت بالا می‌باشد. آنتی‌باکتریال و سازگار با محیط زیست است. قابلیت ترکیب شدن با رنگ‌های پلاستیک و اکریلیک را دارد."
,
    rating: 5,
    images: [
      "/img/IMG_5828.JPG",
      "/img/013.jpg",
      "/img/014.jpg"
      
    ],
  },
  {
    id: 503,
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
