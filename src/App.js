// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import AdvantagesSection from './components/AdvantagesSection'; 
import ProjectSlider from './components/ProjectSlider';
import AboutSection from './components/AboutSection';
import NewsletterForm from './components/NewsletterForm';
import AboutUs from './components/AboutUs';

function App() {
  const sampleProducts = [
  {
    title: "گوشی موبایل A14",
    price: "5,800,000",
    image: "/img/nano_t20.jpg", // تغییر مسیر تصویر
    description: "رنگ ساختمانی با کیفیت بالا؛ با پوشش‌دهی عالی و خشک‌شدن سریع، انتخابی مناسب برای دیوارهای داخلی و خارجی است. فرمولاسیون ویژه‌ی آن، دوام بالا و مقاومتی چشمگیر در برابر رطوبت و پوسته‌شدن را تضمین م. فرمولاسیون ویژه‌ی آن، دوام بالا و مقاومتی چشمگیر در برابر رطوبت و پوسته‌شدن را تضمین م. فرمولاسیون ویژه‌ی آن، دوام بالا و مقاومتی چشمگیر در برابر رطوبت و پوسته‌شدن را تضمین م. فرمولاسیون ویژه‌ی آن، دوام بالا و مقاومتی چشمگیر در برابر رطوبت و پوسته‌شدن را تضمین م. فرمولاسیون ویژه‌ی آن، دوام بالا و مقاومتی چشمگیر در برابر رطوبت و پوسته‌شدن را تضمین م. فرمولاسیون ویژه‌ی آن، دوام بالا و مقاومتی چشمگیر در برابر رطوبت و پوسته‌شدن را تضمین م. فرمولاسیون ویژه‌ی آن، دوام بالا و مقاومتی چشمگیر در برابر رطوبت و پوسته‌شدن را تضمین می‌کند.",
    rating: 4 ,// یا برای تست بدون امتیاز: rating: 
    images: ["/img/nano_t20.jpg", "/img/PushRangNimeBaraghACrolic.jpg", "/img/رنگ نانونما الاستومری.jpg"], // تغییر مسیر تصاویر
    id : 1
  },

    
    {
      title: "لپ‌تاپ HP",
      price: "18,500,000",
      image: "img/PushRangNimeBaraghACrolic.jpg",
      description: "لپ‌تاپ HP با مشخصات فوق‌العاده.",
      rating: 3 ,
      images: ["/img/nano_t20.jpg", "/img/PushRangNimeBaraghACrolic.jpg", "/img/رنگ نانونما الاستومری.jpg"], // تصاویر مربوط به محصول
      id : 2   
    },
    {
      title: "هدست گیمینگ",
      price: "1,200,000",
      image: "img/رنگ نانونما الاستومری.jpg",
      description: "هدست گیمینگ با کیفیت صدا عالی.",
      images: ["/img/nano_t20.jpg", "/img/PushRangNimeBaraghACrolic.jpg", "/img/رنگ نانونما الاستومری.jpg"] // تصاویر مربوط به محصول
    },
        {
      title: "هدست گیمینگ",
      price: "1,200,000",
      image: "img/رنگ نانونما الاستومری.jpg",
      description: "هدست گیمینگ با کیفیت صدا عالی.",
      images: ["/img/nano_t20.jpg", "/img/PushRangNimeBaraghACrolic.jpg", "/img/رنگ نانونما الاستومری.jpg"] // تصاویر مربوط به محصول
    },
        {
      title: "هدست گیمینگ",
      price: "1,200,000",
      image: "img/رنگ نانونما الاستومری.jpg",
      description: "هدست گیمینگ با کیفیت صدا عالی.",
      images: ["/img/nano_t20.jpg", "/img/PushRangNimeBaraghACrolic.jpg", "/img/رنگ نانونما الاستومری.jpg"] // تصاویر مربوط به محصول
    },
        {
      title: "هدست گیمینگ",
      price: "1,200,000",
      image: "img/رنگ نانونما الاستومری.jpg",
      description: "هدست گیمینگ با کیفیت صدا عالی.",
      images: ["/img/nano_t20.jpg", "/img/PushRangNimeBaraghACrolic.jpg", "/img/رنگ نانونما الاستومری.jpg"] // تصاویر مربوط به محصول
    },
    // اضافه کردن محصولات دیگر به همین ترتیب
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <div className="product-list">
                {sampleProducts.map((item, index) => (
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
              <AboutSection />
              <ProjectSlider />
              <NewsletterForm />
              <AdvantagesSection />
            </>
          }
        />
        <Route path="/products" element={<h2>صفحه محصولات</h2>} />
        <Route path="/login" element={<h2>صفحه ورود</h2>} />
        <Route path="/signup" element={<h2>صفحه ثبت‌نام</h2>} />
        <Route path="/about" element={<AboutUs />} /> {/* 👈 این رو اضافه کن */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
