import React from 'react';
import './ItemModal.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ItemModal({ item, onClose }) {
  if (!item) return null;

  // Merge cover + additional safely, remove falsy/duplicate values
  const allImages = Array.from(
    new Set([item.coverImage, ...(item.additionalImages || [])].filter(Boolean))
  );

  // Disable infinite loop when there's only one image
  const sliderSettings = {
    dots: true,
    infinite: allImages.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: allImages.length > 1, // hide arrows if single image
  };

  return (
    <div className="modal">
      <div className="box">
        <button className="closebtn" onClick={onClose}>×</button>

        <h2>{item.name}</h2>
        <p><strong>Type:</strong> {item.type}</p>
        <p><strong>Description:</strong> {item.description}</p>

        <div className="carousel">
          <Slider {...sliderSettings}>
            {allImages.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`img-${index}`} className="carousel-img" />
              </div>
            ))}
          </Slider>
        </div>

        <a
          href={`mailto:agarwallabulbul@gmail.com?subject=Enquiry about ${item.name}`}
          className="enquire"
        >
          Enquire
        </a>
      </div>
    </div>
  );
}

export default ItemModal;
