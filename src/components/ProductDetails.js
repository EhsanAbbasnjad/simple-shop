import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Rating from '@mui/material/Rating';
import './ProductDetails.css';
import ReactStars from 'react-rating-stars-component';
import 'react-image-gallery/styles/css/image-gallery.css';

function ProductDetails() {
  const location = useLocation();
  const { title, price, images, description, rating } = location.state || {};

  const imageItems = images
    ? images.map((img) => ({
        original: img,
        thumbnail: img
      }))
    : [];

  const displayRating =
    rating !== undefined && rating !== null && rating > 0
      ? rating
      : 'بدون امتیاز';

  return (
    <div className="product-details-container">
      <div className="gallery-wrapper">
        <ImageGallery items={imageItems} showPlayButton={false} />
      </div>

      <div className="product-info">
        <h2>{title || 'عنوان محصول'}</h2>



        <div className="description-box">
          {description || 'توضیحاتی برای این محصول وجود ندارد.'}
        </div>

        <div className="price-rating-row">
                  <p className="price">
          {price ? `${price} تومان` : 'قیمت موجود نیست'}
        </p>
        


                <div className="rating-wrapper">
          {typeof rating === 'number' && rating > 0 ? (
            <>
              <Rating
                name="read-only"
                value={rating}
                precision={0.5}
                readOnly
              />
              {/* <span className="rating-value">({rating.toFixed(1)})</span> */}
            </>
          ) : (
            <span className="no-rating-text">{displayRating}</span>
          )}
        </div>
        </div>

        <button>افزودن به سبد خرید</button>
      </div>
    </div>
  );
}

export default ProductDetails;
