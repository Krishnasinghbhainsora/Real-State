

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

// Initial dummy property data (will be replaced by backend data later)
const initialProperties = [
  {
    id: '1',
    name: 'New Location Delhi Road, New Delhi',
    postedBy: 'Owner',
    for: 'Male',
    description: 'This is a property located in a prime area. Perfect for male tenants.',
    status: 'Active',
    approved: false // Pending admin approval
  },
  {
    id: '2',
    name: 'Laxmi Nagar, New Delhi',
    postedBy: 'Owner',
    for: 'Female, Students',
    description: 'A great property for female students in a secure neighborhood.',
    status: 'Active',
    approved: true // Approved by admin
  },
  {
    id: '3',
    name: 'Dwarka, New Delhi',
    postedBy: 'Owner',
    for: 'Family',
    description: 'Spacious property ideal for families looking for a peaceful environment.',
    status: 'Posting Incomplete',
    approved: false // Pending approval and incomplete
  }
];

function ManageProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // axios.get('/api/properties').then(response => setProperties(response.data))
    setProperties(initialProperties);
  }, []);

  const handleResponses = (propertyId) => {
    alert(`Viewing responses for property ID: ${propertyId}`);
    // Replace the alert with logic to fetch/display the responses for the property
  };

  const handleDelete = (propertyId) => {
    setProperties(properties.filter(property => property.id !== propertyId));
  };

  return (
    <section className='manage' >
    <Container fluid className="mt-4 ">
      <Row>
        {/* First Column: Properties List */}
        <Col md={8}>
          {/* Top Bar for Filters and Download */}
          <Row className="align-items-center mb-4">
            <Col md={8}>
              <Button variant="primary" className="mr-2">Properties</Button>
              <Button variant="outline-primary" className="mr-2">Responses</Button>
              <Button variant="outline-primary" className="mr-2">Requests</Button>
              <Form.Control as="select" className="d-inline-block w-auto mt-2">
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </Form.Control>
              <Form.Control type="text" placeholder="Search Properties" className="d-inline-block w-auto mt-2"/>
            </Col>
          </Row>

          {/* Properties List */}
          <Row>
            {properties.map(property => (
              <Col md={12} key={property.id} className="mb-4">
                <Card>
                  <Card.Body>
                    <Row>
                      <Col>
                        <h5>{property.name}</h5>
                        <p>ID: {property.id}</p>
                        <p>For: {property.for}</p>
                        <p>Posted as: {property.postedBy}</p>
                        <p className="text-muted">{property.description}</p>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        {/* Buttons disabled based on approval status */}
                        <Button
                          variant="success"
                          className="mr-2"
                          disabled={!property.approved} // Disable if not approved
                          onClick={() => handleResponses(property.id)} // Handle responses
                        >
                          Responses
                        </Button>
                        <Button
                          variant="secondary"
                          className="mr-2"
                          disabled={!property.approved} // Disable if not approved
                        >
                          Upgrade
                        </Button>
                        <Button
                          variant="warning"
                          onClick={() => handleDelete(property.id)}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                  {property.status === 'Posting Incomplete' && (
                    <Card.Footer className="bg-warning">
                      <small className="text-white">Posting Incomplete</small>
                    </Card.Footer>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Second Column: Advertisement Section */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Advertisement</h4>
              <p>Your ad could be here! Place your advertisements to reach more customers.</p>
              <img src="https://via.placeholder.com/400x300" alt="Ad Placeholder" className="img-fluid" />
              {/* Replace with actual ad content or ad service */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default ManageProperties;
