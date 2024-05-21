import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart } from 'react-icons/fi';
import {useNavigate} from 'react-router-dom'; 


const pizzaLogo =
  'https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg';
  
function NavigationComponent() {
  const navigator = useNavigate();
  const routeToCart = () => {
    navigator('/Cart');
  }; 
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              alt=""
              src={pizzaLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <p style={{ color: '#FFFFFF', margin: '0px' }}>Pizzalo</p>
          </div>
          <FiShoppingCart color="#FFFFFF" onClick={routeToCart} />
        </div>
      </Container>
    </Navbar>
  );
}
export default NavigationComponent;
