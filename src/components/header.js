
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        
        <li><Link to="/about">AboutUs</Link></li>

        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/contact">Checkout</Link></li>
        <li><Link to="/cart">Blog</Link></li>
        <li><Link to="/about">Login</Link></li>
       
        <li><Link to="/cart">NoPage</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
