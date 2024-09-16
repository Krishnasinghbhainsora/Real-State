import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const PropertyTypeFeatures = ({ propertyType }) => {
  const badrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"];
  const balconies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"];
  const furnished = ["Furnished", "unfurnished", "Semi-Furnished"];
  const bathrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"];
  const floors = [
    "Lower Basement",
    "Upper Basement",
    "Ground",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    ">10",
  ];
  const totalFloors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"];

  const propertyTypeFeature = {
    "Flat/Apartment": (
      <>
        <h5 className="mt-3">Property Features</h5>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bedrooms</option>
            {badrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balconies">
          <Form.Label>Balconies</Form.Label>
          <Form.Control as="select">
            <option>Select Balconies</option>
            {balconies.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Furnished Status">
          <Form.Label>Furnished Status</Form.Label>
          <Form.Control as="select">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floors">
          <Form.Label>Floors</Form.Label>
          <Form.Control as="select">
            <option>Select Floors</option>
            {floors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
          <Form.Group controlId="totalfloorNo">
            <Form.Label>Total Floor No.</Form.Label>
            <Form.Control as="select">
              <option>Select Floor No.</option>
              {totalFloors.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="bathrooms">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </>
    ),
    // Add more property types and their specific features here
  };

  return propertyTypeFeature[propertyType] || null;
};

export default PropertyTypeFeatures;
