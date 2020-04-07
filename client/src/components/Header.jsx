import React from 'react';
import Nav from './Nav'
import { NavLink } from 'react-router-dom'


export default function Header(props) {
  
  return (
    <div className="headerStyle">
        <NavLink className="home-nav-link" exact activeClassName="active" to="/" >
          <h1 className="logoStyle">Joyce</h1>
        </NavLink>
        <Nav />
    </div>
  );
}