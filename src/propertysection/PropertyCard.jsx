import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Card, Row, Col } from 'react-bootstrap';
import '../propertysection/PropertyCard.css'
const PropertyCard = ({ property = {} }) => {

  return (
    <Card className="property-cards mb-4">
    <Row className="no-gutters">
      <Col md={5}>
        <Card.Img variant="top" src={property.image} className="property-image" />
      </Col>
      <Col md={7}>
        <Card.Body>
          <Card.Title>{property.name}</Card.Title>
          <Card.Text>
            <p><strong>Location:</strong> {property.location}</p>
            <p><strong>Plot Area:</strong> {property.plotArea}</p>
            <p><strong>Dimensions:</strong> {property.dimensions}</p>
            <p><strong>Ownership:</strong> {property.ownership}</p>
            <p className="price"><strong>Price:</strong> {property.price}</p>
          </Card.Text>
        </Card.Body>  
      </Col>
    </Row>
  </Card>
  );
};

export default PropertyCard;
