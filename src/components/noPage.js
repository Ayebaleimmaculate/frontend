import React from 'react';
import { Link } from 'react-router-dom';
import './noPage.css'; 

const NoPage = () => (
  <div className="no-page-container">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="go-back-link">
      Go back to the home page
    </Link>
  </div>
);

export default NoPage;

