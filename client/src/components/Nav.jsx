import React from 'react';
import { NavLink, Link } from 'react-router-dom'


class Nav extends React.Component {
  state = {
    open: false,
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };


  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div className="nav-container">
        <NavLink className="nav-links" exact activeClassName="active" to="/" >
          Home
      </NavLink>

        <NavLink className="nav-links" exact activeClassName="active" to="/menu" >
          Menu
      </NavLink>

        <NavLink className="nav-links" exact activeClassName="active" to="/delivery" >
          Delivery
      </NavLink>

        <NavLink className="nav-links" exact activeClassName="active" to="/events" >
          Events
      </NavLink>

        <NavLink className="nav-links" exact activeClassName="active" to="/about" >
          About
      </NavLink>

        <NavLink className="nav-links" exact activeClassName="active" to="/profile" >
          Profile
      </NavLink>

      <NavLink className="nav-links" exact activeClassName="active" to="/register" >
          Register
      </NavLink>

      <NavLink className="nav-links" exact activeClassName="active" to="/signin" >
          Sign-In
      </NavLink>

        <div className="container">
          <button type="button" className="button" onClick={this.handleButtonClick}>
            ☰
         </button>
          {this.state.open && (
            <div class="dropdown" class="link-names">
              <Link exact activeClassName="active" to="/">Home</Link>
              <Link exact activeClassName="active" to="/menu">Menu</Link>
              <Link exact activeClassName="active" to="/delivery">Delivery</Link>
              <Link exact activeClassName="active" to="/events">Events</Link>
              <Link exact activeClassName="active" to="/about">About</Link>
              <Link exact activeClassName="active" to="/profile">Profile</Link>
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default Nav