import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import '../componetsCss/SignUp&Login.css'; 

const Login = () => {
  const [mobileOrEmail, setMobileOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);  // State to toggle password visibility
  const [isLeftContentVisible, setLeftContentVisible] = useState(true);
  const [userType, setUserType] = useState('buyer');

  const toggleLeftContent = () => {
    setLeftContentVisible(!isLeftContentVisible);
  };

  const handleMobileOrEmailChange = (e) => {
    setMobileOrEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!mobileOrEmail.trim() || !password.trim()) {
      alert('Please enter both Mobile/Email and Password.');
      return;
    }

    console.log('Logging in with:', mobileOrEmail, password, 'as', userType);
    // Add logic to authenticate user based on mobile/email and password
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success', response);
    const { credential } = response;
    // Send the Google token to your backend server for verification
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed', error);
    alert('Google login failed. Please try again.');
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <section>
      <div className="container-fluid signup-page">
        <div className={`info-section ${isLeftContentVisible ? '' : 'hidden'}`}>
          <h3 className="pb-5 text-white">Things you Can Do with Your Account</h3>
          <ul className="benefits-list p-3">
            <li className="pb-3">Post one Single Property for FREE</li>
            <li className="pb-3">Set property alerts for your requirement</li>
            <li className="pb-3">Get accessed by over 1 Lakh buyers</li>
            <li className="pb-3">Showcase your property as Rental, PG, or for Sale</li>
            <li className="pb-3">Get instant queries over Phone, Email, and SMS</li>
            <li className="pb-3">Track responses & views online</li>
            <li className="pb-3">Add detailed property information & multiple photos per listing</li>
          </ul>
        </div>

        <div className="toggle-button-container">
          <Button variant="link" className="toggle-button" onClick={toggleLeftContent}>
            {isLeftContentVisible ? '←' : '→'}
          </Button>
        </div>

        <div className={`form-section ${isLeftContentVisible ? '' : 'centered'}`} style={{ marginTop: '-40px' }}>
          <h3 className="pb-3">Login</h3>

          {/* User Type Selection */}
          <div className="user-type-selection">
            <p>Are you</p>
            <Form.Check
              type="radio"
              label="Buyer/Owner"
              name="userType"
              value="buyer"
              checked={userType === 'buyer'}
              onChange={(e) => setUserType(e.target.value)}
              inline
            />
            <Form.Check
              type="radio"
              label="Agent/Builder"
              name="userType"
              value="agent"
              checked={userType === 'agent'}
              onChange={(e) => setUserType(e.target.value)}
              inline
            />
          </div>

          <Form onSubmit={handleLogin}>
            <div className="form-group floating-group">
              <Form.Control
                type="text"
                name="mobileOrEmail"
                value={mobileOrEmail}
                onChange={handleMobileOrEmailChange}
                placeholder=" "
                className="form-control mb-3"
                required
              />
              <label className="floating-label">Enter Mobile No. or Email</label>
            </div>

            {/* Password Input with Show/Hide Button */}
            <div className="form-group floating-group password-group">
              <Form.Control
                type={isPasswordVisible ? 'text' : 'password'}  // Toggle between text and password types
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder=" "
                className="form-control mb-3"
                required
              />
              <label className="floating-label">Enter Password</label>

              {/* Show/Hide Password Icon */}
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <Button variant="danger" type="submit" block style={{ width: '100%' }}>
              Login
            </Button>
          </Form>

          <div className="text-center pt-3">
            <small>Or login using</small>
          </div>

          <div className="text-center mt-3">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
            />
          </div>

          <div className="already-registered pt-3 text-center">
            <p>
              New to Zwolf Realty? <Link to="/signup"> Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
      </section>
    </GoogleOAuthProvider>
  );
};

export default Login;
