import React, { useState, useEffect } from 'react';
import { getAllProducts, newOrder } from '../services/api-helper'

export default function Cart(props) {




  const [allProducts, setAllProducts] = useState([])
  const [orderList, setOrderList] = useState({})
  console.log(orderList)
  
function total(x) {
  const values = []
  
  for (const [quantity, price] of Object.values(x)) {
    console.log(Number(quantity) * parseFloat(price))
    values.push(parseFloat(price))
    console.log(values)
}

}



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts()
        setAllProducts(response)
        console.log(response)
      } catch (e) {
        throw e
      }
    }
    fetchData()
  }, [])



  useEffect(() => {
    let cart = allProducts.filter(item => {
      if (Object.keys(orderList).includes(item.id.toString())) {
        let q = orderList[item.id]

        return Object.assign(item, { quantity: q })
      }
    })

    console.log(cart)
    props.setCurOrder(cart)



  }, [orderList])



  const handleUpClick = (e) => {
    let name = e.target.name
    if (orderList.hasOwnProperty(name)) {
      setOrderList(prevState => ({
        ...prevState,
        [name]: prevState[name] += 1
      }))
    } else {
      setOrderList(prevState => ({
        ...prevState,
        [name]: 1
      }))
    }
    total(orderList)
  }

  const handleDownClick = (e) => {
    let name = e.target.name
    if (orderList.hasOwnProperty(name)) {
      setOrderList(prevState => ({
        ...prevState,
        [name]: prevState[name] -= 1
      }))
    } else {
      setOrderList(prevState => ({
        ...prevState,
        [name]: 1
      }))
    }
total(orderList)
  }



  ////////////// Submit Cart Functions ////////////////
  const createOrder = async () => {
    const order = await newOrder(localStorage.getItem("id"), localStorage.getItem("address"), props.delivery, props.hash)
    console.log(order)
  }



  const submitCart = () => {
    createOrder()
  }



  if (allProducts && allProducts) {

    return (
      <div >
        <h1>{`${props.delivery} Cart`}</h1>
        <div className="cart">


          <div className="menu-options">
            <div>Menu Options</div>
            <div>{props.category}</div>

            {allProducts.map((product, index) => (
              <div index={index}>
                <div className="product-option-container">
                  <div>{product.name}</div>
                  <div>Price:$ {product.price}</div>
                  <div>
                    <button name={`${product.id}`} onClick={handleDownClick}>-</button>
                    <input readOnly name={`text-input-${product.id}`} type="integer" value={product.quantity} style={{ width: '20px' }} />
                    <button name={`${product.id}`} onClick={handleUpClick}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="current-order">
            <div>Current Orders</div>
            {props.curOrders.map((item, index) => (
              <div index={index}>
                <div className="order-option-container">
                  <div>{item.name}</div>
                  <div>{item.quantity}</div>
                  <div>${item.quantity * item.price}</div>

                </div>
              </div>
            ))}
            <div>Total: </div>
            <button onClick={submitCart}>Submit Order</button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return "Loading"
  }
}