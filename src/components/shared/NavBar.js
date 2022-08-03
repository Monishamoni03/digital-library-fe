import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' to='/'>Library Management System</a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
           
            {/* List menu items */}
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/admin'>
                  Admin 
                </Link>
              </li>
            </>
            </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='text'
              placeholder='Search'
            />
            <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';

// class NavBar extends Component {
//   render() {
//   return (
//     <>
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Library Management System</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav ml-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/about">About us</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/contact">Contact</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/login">Login</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/register">Register</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//     </>
//   );
//   }
// }

// export default NavBar;