import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import { loginUser, registerUser, verifyUser, updateEmail, updateAddress, destroyUser } from './services/api-helper'
import { Route } from 'react-router-dom'


export default function App(props) {
  const [delivery, setDelivery] = useState('delivery')
  const [currentUser, setCurrentUser] = useState({})
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('appetizer')
  const [categoryList, setCategoryList] = useState([])
  const [user, setUser] = useState({})
  const [email, setEmail] = useState('')
  const [hash, setHash] = useState('')
  const [address, setAddress] = useState('')
  

  const [authFormData, setAuthFormData] = useState({
    first_name:"",
    last_name:"",
    username: "",
    email: "",
    password: "",
    address:""
  }
)

  console.log(currentUser)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await verifyUser()
        setUser({ currentUser })

      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])

  const handleEmail = (e) => {
    let value = e.target.value
    setEmail(value)
  }

  const handleAddress = (e) => {
    let value = e.target.value
    setAddress(value)
  }


  const handleLoginButton = () => {
    props.history.push("/signin")
  }

  const handleLogin = async (e) => {
      e.preventDefault()
      const payload = {
        username: authFormData.username,
        password: authFormData.password
      }

      const currentUser = await loginUser(payload)
      console.log(currentUser)
      localStorage.setItem('id', JSON.stringify(currentUser.id))
      localStorage.setItem('first_name', JSON.stringify(currentUser.first_name))
      localStorage.setItem('last_name', JSON.stringify(currentUser.last_name))
      localStorage.setItem('email', JSON.stringify(currentUser.email))
      localStorage.setItem('address', JSON.stringify(currentUser.address))
      localStorage.setItem('hash', JSON.stringify(currentUser.password))

      }
      

  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(authFormData)
    const currentUser = await registerUser({user: {...authFormData}});
    setUser({ currentUser });
  }

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("email");
    localStorage.removeItem("address");
    localStorage.removeItem("authToken")
    localStorage.removeItem("hash")
    setUser(null)
  }

  const authHandleChange = (e) => {
    const { name, value } = e.target;
      setAuthFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  const editEmail = () => {
    const currentEmail = updateEmail(localStorage.getItem('id'), email, hash);
    console.log(currentEmail)
    localStorage.setItem('email', email)
  }

  const editAddress = () => {
    const currentAddress = updateAddress(localStorage.getItem('id'), address, hash);
    console.log(currentAddress)
    localStorage.setItem('address', address)
  }

  const passwordHandle = (e) => {
    let value = e.target.value
    setHash(value)
  }

  const deleteUser = () => {
    const deletedUser = destroyUser(localStorage.getItem('id'))
    localStorage.removeItem("id");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("email");
    localStorage.removeItem("address");
    localStorage.removeItem("authToken")
    localStorage.removeItem("hash")
    setUser(null)
  }





  return (
    <div className="App">

      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Main
        cart={cart}
        setCart={setCart}
        delivery={delivery}
        setDelivery={setDelivery}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        categoryList= {categoryList}
        setCategoryList={setCategoryList}
        category={category}
        setCategory={setCategory}
        handleRegister={handleRegister}
        handleChange={authHandleChange}
        userData={user}
        authFormData={authFormData}
        setAuthFormData={setAuthFormData}
        setCurrentUser={setCurrentUser}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        updateEmail={updateEmail}
        editEmail={editEmail}
        handleEmail={handleEmail}
        passwordHandle={passwordHandle}
        handleAddress={handleAddress}
        editAddress={editAddress}
        deleteUser={deleteUser}
      hash={hash}
      />
      <Footer />

      <Route exact path="/login" render={() => (
          <SignIn
            handleLogin={handleLogin}
            handleChange={authHandleChange}
            // formData={props.user.authFormData} 
            />)} 
            />

    </div>
  );
}
