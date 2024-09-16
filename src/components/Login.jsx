import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import '../componetsCss/SignUp&Login.css';  // For the floating label CSS

const Login = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLeftContentVisible, setLeftContentVisible] = useState(true);
  const [userType, setUserType] = useState('buyer');

  const toggleLeftContent = () => {
    setLeftContentVisible(!isLeftContentVisible);
  };

  const handleMobileChange = (e) => {
    setMobileNo(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();

    if (userType === 'agent' || userType === 'builder') {
      if (mobileNo.trim() === '') {
        alert('Please enter a valid Email ID or Mobile No.');
        return;
      }
    } else {
      if (mobileNo.length !== 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }
    }

    console.log('Sending OTP to:', mobileNo);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (otp.length !== 4) {
      alert('Please enter a valid 4-digit OTP.');
      return;
    }

    console.log('Verifying OTP:', otp);
    // Add OTP verification logic
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success', response);
    // Send the Google token to your backend server for verification and to create or log in the user
    const { credential } = response;
    // Here you can send the credential to your server
    // Example:
    // axios.post('/api/auth/google', { idToken: credential })
    //   .then(response => {
    //     // Handle successful login/signup
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed', error);
    alert('Google login failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
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

          <Form onSubmit={isOtpSent ? handleVerifyOtp : handleSendOtp}>
            {!isOtpSent && (
              <>
                <div className="form-group floating-group ">
                  <Form.Control
                    type="text"
                    name="mobileNo"
                    value={mobileNo}
                    onChange={handleMobileChange}
                    placeholder=" "
                    maxLength={userType === 'agent' ? undefined : '10'}
                    className="form-control mb-3"
                    required
                  />
                  <label className="floating-label">
                    {userType === 'agent' ? 'Enter Email ID or Mobile No.' : 'Enter Mobile No.'}
                  </label>
                </div>
                <Button variant="danger " type="submit" block style={{ width: '100%' }}>
                  Next
                </Button>
              </>
            )}

            {isOtpSent && (
              <>
                <div className="form-group floating-group">
                  <Form.Control
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={handleOtpChange}
                    placeholder=" "
                    maxLength="4"
                    className="form-control mb-2"
                    required
                  />
                  <label className="floating-label">Enter 4-digit OTP</label>
                </div>
                <Button variant="danger" type="submit" block style={{ width: '100%' }}>
                  Verify OTP
                </Button>
              </>
            )}
          </Form>

          {!isOtpSent && (
            <div className="text-center pt-3">
              <small>Or login using</small>
            </div>
          )}

          {!isOtpSent && (
            <div className="text-center mt-3">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
              />
            </div>
          )}

          <div className="already-registered pt-3 text-center">
            <p>
              New to Zwolf Realty? <Link to="/signup"> Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
