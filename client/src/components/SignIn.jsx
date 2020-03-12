import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn(props) {
  return (
    <div>
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={props.handleLogin} >
        <p>Username:</p>
        <input name="username" type="text" value={props.authFormData.username} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.authFormData.password} onChange={props.handleChange} />
        <hr/>
        <button>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}