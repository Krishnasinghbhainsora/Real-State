import React from 'react'

const propertyTypeFeatures = { 
    
    "Flat/Apartment": (
      <>
        <h5 className="mt-3">Property Features</h5>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bedrooms</option>
            {/* Add bedroom options here */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bathrooms</option>
            {/* Add bathroom options here */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balconies">
          <Form.Label>Balconies</Form.Label>
          <Form.Control as="select">
            <option>Select Balconies</option>
            {/* Add balconies options here */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floorNo">
          <Form.Label>Floor No.</Form.Label>
          <Form.Control as="select">
            <option>Select Floor No.</option>
            {/* Add floor options here */}
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
            {/* Add bedroom options here */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bathrooms</option>
            {/* Add bathroom options here */}
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
                {/* Add other units if needed */}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </>
    ),
    "Villa": (
      <>
        <h5 className="mt-3">Property Features</h5>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bedrooms</option>
            {/* Add bedroom options here */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Control as="select">
            <option>Select Bathrooms</option>
            {/* Add bathroom options here */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="gardenArea">
          <Form.Label>Garden Area</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder="Garden Area" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select">
                <option>Square Feet</option>
                <option>Square Meters</option>
                {/* Add other units if needed */}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </>
    ),
    "Builder Floor Apartment":(
    <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Residential Land/Plot":(
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Penthouse": (
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Studio Apartment":(
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ), 
    "Commercial Office Space" : (
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Office in IT Park/SEZ":(
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Commercial Shop":(
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Commercial Showroom":(
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Commercial Land/Plot":(
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Industrial Building" : (
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Industrial Shed":(
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Agricultural Land/Plot":(
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    ),
    "Farm House": (
      <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
          {/* Add bedroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
          {/* Add bathroom options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="balconies">
        <Form.Label>Balconies</Form.Label>
        <Form.Control as="select">
          <option>Select Balconies</option>
          {/* Add balconies options here */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floorNo">
        <Form.Label>Floor No.</Form.Label>
        <Form.Control as="select">
          <option>Select Floor No.</option>
          {/* Add floor options here */}
        </Form.Control>
      </Form.Group>
    </>
    )
    // Add more property types and their specific features here
  };

export default PropertyFeatures