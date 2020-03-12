import React from 'react';
import { Link } from 'react-router-dom'
import takeout from '../images/takeout.png'
import delivery from '../images/delivery.png'

export default function Delivery(props) {

  return (
    <div>
      <div>
        <Link exact activeClassName="active" to="/cart">
          <img onClick={() => props.setDelivery("Delivery")} src={delivery} alt="Delivery" />
        </Link>

        <div>Delivery</div>
        <Link exact activeClassName="active" to="/cart">
          <img onClick={() => props.setDelivery("Take-out")} src={takeout} alt="TakeOut" />
        </Link>
        
        <div>Take Out</div>
      </div>

    </div>
  );
}