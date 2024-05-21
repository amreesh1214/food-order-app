import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SliderItem from './SliderItem';

const bannerData = [
  {
    id: 1,
    image:
      'https://t4.ftcdn.net/jpg/02/09/29/75/360_F_209297518_qfCLnmhkq6IlfqsLlCgMgewqvD0nLu71.jpg',
    label: 'weekly special offer',
  },
  {
    id: 2,
    image:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg',
    label: '50% offer',
  },
  {
    id: 3,
    image:
      'https://f.nooncdn.com/food/cms-780x780/Papa%20Johns%20Pizza-1.1714484275.6167455.png',
    label: 'Todays Offer',
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bannerData.length > 0
        ? bannerData.map((d, i) =>  (
         < Carousel.Item key ={`offer-slider-home-page-${d.id}`}>
           <img
           className = "d-block w-100"
           src={d.image || ''}
           alt="first slide"/>
           <Carousel.Caption>
             <h3>{d.label || ''}</h3>
             </Carousel.Caption>
             </Carousel.Item>
        ))
        : null}
    </Carousel>
  );
}

export default Slider;
