import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import image1 from '../assets/images/foto5.jpg'
import image2 from '../assets/images/foto6.jpg'
import image3 from '../assets/images/foto7.jpg'
import image4 from '../assets/images/foto5.jpg'
import image5 from '../assets/images/foto6.jpg'


const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };

  const items = [
    <div className="item">
      <img src={image1}/>
    </div>,
    <div className="item">
      <img src={image2}/>
    </div>,
    <div className="item">
      <img src={image3}/>
    </div>,
    <div className="item">
      <img src={image4}/>
    </div>,
    <div className="item">
      <img src={image5}/>
    </div>,
    <div className="item">
      <img src={image1}/>
    </div>,
    <div className="item">
      <img src={image2}/>
    </div>,
    <div className="item">
      <img src={image3}/>
    </div>,

  ];


export const ImageCarousel = () => (
    <div>
      
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
      />
    </div>
);
