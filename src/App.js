import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

import Home from './components/home';
import Products from './components/products';
import Contact from './components/contacts';
import Checkout from './components/checkOut';
import AboutUs from './components/aboutUs';
import NoPage from './components/noPage';
import Login from './components/login'; // Import the Login component
import Blog from './components/blogs';
import Footer from './components/footer'; // Import the Footer component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkOut" element={<Checkout />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/login" element={<Login />} /> {/* Add this route for Login */}
          <Route path="*" element={<NoPage />} /> {/* Render NoPage for unmatched routes */}
        </Routes>
        
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
};

export default App;
