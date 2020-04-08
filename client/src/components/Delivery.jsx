import React from 'react';
import { Link } from 'react-router-dom'
import takeout from '../images/takeout.png'
import delivery from '../images/delivery.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faCar } from '@fortawesome/free-solid-svg-icons'

export default function Delivery(props) {

  return (
    <div>
      <div className="delivery-container">
        <div>
          <Link exact activeClassName="active" to="/cart">
            <FontAwesomeIcon style={{ color: "#000000" }} onClick={() => props.setDelivery("Delivery")} size="10x" icon={faCar} />
          </Link>
          <div className="delivery-option">Delivery</div>
        </div>

        <div>
          <Link exact activeClassName="active" to="/cart">
            <FontAwesomeIcon style={{ color: "#000000" }} onClick={() => props.setDelivery("Take-out")} size="10x" icon={faUtensils} />
          </Link>
      <div className="delivery-option">Take Out</div>
      </div>

      </div>
    </div>
  );
}