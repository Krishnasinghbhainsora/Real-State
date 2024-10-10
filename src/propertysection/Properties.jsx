import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PropertyCard from '../propertysection/PropertyCard';
import '../propertysection/PropertyCard.css';

const properties = [
    {
        id: 1,
        name: 'Luxury Villa in Mumbai',
        location: 'Mumbai, India',
        plotArea: '500 sq. ft.',
        dimensions: '30x50 ft.',
        ownership: 'Freehold',
        price: '₹10 crore',
        image: 'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Dummy rectangle image
      },
      {
        id: 2,
        name: 'Modern Apartment in Delhi',
        location: 'Delhi, India',
        plotArea: '300 sq. ft.',
        dimensions: '20x40 ft.',
        ownership: 'Leasehold',
        price: '₹8 crore',
        image: 'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Dummy rectangle image
      },
      {
        id: 3,
        name: 'Beach House in Goa',
        location: 'Goa, India',
        plotArea: '1000 sq. ft.',
        dimensions: '50x20 ft.',
        ownership: 'Freehold',
        price: '₹15 crore',
        image: 'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Dummy rectangle image
      },
      {
        id: 4,
        name: 'Penthouse in Bangalore',
        location: 'Bangalore, India',
        plotArea: '800 sq. ft.',
        dimensions: '40x30 ft.',
        ownership: 'Freehold',
        price: '₹12 crore',
        image: 'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Dummy rectangle image
      }
  // Add more property objects as needed
];

const Properties = () => {
  
  return (
    <Container fluid className="property-layout">
    <Row>
      {/* Left Section: Property Cards */}
      <Col lg={8} md={7} xs={12} className="property-cards-section">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </Col>

      {/* Right Section: Advertisement */}
      <Col lg={4} md={5} xs={12} className="advertisement-section">
        <div className="advertisement-box">
          <h3>Advertisement</h3>
          <p>Your ad could be here!</p>
        </div>
      </Col>
    </Row>
  </Container>

  );
};

export default Properties;
