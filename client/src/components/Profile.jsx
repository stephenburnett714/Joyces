import React from 'react';

export default function Profile(props) {

console.log(localStorage.getItem('id'))


  return (
    <div>
        <div>Profile</div>
        <hr/>
        <div>First Name: {localStorage.getItem('first_name') ? localStorage.getItem('first_name') : "Unknown"}</div>
        <div>Last Name: {localStorage.getItem('last_name') ? localStorage.getItem('last_name') : "Unknown"}</div>
        <div>Email: {localStorage.getItem('email') ? localStorage.getItem('email') : "Unknown"}</div>
        <div>Address: {localStorage.getItem('address') ? localStorage.getItem('address') : "Unknown"}</div>


        <form onSubmit={props.editEmail}>
        <div>Change Email</div>
        New Email: <input type="text" onChange={props.handleEmail}></input>
        Password: <input type="password" onChange= {props.passwordHandle}></input>
        <button>Change Email</button>
        </form>



        <form onSubmit={props.editAddress}>
        <div>Change Address</div>
        New Address: <input type="text" onChange={props.handleAddress}></input>
        Password: <input type="password" onChange= {props.passwordHandle}></input>
        <button>Change Address</button>
        </form>


        <div>

        </div>

        <button onClick={props.handleLogout}>Logout</button>
        <hr/>
        <button onClick={props.deleteUser}>Delete Account</button>
    </div>
  );
}