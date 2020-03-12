import React from 'react';
import Nav from './Nav'
import '../App.css';


export default function Header(props) {
  
  return (
    <div className="headerStyle">
        <h1 className="logoStyle">Joyce</h1>
        <Nav />
    </div>
  );
}