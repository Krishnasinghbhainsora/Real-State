import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);

  // Start the timer when the OTP is sent
  useEffect(() => {
    let countdown;
    if (otpSent && !resendEnabled) {
      countdown = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    if (timer === 0) {
      setResendEnabled(true);
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [otpSent, timer, resendEnabled]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (email) {
      setOtpSent(true);
      setShowOtpModal(true);
      setOtp('123456'); // Simulate sending OTP
      setTimer(60);
      setResendEnabled(false);
    }
  };

  const handleResendOtp = () => {
    setOtp('123456'); // Simulate sending OTP again
    setTimer(60);
    setResendEnabled(false);
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      setIsOtpVerified(true);
      setOtpError('');
    } else {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  const handleUpdatePassword = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      setPasswordUpdated(true);
      setShowOtpModal(false);
      setPasswordError('');
    } else {
      setPasswordError('Passwords do not match. Please try again.');
    }
  };

  const restartProcess = () => {
    setEmail('');
    setOtpSent(false);
    setIsOtpVerified(false);
    setNewPassword('');
    setConfirmPassword('');
    setOtpError('');
    setPasswordError('');
    setShowOtpModal(false);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      backgroundColor: '#f8f9fa',
    },
    formBox: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
      width: '320px',
      textAlign: 'center',
    },
    title: {
      marginBottom: '20px',
    },
    submitButton: {
      marginTop: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h3 style={styles.title}>Forget Password</h3>
        <Form onSubmit={handleSendOtp}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Your E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="xyz@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={otpSent && !isOtpVerified}
            />
          </Form.Group>
          {!otpSent || !isOtpVerified ? (
            <Button
              variant="danger"
              type="submit"
              style={{ ...styles.submitButton, width: '100%' }}
            >
              Send OTP
            </Button>
          ) : null}
        </Form>

        {otpSent && !isOtpVerified && (
          <Alert variant="info" className="mt-3">
            OTP has been sent to your email!
          </Alert>
        )}

        {passwordUpdated && (
          <Alert variant="success" className="mt-3">
            Your password has been updated successfully!
          </Alert>
        )}
      </div>

      <Modal show={showOtpModal} onHide={restartProcess}>
        <Modal.Header closeButton>
          <Modal.Title>{isOtpVerified ? 'Update Password' : 'Verify OTP'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isOtpVerified ? (
            <>
              <Form.Group controlId="formOtp">
                <Form.Label>Enter 6-digit OTP</Form.Label>
                <Form.Control
                  type="text"
                  maxLength="6"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                {otpError && (
                  <Alert variant="danger" className="mt-2">
                    {otpError}
                  </Alert>
                )}
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mt-2">
                <Button variant="danger" onClick={handleVerifyOtp}>
                  Verify OTP
                </Button>
                <Button
                  variant="link"
                  onClick={handleResendOtp}
                  disabled={!resendEnabled}
                  className="text-decoration-none"
                >
                  {resendEnabled ? 'Resend OTP' : `Resend in ${timer}s`}
                </Button>
              </div>
            </>
          ) : (
            <>
              <Form.Group controlId="formNewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword" className="mt-2">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {passwordError && (
                  <Alert variant="danger" className="mt-2">
                    {passwordError}
                  </Alert>
                )}
              </Form.Group>
              <Button
                variant="success"
                onClick={handleUpdatePassword}
                className="mt-2"
              >
                Update Password
              </Button>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={restartProcess}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ForgetPassword;
