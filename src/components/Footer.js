// src/components/Footer.js
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3>دسته‌بندی محصولات</h3>
            <ul>
              <li><a href="/laptops">لپ‌تاپ‌ها</a></li>
              <li><a href="/desktops">کامپیوترهای رومیزی</a></li>
              <li><a href="/accessories">لوازم جانبی</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>درباره فروشگاه</h3>
            <p>در فروشگاه ما بهترین محصولات دیجیتال با قیمت مناسب عرضه می‌شود. خریدی آسان، سریع و مطمئن.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 فروشگاه من - تمامی حقوق محفوظ است</div>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
