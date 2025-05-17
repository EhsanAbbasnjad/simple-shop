import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectSlider.css';

const ProjectSlider = () => {
  const projects = [
    {
      image: "/rtyy.jpeg",
      title: "پروژه فروشگاه آنلاین",
      description: "ساخت یک فروشگاه کامل با قابلیت ثبت سفارش و پرداخت آنلاین."
    },
    {
      image: "/rtyy.jpeg",
      title: "پنل ادمین حرفه‌ای",
      description: "طراحی پنل مدیریت با امکانات آمار، مدیریت کاربران و گزارش‌گیری."
    },
    {
      image: "/rtyy.jpeg",
      title: "اپلیکیشن موبایل",
      description: "ساخت نسخه موبایل با React Native برای کاربران فروشگاه."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="project-slider-container">
      <h2 className="project-title">پروژه‌های در حال انجام</h2>
      <Slider {...settings}>
        {projects.map((proj, index) => (
          <div className="slide-box" key={index}>
            <img src={proj.image} alt={proj.title} className="slide-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
