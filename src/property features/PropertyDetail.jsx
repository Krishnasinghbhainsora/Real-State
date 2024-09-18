import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { PropertyTypeFeatures } from "./PropertyTypeFeatures"; // Import the data

const PropertyDetail = ({ propertyType, handlePropertyTypeChange }) => (
  <>
    <h5 className="mt-3">Property Details</h5>
    <h5 className="mt-3">Property Details</h5>
            <Form.Group controlId="for">
              <Form.Label>For</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Sale"
                  name="for"
                  id="sale"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Rent/Lease"
                  name="for"
                  id="rent"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="PG/Hostel"
                  name="for"
                  id="pg"
                />
              </div>
              </Form.Group>


{/* Property Features - Conditionally Rendered */}
<Form.Group controlId="propertyType">
  <Form.Label className="mt-2">Property Type</Form.Label>
  <Form.Control as="select" onChange={handlePropertyTypeChange}>
    <option>Select Property Type</option>

    {/* Non-clickable heading for ALL RESIDENTIAL */}
    <option className="dropdown-heading" disabled>ALL RESIDENTIAL</option>
    <option value="Flat/Apartment">Flat/Apartment</option>
    <option value="Residential House">Residential House</option>
    <option value="Villa">Villa</option>
    <option value="Builder Floor Apartment">Builder Floor Apartment</option>
    <option value="Residential Land/Plot">Residential Land/Plot</option>
    <option value="Penthouse">Penthouse</option>
    <option value="Studio Apartment">Studio Apartment</option>

    {/* Non-clickable heading for ALL COMMERCIAL */}
    <option className="dropdown-heading" disabled>ALL COMMERCIAL</option>
    <option value="Commercial Office Space">Commercial Office Space</option>
    <option value="Office in IT Park/SEZ">Office in IT Park/SEZ</option>
    <option value="Commercial Shop">Commercial Shop</option>
    <option value="Commercial Showroom">Commercial Showroom</option>
    <option value="Commercial Land/Plot">Commercial Land/Plot</option>
    <option value="Industrial Land">Industrial Land</option>

    {/* Non-clickable heading for ALL AGRICULTURAL */}
    <option className="dropdown-heading" disabled>ALL AGRICULTURAL</option>
    <option value="Agricultural Land/Plot">Agricultural Land/Plot</option>
    <option value="Farm House">Farm House</option>
  </Form.Control>
</Form.Group> 



    {/* Conditionally render additional features based on selected property type */}
    {propertyType && PropertyTypeFeature[propertyType]}
  </>
);

export default PropertyDetail;
