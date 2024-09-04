import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const PropertyTypeFeatures = ({ propertyType }) => {
  const propertyTypeFeatures = {
    "Flat/Apartment": (
      <>
        <h5 className="mt-3">Property Features</h5>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bedrooms</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bathrooms</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balconies">
          <Form.Label>Balconies</Form.Label>
          <Form.Control as="select">
            <option>Select Balconies</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floorNo">
          <Form.Label>Floor No.</Form.Label>
          <Form.Control as="select">
            <option>Select Floor No.</option>
          </Form.Control>
        </Form.Group>
      </>
    ),
    "Residential House": (
      <>
        <h5 className="mt-3">Property Features</h5>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bedrooms</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bathrooms</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floorArea">
          <Form.Label>Floor Area</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder="Floor Area" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select">
                <option>Square Feet</option>
                <option>Square Meters</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </>
    ),
  };

  return propertyTypeFeatures[propertyType] || null;
};

export default PropertyTypeFeatures;
