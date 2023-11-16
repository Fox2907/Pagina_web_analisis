import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MenuImage.css'; 

const MenuImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: false,
    customPaging: function (i) {
        return <div className="custom-dot"></div>; 
      },
  };

  return (
   <div className="slider-container">
     <Slider {...settings}>
      <div className='slicke-slider'>
        <img src="public\images\Rectangle 2.png" alt="Primera Imagen" />
      </div>
      <div className='slicke-slider'>
        <img src="public\images\r4.png" alt="Segunda Imagen" />
      </div>
      <div className='slicke-slider'>
        <img src="public\images\r5.png" alt="Tercera Imagen" />
      </div>
    </Slider>
   </div>
  );
};

export default MenuImage;
