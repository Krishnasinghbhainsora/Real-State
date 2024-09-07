import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const TransactionDetails = () => {
  return (
    <>
      <h5 className="mt-3">Transaction Type</h5>
      <Form.Group controlId="transactionType">
        <Form.Label>Transaction Type</Form.Label>
        <Form.Control as="select">
          <option>Select Transaction Type</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="availability">
        <Form.Label className="mt-2">Property Availability</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control type="date" />
          </Col>
        </Row>
      </Form.Group>
    </>
  );
};

export default TransactionDetails;
