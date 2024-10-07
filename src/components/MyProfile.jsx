import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

const MyProfile = () => {
    // State to hold form data
    const [profile, setProfile] = useState({
        name: 'tony',
        registeredAs: 'Individual',
        email: 'tony@gmail.com',
        alternateEmail: '',
        mobile: '9874563210',
        alternateMobile:'',
    });

    // State for edit mode
    const [isEditing, setIsEditing] = useState(false);

    // State for password change modal
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    // Handle form submission for profile update
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Profile:', profile);
        setIsEditing(false);
    };

    // Handle password change input
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    // Handle password change form submission
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        const { oldPassword, newPassword, confirmPassword } = passwords;

        // Validate passwords
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password don't match!");
            return;
        }

        console.log('Changing Password:', { oldPassword, newPassword });
        // You can send this data to the backend for processing
        setShowPasswordModal(false);
    };

    return (
        <Container fluid>
            <Row className="mt-4">
                <Col xs={12} md={8} lg={9} className="content">
                    <div id="profile-details">
                        <h3 className="text-danger ">Profile Details</h3>

                        {isEditing ? (
                            <Form onSubmit={handleSubmit}>
                                {/* Name */}
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder='Enter your name'
                                        value={profile.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                {/* Registered As */}
                                <Form.Group controlId="formRegisteredAs">
                                    <Form.Label>Registered As</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="registeredAs"
                                        placeholder='Registered as'
                                        value={profile.registeredAs}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                {/* Email */}
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder='Enter your email'
                                        value={profile.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                {/* Alternate Email */}
                                <Form.Group controlId="formAlternateEmail">
                                    <Form.Label>Alternate Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="alternateEmail"
                                        placeholder="Enter alternate email"
                                        value={profile.alternateEmail}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                {/* Mobile */}
                                <Form.Group controlId="formMobile">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="mobile"
                                        placeholder='Enter mobile number'
                                        value={profile.mobile}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formAlternateMobile">
                                    <Form.Label>Alternate Mobile</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="alternateMobile"
                                        placeholder='Enter alternate mobile number'
                                        value={profile.alternateMobile}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                {/* Buttons */}
                                <Button  type="submit" className="mr-2 mt-3" style={{backgroundColor:"red", border:"none"}}>
                                    Save Changes
                                </Button>
                                <Button variant="secondary" className=" mt-3" onClick={() => setIsEditing(false)}>
                                    Cancel
                                </Button>
                            </Form>
                        ) : (
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Name:</th>
                                        <td>{profile.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Registered As:</th>
                                        <td>{profile.registeredAs}</td>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                        <td>{profile.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Alternate Email:</th>
                                        <td>{profile.alternateEmail || <a href="#add" onClick={() => setIsEditing(true)}>Add</a>}</td>
                                    </tr>
                                    <tr>
                                        <th>Mobile:</th>
                                        <td>{profile.mobile}</td>
                                    </tr>
                                    <tr>
                                        <th>Alternate Mobile:</th>
                                        <td>{profile.alternateMobile || <a href="#add" onClick={() => setIsEditing(true)}>Add</a>}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}

                        {/* Edit and Change Password Buttons */}
                        {!isEditing && (
                            <>
                                <Button  className="mr-2" onClick={() => setIsEditing(true)} style={{backgroundColor:"red", border:"none"}}>
                                    Edit Profile
                                </Button>
                                <Button  onClick={() => setShowPasswordModal(true)} style={{backgroundColor:"green", border:"none"}}>
                                    Change Password
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Change Password Modal */}
                    <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Change Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handlePasswordSubmit}>
                                <Form.Group controlId="formOldPassword ">
                                    <Form.Label>Old Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="oldPassword"
                                        value={passwords.oldPassword}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formNewPassword " className='pt-2'>
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="newPassword"
                                        value={passwords.newPassword}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formConfirmPassword" className='pt-2'>
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        value={passwords.confirmPassword}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </Form.Group>

                                <Button  type="submit" style={{backgroundColor:"green", border:"none"}} className='mt-2 '>
                                    Change Password
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default MyProfile;
