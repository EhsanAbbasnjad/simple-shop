// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';


function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>درباره ما</h1>
        <p>با عشق به تکنولوژی و مشتری‌مداری</p>
      </div>

      <div className="about-content">
        <h2>چه کسی هستیم؟</h2>
        <p>
          ما یک تیم جوان و پرانرژی هستیم که با هدف ارائه بهترین تجربه خرید آنلاین
          در زمینه لپ‌تاپ و تجهیزات کامپیوتری شکل گرفته‌ایم.
          هدف ما اینه که تکنولوژی رو برای همه در دسترس و لذت‌بخش کنیم.
        </p>

        <h2>چرا ما را انتخاب کنید؟</h2>
        <ul>
          <li>💻 تنوع محصولات از برندهای معتبر</li>
          <li>🚚 ارسال سریع و مطمئن</li>
          <li>💬 پشتیبانی پاسخ‌گو و دلسوز</li>
          <li>✅ تضمین کیفیت و اصالت کالا</li>
        </ul>

        <h2>تماس با ما</h2>
        <p>
          برای ارتباط با ما می‌توانید از طریق فرم تماس در سایت یا از طریق ایمیل و شماره تماس زیر اقدام کنید:
        </p>
        <p>
          📧 ایمیل: support@simple-shop.ir  
          <br />
          ☎️ تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
