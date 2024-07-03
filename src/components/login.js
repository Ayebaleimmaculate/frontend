import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [robotVerified, setRobotVerified] = useState(false);
  const [resetTokenSent, setResetTokenSent] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!robotVerified) {
      alert('Please verify that you are not a robot.');
      return;
    }

    console.log('Email:', email, 'Password:', password);
  };

  const handleForgotPassword = () => {
    setForgotPasswordMode(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Simulate sending reset token (backend logic)
    setTimeout(() => {
      setResetTokenSent(true);
      alert('Reset token sent to your email or phone number.');
      setForgotPasswordMode(false); // Reset forgot password mode after token sent
    }, 2000);
  };

  const handleVerifyRobot = () => {
    setRobotVerified(true);
    alert('You are verified as not a robot.');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={robotVerified}
              onChange={() => setRobotVerified(!robotVerified)}
            /> Verify if you are not a robot
          </label>
        </div>
        <button type="submit" className="btn-login">Login</button>
      </form>
      <div className="login-links">
        {!forgotPasswordMode ? (
          <a href="#" className="link" onClick={handleForgotPassword}>Forgot Password?</a>
        ) : (
          <form onSubmit={handleResetPassword}>
            <div className="form-group">
              <label>Username or Email:</label>
              <input
                type="text"
                // Here you would handle the input for username or email
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="btn-login">Send Reset Token</button>
          </form>
        )}
        <a href="/signup" className="link">Sign Up</a>
        <a href="/contact" className="link">Help Center</a>
      </div>
      <div className="terms-conditions">
        <a href="#terms" className="link" onClick={() => alert(`
          1. Use of Service: By using our services, you agree to comply with all applicable laws and regulations.
          2. Privacy Policy: Your privacy is important to us. Please review our privacy policy to understand our practices.
          3. Payment Terms: All purchases made through our service are final and non-refundable.
          4. User Conduct: You agree not to use our service for any unlawful or prohibited activities.
          5. Limitation of Liability: We are not liable for any indirect, incidental, or consequential damages arising from the use of our service.
        `)}>Terms and Conditions</a>
      </div>
    </div>
  );
};

export default Login;
