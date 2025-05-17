// src/components/NewsletterForm.js
import React, { useState } from 'react';
import './NewsletterForm.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`ایمیل شما (${email}) با موفقیت ثبت شد!`);
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h2 className="newsletter-title">عضویت در خبرنامه</h2>
        <p className="newsletter-text">با عضویت در خبرنامه از جدیدترین محصولات و تخفیف‌ها مطلع شوید</p>
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input
            type="email"
            placeholder="ایمیل شما"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">عضویت</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterForm;
