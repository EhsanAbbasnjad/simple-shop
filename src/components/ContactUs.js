import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'لطفا نام خود را وارد کنید';
    if (!formData.email.trim()) {
      errs.email = 'لطفا ایمیل خود را وارد کنید';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'ایمیل وارد شده معتبر نیست';
    }
    if (!formData.subject.trim()) errs.subject = 'موضوع را وارد کنید';
    if (!formData.message.trim()) errs.message = 'پیام را بنویسید';
    return errs;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // اینجا می‌تونی ارسال فرم به سرور یا API رو انجام بدی
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="contact-container">
      <h2>تماس با ما</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            نام شما
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="نام خود را وارد کنید"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            ایمیل
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ایمیل شما"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            موضوع
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="موضوع پیام"
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </label>

          <label>
            پیام شما
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="متن پیام"
              rows="5"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>

          <button type="submit">ارسال پیام</button>
          {submitted && <p className="success-msg">پیام شما با موفقیت ارسال شد!</p>}
        </form>

        <div className="contact-info">
          <h3>اطلاعات تماس</h3>
          <p><strong>آدرس:</strong> تهران، خیابان مثال، پلاک ۱۲۳</p>
          <p><strong>تلفن:</strong> ۰۲۱-۱۲۳۴۵۶۷۸</p>
          <p><strong>ایمیل:</strong> info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
