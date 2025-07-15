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
import ContactUs from './components/ContactUs';

// صفحات منوی محصولات (دقت کن اسامی دقیق)
import BatuneNano from './components/BatuneNano';
import MadarRang from './components/MadarRang';
import RangDecorative from './components/RangDecorative';
import RezinAbBandi from './components/RezinAbBandi';

// صفحات اختصاصی محصولات دیگه (اگه هستن)
// import KhamirBandKeshi from './pages/KhamirBandKeshi';
// import RangAyeghAcrlic from './pages/RangAyeghAcrlic';
// import RezinAbBandi from './pages/RezinAbBandi';

function App() {
  const sampleProducts = [
  {
    id: 1,
    title: "رنگ دکوراتیو بنفش",
    price: "۲۵۰٬۰۰۰",
    image: "/img/IMG_5826.JPG",
    description: "رنگ‌های آکریلیک و پرایمر - از بهترین رزین‌های آکریلیک پایه آب تهیه شده، دارای چسبندگی و قدرت پوشش خوب می‌باشد. حاوی ترکیبات آلی فرار کم، با بوی ناچیز و دوست‌دار محیط زیست است. مناسب برای انواع سطوح گچی، آجری و سیمانی. قابلیت پاک کردن کثیفی از سطح رنگ را دارا می‌باشد."
,
    rating: 4,
    images: [
       "/img/07.jpg",
      "/img/IMG_5826.JPG",
       
     
    ],
  },
  {
    id: 2,
    title: "رنگ دکوراتیو آبی",
    price: "۳۹۰٬۰۰۰",
    image: "/img/IMG_5821.JPG",
    description: "رنگ‌های آکریلیک و پرایمر - از بهترین رزین‌های آکریلیک پایه آب تهیه شده، دارای چسبندگی و قدرت پوشش خوب می‌باشد. حاوی ترکیبات آلی فرار کم، با بوی ناچیز و دوست‌دار محیط زیست است. مناسب برای انواع سطوح گچی، آجری و سیمانی. قابلیت پاک کردن کثیفی از سطح رنگ را دارا می‌باشد."
,
    rating: 5,
    images: [
      "/img/IMG_5821.JPG",
      "/img/08.jpg",
      "/img/010.jpg",
    ],
  },
   {
    id: 3,
    title: "ُT100",
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
    id: 404,
    title: "رنگ دکوراتیو متالیک",
    price: "۱۵۰٬۰۰۰",
    image: "/img/IMG_5824.JPG",
    description:"رنگ دکوراتیو و متالیک دارای طیف رنگی متنوع، پوشش‌دهی بالا و مقاومت بالا در برابر سایش و شستشو می‌باشد. آنتی‌باکتریال و ضد اشعه UV است. قابلیت ضدآب و آب‌گریزی دارد. مناسب برای نماهای داخلی و خارجی و تمامی سطوح سیمانی، گچی، چوبی و پلی‌استر."
,
    rating: 3,
    images: [
      "/img/IMG_5824.JPG",
      "/img/03.jpg",
      
    ],
  },
  {
    id: 5,
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
  {
    id: 6,
    title: "رنگ آبی کوچک",
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
                {sampleProducts.map((item) => (
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

        {/* صفحات عمومی */}
        <Route path="/products" element={<h2>صفحه محصولات</h2>} />
        <Route path="/login" element={<h2>صفحه ورود</h2>} />
        <Route path="/signup" element={<h2>صفحه ثبت‌نام</h2>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* صفحات منوی محصولات Navbar */}
        <Route path="/batune-nano" element={<BatuneNano />} />
        <Route path="/madar-rang" element={<MadarRang />} />
        <Route path="/rang-decorative" element={<RangDecorative />} />
        <Route path="/rezin-abbandi" element={<RezinAbBandi />} />

        {/* اگه صفحه خاصی داری میتونی اینجا اضافه کنی */}
        {/* <Route path="/khamir-band-keshi" element={<KhamirBandKeshi />} /> */}
        {/* <Route path="/rang-ayegh-acrlic" element={<RangAyeghAcrlic />} /> */}
        {/* <Route path="/rezin-ab-bandi" element={<RezinAbBandi />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
