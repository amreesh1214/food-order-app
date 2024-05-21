import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function ProductCard({ data = {} }) {
  return (
    <Card>
      <Card.Img variant="top" src={data.imageUrl} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.price}</Card.Text>
        {
          // data?.sizes?.length>0? <Button variant="primary">View Option </Button>:
          <Button variant="primary">Add to Cart</Button>}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
