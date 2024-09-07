import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const PropertyLocation = () => (
  <>
    
    <h5 className="mt-3">Property Location</h5>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City" />
            </Form.Group>

            <Form.Group controlId="locality">
              <Form.Label className="mt-2">Locality</Form.Label>
              <Form.Control type="text" placeholder="Enter Locality" />
            </Form.Group>

            <Form.Group controlId="landZone">
              <Form.Label className="mt-2">Land Zone</Form.Label>
              <span className="tooltip-icon"> 
      <i className="fas fa-question-circle"></i>
      <span className="tooltip-text " style={{fontSize:'15px', left:'120px'}}>
        Classification of land on the basis of its use like Residential, Commercial, Industrial, Mixed Use Zone & more. To know your land zone refer the Master Plan/Development Plan of your city. 
      </span>
    </span>
              <Form.Control as="select" >
                <option>Select Land Zone</option>
                <option>Industrial</option>
                <option>Commercial</option>
                <option>Residential</option>
                <option>Transport and Communication</option>
                <option>Public Utilities</option>
                <option>Public and Semi Public Use</option>
                <option>Open Spaces</option>
                <option>Agricultural Zone</option>
                <option>Special Economic Zone</option>
                <option>Natural Conservation Zone</option>
                <option>Government Use</option>
              </Form.Control>
            </Form.Group>

             {/* Conditionally render additional features based on selected property type */}
           {propertyType && propertyTypeFeatures[propertyType]}

  </>
);

export default PropertyLocation;
