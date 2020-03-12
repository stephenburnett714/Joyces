import React, { useState, useEffect } from 'react';
import {getByCategory, getAllProducts, newOrder} from '../services/api-helper'

export default function Cart(props) {



  const [catList, setCatList] = useState([])
  const [refresh, triggerRefresh] = useState(0)
  const [orderList, setOrderList] = useState({})
  const [submitedCart, setSubmitedCart] = useState({})
  const [newOrderNumber, setNewOrderNumber] = useState({})
  
  

  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await getByCategory(props.category)
      setCatList(response)
    } catch(e){
      throw e
    }}
    fetchData()
  },[props.category])



  useEffect(()=>{
    let cart = catList.filter(item => {
      if(Object.keys(orderList).includes(item.id.toString())){
        let q = orderList[item.id]

        return Object.assign(item, {quantity: q})
      }})

    console.log(cart)
    props.setCurOrder(cart)



  }, [orderList])



const handleUpClick = (e) => {
  let name = e.target.name
  if(orderList.hasOwnProperty(name)){
    setOrderList(prevState => ({
      ...prevState,
      [name]: prevState[name] += 1
    }))
  }else{
    setOrderList(prevState => ({
      ...prevState,
      [name]: 1
    }))
  }
}

const handleDownClick = (e) => {
  let name = e.target.name
  if(orderList.hasOwnProperty(name)){
    setOrderList(prevState => ({
      ...prevState,
      [name]: prevState[name] -= 1
    }))
  }else{
    setOrderList(prevState => ({
      ...prevState,
      [name]: 1
    }))
  }
}



////////////// Submit Cart Functions ////////////////
const createOrder = async () => {
    const order = await newOrder(localStorage.getItem("id"), localStorage.getItem("address"), props.delivery, props.hash)
    console.log(order)
}

// const handleCart = async () => {
//   const currentCart = await registerUser({user: {...authFormData}});
//   setSubmitedCart({ currentCart });


const submitCart = () => {
  createOrder()

  }



if(props.categoryList && props.categoryList) {

  return (
    <div>
      <div className="cart-category-headers">
    <div className="cart-categories" onClick={() => props.setCategory("appetizer")}>Appetizers</div>
    <div className="cart-categories" onClick={() => props.setCategory("entree")}>Entree</div>
    <div className="cart-categories" onClick={() => props.setCategory("dessert")}>Dessert</div>
    <div className="cart-categories" onClick={() => props.setCategory("drink")}>Drinks</div>
    </div>
    <div>
      <h1>{`${props.delivery} Cart`}</h1>
      </div>
      <div>
        <div>Menu Options</div>
        <div>{props.category}</div>

        {catList.map((product, index) => (
            <div index={index}>
                <div>


                  {product.name} 
                  Price:{product.price}
                  <button  name={`${product.id}`} onClick={handleDownClick}>-</button>
                  <input readOnly name={`text-input-${product.id}`} type="integer" value={product.quantity} style={{width: '20px'}}/>
                  <button  name={`${product.id}`} onClick={handleUpClick}>+</button>
                  
                </div>
            </div>
        ))}
      </div>
      <div>
        <p>Current Orders</p>
        {props.curOrders.map((item, index) => (
          <div index={index}>
            <div>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.quantity}</div>
              <div>{item.quantity*item.price}</div>

              <hr/>
            </div>
            </div>
        ))}
        <button onClick={submitCart}>Submit Order</button>
      </div>
    </div>
    
  )
        }
        else {
          return "Loading"
        }
}