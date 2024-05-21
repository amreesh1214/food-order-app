import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



function SliderItem({data={}}) {
  return (
    <Carousel.Item key={`offer slider home page -${data.id}`}>
      <img classname="d-block w-100" src={data.image || ''} alt={data.label} />
      <Carousel.Caption>
        <h3>{data.label || ''}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default SliderItem;
