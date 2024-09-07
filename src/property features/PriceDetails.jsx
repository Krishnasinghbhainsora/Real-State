import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const PriceDetails = () => (
  <>
    <h5 className="mt-3">Price Details</h5>
            <Form.Group controlId="totalPrice">
              <Form.Label>Total Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Total Price" />
            </Form.Group>

            <Form.Group controlId="bookingToken">
              <Form.Label className="mt-2">Booking/Token Amount (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Booking/Token Amount"
              />
            </Form.Group>

            <Form.Group controlId="priceNegotiable">
              <Form.Check className="mt-2" type="checkbox" label="Price Negotiable" />
            </Form.Group>
  </>
);

export default PriceDetails;
