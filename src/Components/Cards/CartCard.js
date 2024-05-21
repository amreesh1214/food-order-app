import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CartCard({ data = {} , quantityCB = ()=>{}}) {
  return (
    <Card 
    class = "product-card" 
    style ={{padding:'0px', width:'100%', margin:'0 0 10px 0' }
    }>
      <div style={{width:'100%',display:'flex'}}>
      <Card.Img
       variant="top" 
       src={data.imageUrl}
       style={{width:'100px'}}
       className="cart-product-image" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.price}</Card.Text>
     <div 
     style={{width:'200px',display:'flex',alignItems:'center '}} >
          <Button color='success' 
        sixe='sm' onClick={()=>quantityCB('1',data.id)}>
          -
        </Button>
          <p>{data.quantity}</p>
          <Button color='success' 
        sixe='sm' onClick={()=>quantityCB('0',data.id)}>
          +
        </Button>
          </div>
      </Card.Body>
      </div>
    </Card>
  );
}

export default CartCard;
