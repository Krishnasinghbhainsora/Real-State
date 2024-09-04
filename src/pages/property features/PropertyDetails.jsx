import React from "react";
import { Form } from "react-bootstrap";

const PropertyDetails = ({ setPropertyType }) => {
  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  return (
    <>
      <h5 className="mt-3">Property Details</h5>
      <Form.Group controlId="for">
        <Form.Label>For</Form.Label>
        <div>
          <Form.Check inline type="radio" label="Sale" name="for" id="sale" />
          <Form.Check inline type="radio" label="Rent/Lease" name="for" id="rent" />
          <Form.Check inline type="radio" label="PG/Hostel" name="for" id="pg" />
        </div>
      </Form.Group>

      <Form.Group controlId="propertyType">
        <Form.Label className="mt-2">Property Type</Form.Label>
        <Form.Control as="select" onChange={handlePropertyTypeChange}>
          <option>Select Property Type</option>
          <option value="Flat/Apartment">Flat/Appartment</option>
          <option value="Residential House">Residential House</option>
          <option value="Villa">Villa</option>
          <option value="Builder Floor Apartment">Builder Floor Apartment</option>
          <option value="Residential Land/Plot">Residential Land/Plot</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Studio Apartment">Studio Apartment</option>
          <option value="ALL COMMERCIAL">ALL COMMERCIAL</option>
          <option value="Commercial Office Space">Commercial Office Space</option>
          <option value="Office in IT Park/SEZ">Office in IT Park/SEZ</option>
          <option value="Commercial Shop">Commercial Shop</option>
          <option value="Commercial Showroom">Commercial Showroom</option>
          <option value="Commercial Land/Plot">Commercial Land/Plot</option>
          <option value="Industrial Building">Industrial Building</option>
          <option value="Industrial Shed">Industrial Shed</option>
          <option value="Agricultural Land/Plot">Agricultural Land/Plot</option>
          <option value="Farm House">Farm House</option>
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default PropertyDetails;
