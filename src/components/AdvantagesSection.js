import React from 'react';
import './AdvantagesSection.css';

function AdvantagesSection() {
  return (
    <div className="advantages-line">
      <div className="advantage-item">
        <div className="advantage-icon">🚚</div>
        <div className="advantage-title">ارسال رایگان</div>
        <div className="advantage-description">ارسال به سراسر کشور بدون هزینه</div>
      </div>
      <div className="advantage-item">
        <div className="advantage-icon">💳</div>
        <div className="advantage-title">پرداخت در محل</div>
        <div className="advantage-description">بعد از تحویل کالا پرداخت کنید</div>
      </div>
      <div className="advantage-item">
        <div className="advantage-icon">🔁</div>
        <div className="advantage-title">ضمانت بازگشت کالا</div>
        <div className="advantage-description">تا ۷ روز فرصت بازگشت دارید</div>
      </div>
    </div>
  );
}

export default AdvantagesSection;
