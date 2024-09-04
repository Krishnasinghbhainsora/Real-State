import React from "react";
import { Form } from "react-bootstrap";

const PriceDetails = () => {
  return (
    <>
      <h5 className="mt-3">Price Details</h5>
      <Form.Group controlId="price">
        <Form.Label>Total Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Total Price" />
      </Form.Group>

      <Form.Group controlId="maintenance">
        <Form.Label>Maintenance (Monthly)</Form.Label>
        <Form.Control type="text" placeholder="Enter Maintenance" />
      </Form.Group>

      <Form.Group controlId="bookingAmount">
        <Form.Label>Booking Amount</Form.Label>
        <Form.Control type="text" placeholder="Enter Booking Amount" />
      </Form.Group>
    </>
  );
};

export default PriceDetails;
