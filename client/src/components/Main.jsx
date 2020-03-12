import React, {useState} from 'react';
import About from './About'
import Cart from './Cart'
import CheckOut from './CheckOut'
import Delivery from './Delivery'
import Events from './Events'
import Home from './Home'
import Menu from './Menu'
import OrderComplete from './OrderComplete'
import Profile from './Profile'
import Register from './Register'
import SignIn from './SignIn'
import { Route } from 'react-router-dom'


export default function Main(props) {

  const [curOrders, setCurOrder] = useState([])

  return (
    <div>
      {/* List of all the Routes for the site */}

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/cart">
        <Cart
          cart={props.cart}
          setCart={props.setCart}
          delivery={props.delivery}
          categoryList={props.categoryList}
          setCategoryList={props.setCategoryList}
          category={props.category}
          setCategory={props.setCategory}
          curOrders={curOrders}
          setCurOrder={setCurOrder}
          hash={props.hash}
        />
      </Route>

      <Route exact path="/checkout">
        <CheckOut />
      </Route>

      <Route exact path="/delivery" >
        <Delivery
          delivery={props.delivery}
          setDelivery={props.setDelivery}
        />
      </Route>

      <Route exact path="/events">
        <Events />
      </Route>

      <Route exact path="/menu">
        <Menu />
      </Route>

      <Route exact path="/ordercomplete">
        <OrderComplete />
      </Route>

      <Route exact path="/profile">
        <Profile 
        userData={props.userData}
        handleLogout={props.handleLogout}
        updateEmail={props.updateEmail}
        editEmail={props.editEmail}
        handleEmail={props.handleEmail}
        passwordHandle={props.passwordHandle}
        handleAddress={props.handleAddress}
        editAddress={props.editAddress}
        deleteUser={props.deleteUser}
        />
      </Route>

      <Route exact path="/signin">
        <SignIn
          handleChange={props.handleChange}
          authFormData={props.authFormData}
          handleLogin={props.handleLogin}
        />
      </Route>

      <Route exact path="/register">
        <Register
          handleRegister={props.handleRegister}
          handleChange={props.handleChange}
          userData={props.userData}
          authFormData={props.authFormData}
          setAuthFormData={props.setAuthFormData}
          setCurrentUser={props.setCurrentUser}
          handleName={props.handleName}
        />
      </Route>


    </div>
  );
}