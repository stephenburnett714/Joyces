import React from 'react';

export default function Register(props) {
  console.log(props)
  return (
    <div>
      <form onSubmit={props.handleRegister}>
        <div className="register-title">Welcome to Joyce's</div>
        <hr />
        <div>
          <p>First Name:</p>
          <input name="first_name" type="text"  value={props.authFormData.first_name} onChange={props.handleChange} />

          <p>Last Name:</p>
          <input name="last_name" type="text" value={props.authFormData.last_name} onChange={props.handleChange} />

          <p>Email:</p>
          <input name="email" type="text" value={props.authFormData.email} onChange={props.handleChange} />

          <p>Username:</p>
          <input name="username" type="text" value={props.authFormData.username} onChange={props.handleChange} />

          <p>Password:</p>
          <input name="password" type="password" value={props.authFormData.password} onChange={props.handleChange} />

          <p>Address:</p>
          <input name="address" type="text" value={props.authFormData.address} onChange={props.handleChange} />
          <hr />
          <button>Sign Up</button>

        </div>
      </form>
    </div>
  );
}