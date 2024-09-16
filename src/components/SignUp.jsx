import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../componetsCss/SignUp&Login.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    termsAccepted: false,
  });
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const [isLeftContentVisible, setLeftContentVisible] = useState(true);

  const toggleLeftContent = () => {
    setLeftContentVisible(!isLeftContentVisible);
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userType, name, email, password, mobileNumber, termsAccepted } = formData;

    // Basic form validation
    if (!userType || !name || !email || !password || !mobileNumber || !termsAccepted) {
      alert('Please fill in all fields and accept the terms and conditions.');
      return;
    }

    console.log(formData);
    // You can add form submission logic here (e.g., API call)
  };
  

  return (
    <div className="container-fluid signup-page">
      {/* Left Column - Information Section */}
      <div className={`info-section ${isLeftContentVisible ? '' : 'hidden'}`}>
        <h3 className='pb-5 text-white'>Things you Can Do with Your Account</h3>
        <ul className="benefits-list p-3">
          <li className='pb-3'>Post one Single Property for FREE</li>
          <li className='pb-3'>Set property alerts for your requirement</li>
          <li className='pb-3'>Get accessed by over 1 Lakh buyers</li>
          <li className='pb-3'>Showcase your property as Rental, PG, or for Sale</li>
          <li className='pb-3'>Get instant queries over Phone, Email, and SMS</li>
          <li className='pb-3'>Track responses & views online</li>
          <li className='pb-3'>Add detailed property information & multiple photos per listing</li>
        </ul>
      </div>

      {/* Toggle Button */}
      <div className="toggle-button-container">
        <Button variant="link" className="toggle-button" onClick={toggleLeftContent}>
          {isLeftContentVisible ? '←' : '→'}
        </Button>
      </div>

      {/* Right Column - Sign Up Form */}
      <div className={`form-section ${isLeftContentVisible ? '' : 'centered'}`} style={{marginTop:'40px'}}>
        <h3 className=' pt-3 '>Sign Up</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>I am</Form.Label>
            <div className="d-flex gap-3 pb-2">
              <Form.Check
                type="radio"
                label="Buyer/Owner/Tenant"
                name="userType"
                value="Buyer/Owner/Tenant"
                onChange={handleChange}
                checked={formData.userType === 'Buyer/Owner/Tenant'}
              />
              <Form.Check
                type="radio"
                label="Agent"
                name="userType"
                value="Agent"
                onChange={handleChange}
                checked={formData.userType === 'Agent'}
              />
              <Form.Check
                type="radio"
                label="Builder"
                name="userType"
                value="Builder"
                onChange={handleChange}
                checked={formData.userType === 'Builder'}
              />
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mb-2"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className='mb-2'
              
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mb-2"
            />
          </Form.Group>

          <Form.Group>
        <Form.Label>Mobile Number</Form.Label>
        <PhoneInput
        
        className='mb-2'
          country={'in'}  // default country
          value={phone}
          onChange={handlePhoneChange}
          enableSearch={false} // Allow searching for country codes
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
        
          }}
          
        />
      </Form.Group>

          <Form.Group>
            <Form.Check
              type="checkbox"
              label="I agree to the Terms & Conditions"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="pb-2"
            />
          </Form.Group>

          <Button variant="danger " type="submit" block style={{width:'100%'}}>
            Sign Up
          </Button>
        </Form>
        <div className="already-registered pt-3 text-center">
          <p>Already registered? <Link to='/login'> Login Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
