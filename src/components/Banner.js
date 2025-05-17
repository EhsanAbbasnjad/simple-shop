// src/components/Banner.js
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div
      className="banner"
      style={{ backgroundImage: "url('/img/ChatGPT Image May 9, 2025, 05_01_19 AM (1).png')" }}
    >
      <div className="banner-content">
        <h1>به فروشگاه ما خوش آمدید!</h1>
        <p>جدیدترین محصولات دیجیتال، قیمت‌های رقابتی و کیفیت بی‌نظیر</p>
        <button>همین حالا خرید کنید</button>
      </div>
    </div>
  );
}

export default Banner;
