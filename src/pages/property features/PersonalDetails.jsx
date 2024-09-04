import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const PersonalDetails = ({ userType, setUserType }) => {
  return (
    <>
      <h5>Personal Details</h5>
      <Form.Group controlId="userType">
        <Form.Label>I am</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Owner"
            name="userType"
            id="owner"
            checked={userType === "owner"}
            onChange={() => setUserType("owner")}
          />
          <Form.Check
            inline
            type="radio"
            label="Agent"
            name="userType"
            id="agent"
            checked={userType === "agent"}
            onChange={() => setUserType("agent")}
          />
          <Form.Check
            inline
            type="radio"
            label="Builder"
            name="userType"
            id="builder"
            checked={userType === "builder"}
            onChange={() => setUserType("builder")}
          />
        </div>
      </Form.Group>

      {userType === "owner" && (
        <>
          <Form.Group controlId="name">
            <Form.Label className="mt-2">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group controlId="mobile">
            <Form.Label className="mt-2">Mobile</Form.Label>
            <Row>
              <Col xs={3}>
                <Form.Control type="text" placeholder="IND +91" disabled />
              </Col>
              <Col xs={9}>
                <Form.Control type="text" placeholder="WhatsApp Number" />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="warning" className="mb-3 w-100 mt-2">
            <i className="bi bi-whatsapp"></i> Enter your WhatsApp No. to get enquiries from Buyer/Tenant
          </Button>

          <Form.Group controlId="email">
            <Form.Label className="mt-2">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email" />
          </Form.Group>
        </>
      )}
    </>
  );
};

export default PersonalDetails;
