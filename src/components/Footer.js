// src/components/Footer.js
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-category">
          <h3>دسته‌بندی محصولات</h3>
          <ul>
            <li><a href="/laptops">لپ‌تاپ‌ها</a></li>
            <li><a href="/desktops">کامپیوترهای رومیزی</a></li>
            <li><a href="/accessories">لوازم جانبی</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <h3>درباره فروشگاه</h3>
          <p>فروشگاه آنلاین ما بهترین محصولات را با بهترین قیمت‌ها به شما ارائه می‌دهد.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2025 فروشگاه من - تمامی حقوق محفوظ است</div>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://facebook.com" target="_blank">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
