import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectSelector() {
  const [selected, setSelected] = useState(null);

  const renderContent = () => {
    if (selected === 'ongoing') {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">پروژه‌های در حال انجام</h2>
          <ul className="space-y-2">
            <li>✅ طراحی سایت فروشگاهی</li>
            <li>✅ پنل ادمین سفارشی</li>
            <li>✅ ریسپانسیو کردن نسخه موبایل</li>
          </ul>
        </motion.div>
      );
    }

    if (selected === 'completed') {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">پروژه‌های انجام‌شده</h2>
          <ul className="space-y-2">
            <li>✔️ سیستم تیکت‌ پشتیبانی</li>
            <li>✔️ صفحه فرود تبلیغاتی</li>
            <li>✔️ فروشگاه چندزبانه</li>
          </ul>
        </motion.div>
      );
    }

    return (
      <>
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          کدوم پروژه‌هارو می‌خوای ببینی؟
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-6">
          <motion.button 
            onClick={() => setSelected('ongoing')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-xl rounded-2xl px-8 py-6 text-lg md:text-xl font-semibold text-indigo-700 border-2 border-indigo-400 hover:bg-indigo-100 transition-all duration-300"
          >
            پروژه‌های در حال انجام
          </motion.button>

          <motion.button 
            onClick={() => setSelected('completed')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-xl rounded-2xl px-8 py-6 text-lg md:text-xl font-semibold text-green-700 border-2 border-green-400 hover:bg-green-100 transition-all duration-300"
          >
            پروژه‌های انجام شده
          </motion.button>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      {renderContent()}
    </div>
  );
}
