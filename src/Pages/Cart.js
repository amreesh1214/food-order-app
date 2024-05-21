import React, { useState, useEffect } from 'react';
import CartCard from '../Components/Cards/CartCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { data } from '../data';

const cartTotal = (data) => {
  let total = 0;
  if (data.length < 0) {
    total = 0;
  } else {
    data.forEach((d) => {
      total += d.quantity * d.price;
    });
  }
  return total;
};

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      setCart(data);
    }
  }, [data]);

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(cartTotal(cart));
    }
  }, [cart]);

  const handleQuantityBtn = (type, id) => {
    console.log(type, id);
    let cartCopy = [...cart];
    const itemSelected = cartCopy.filter((d, i) => d.id === id);
    if (type === '0') {
      itemSelected[0].quantity += 1;
    }
    if (type === '1' && itemSelected[0].quantity > 0) {
      itemSelected[0].quantity -= 1;
    }

    setCart(cartCopy);
  };
  return (
    <section id="cart-page-container" className="p-2">
      <p>Cart({10})</p>
      <div id="cart-listing-container" className="container mt-3">
        <Row>
          {cart.length > 0 ? (
            cart.map((d, i) => (
              <CartCard key={i} data={d} quantityCB={handleQuantityBtn} />
            ))
          ) : (
            <p>Pizza is not available today</p>
          )}
        </Row>
        <div className="cart-calculator">
          <ul>
            {cart.length > 0 &&
              data.map((d, i) => (
                <li key={i}>
                  {d.name} X {d.quantity}
                </li>
              ))}
          </ul>
          <h3>Cart Total</h3>
          <p>{total}</p>
        </div>
      </div>
    </section>
  );
}
export default Cart;
