import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MenuImage.css'; 
import Button from './Button';

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
          <div className="image-with-overlay">
            <img src="public\images\Rectangle 2.png" alt="Primera Imagen" />
            <div className="text-overlay">
              <h2>Texto 1</h2>
              <Button type={"button-menuimage"} name_button={"Comprar"} />
            </div>
          </div>
        </div>
        <div className='slicke-slider'>
          <div className="image-with-overlay">
            <img src="public\images\r4.png" alt="Segunda Imagen" />
            <div className="text-overlay">
              <h2>Texto 2</h2>
              <Button type={"button-menuimage"} name_button={"Comprar"} />
            </div>
          </div>
        </div>
        <div className='slicke-slider'>
          <div className="image-with-overlay">
            <img src="public\images\r5.png" alt="Tercera Imagen" />
            <div className="text-overlay">
              <h2>Texto 3</h2>
              <Button type={"button-menuimage"} name_button={"Comprar"} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
  
};

export default MenuImage;
