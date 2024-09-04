import React from "react";
import { Form } from "react-bootstrap";

const PropertyLocation = () => {
  return (
    <>
      <h5 className="mt-3">Property Location</h5>
      <Form.Group controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control as="select">
          <option>Select State</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control as="select">
          <option>Select City</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Locality / Society</Form.Label>
        <Form.Control type="text" placeholder="Enter Locality or Society Name" />
      </Form.Group>

      <Form.Group controlId="pinCode">
        <Form.Label>Pin Code</Form.Label>
        <Form.Control type="text" placeholder="Enter Pin Code" />
      </Form.Group>
    </>
  );
};

export default PropertyLocation;
