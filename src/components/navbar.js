import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Your Logo
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutUs" className="nav-link">
              AboutUs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/checkOut" className="nav-link">
              Checkout
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/noPage" className="nav-link">
              NoPage
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
