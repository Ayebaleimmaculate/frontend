import React from 'react';
import './footer.css'; 
import facebookLogo from './fb.png';
import twitterLogo from './xxx.png';
import instagramLogo from './igg.png';
import emailLogo from './email.png';
import locationLogo from './location.png'; 

const Footer = () => (
  <footer className="footer">
   <p>&copy; 2023 Faith's Confectionery Bakery</p>

    <p>For more information, visit our sites or follow us on:</p>
    <div className="social-media-links">
      <div className="social-media-icon-container">
        <img src={twitterLogo} alt="Twitter" className="social-media-icon" />
        <p className="icon-username">Faith's Confectionery</p>
      </div>
      <div className="social-media-icon-container">
        <img src={facebookLogo} alt="Facebook" className="social-media-icon" />
        <p className="icon-username">Faith's Confectionery</p>
        <p className="icon-username"></p>
      </div>
      <div className="social-media-icon-container">
        <img src={instagramLogo} alt="Instagram" className="social-media-icon" />
        <p className="icon-username">Faith's Confectionery</p>
      </div>
      <div className="social-media-icon-container">
        <img src={emailLogo} alt="Email" className="social-media-icon" />
        <p className="icon-username">faithsconfectionary256@.com</p>
      </div>
    </div>
    <div className="location-info">
      <img src={locationLogo} alt="Location" className="location-icon" />
      <p>Kyanja Ring Road-Kampala</p>
    </div>
  </footer>
);

export default Footer;
