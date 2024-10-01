import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Modal,
  Tab,
  Nav,
} from "react-bootstrap";
import "../pagesCss/PostProperty.css";

const badrooms = [1,2,3,4,5,6,7,8,9,10, ">10"]
const balconies = [0, 1, 2, 3,4,5,6,7,8,9,10,">10"];
const furnished = ["Furnished", "unfurnished", "Semi-Furnished"]
const bathrooms = [1,2,3,4,5,6,7,8,9,10,">10"];
const floors = ["Lower Basement", "Upper Basement", "Ground", 1,2,3,4,5,6,7,8,9,10, ">10" ];
const totalFloors = [1,2,3,4,5,6,7,8,9,10,">10"];



const propertyTypeFeatures = {


  "Flat/Apartment": (
    <>
      <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
         {badrooms?.map((option,index)=>(
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
         {furnished.map((option,index)=>( 
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floors">
        <Form.Label>Floors</Form.Label>
        <Form.Control as="select">
          <option>Select Floors</option>
         {floors.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floor No.</Form.Label>
      <Form.Control as="select">
        <option>Select Floor No.</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
      </Form.Group>
      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
         {bathrooms.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
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
         {badrooms.map((option,index)=>(
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
         {furnished.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="gardenArea">
        <Form.Label>Width of road facing the plot</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control type="text" placeholder=" Road Width" />
          </Col>
          <Col xs={3}>
            <Form.Control as="select">
              <option>Square Meters</option>
              <option>Square Feet</option>
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
         {badrooms.map((option,index)=>(
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
         {furnished.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>
      

      <Form.Group controlId="gardenArea">
        <Form.Label>Width of road facing the plot</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control type="text" placeholder=" Road Width" />
          </Col>
          <Col xs={3}>
            <Form.Control as="select">
              <option>Square Meters</option>
              <option>Square Feet</option>
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
         {badrooms.map((option,index)=>(
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
         {furnished.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>
     
      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
         {bathrooms.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>


      <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floor No.</Form.Label>
      <Form.Control as="select">
        <option>Select Floor No.</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="floors">
        <Form.Label>Floors</Form.Label>
        <Form.Control as="select">
          <option>Select Floors</option>
         {floors.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>
  </>
  ),
  "Residential Land/Plot":(
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="totalfloorNo">
      <Form.Label>Floor Allowed for construction</Form.Label>
      <Form.Control as="select">
        <option>Total Floor</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="bathrooms">
      <Form.Label>No. of open sides</Form.Label>
      <Form.Control as="select">
        <option>Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>


        
      </Form.Control>
    </Form.Group>
     <Form.Group controlId="gardenArea">
        <Form.Label>Width of road facing the plot</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control type="text" placeholder=" Road Width" />
          </Col>
          <Col xs={3}>
            <Form.Control as="select">
              <option>Square Meters</option>
              <option>Square Feet</option>
              {/* Add other units if needed */}
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>

      <div className="mt-3">
      <label className="form-label">Any Construction done</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="constructionDone"
          value="yes"
          checked={formData.constructionDone === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="constructionDone"
          value="no"
          checked={formData.constructionDone === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>

    <div className="mt-3">
      <label className="form-label">Boundary wall made</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="boundaryWallMade"
          value="yes"
          checked={formData.boundaryWallMade === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="boundaryWallMade"
          value="no"
          checked={formData.boundaryWallMade === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>

    <div className="mt-3">
      <label className="form-label">Is in a gated colony</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gatedColony"
          value="yes"
          checked={formData.gatedColony === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gatedColony"
          value="no"
          checked={formData.gatedColony === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>

   
  </>
  ),
  "Penthouse": (
    <>
    <h5 className="mt-3">Property Features</h5>
      <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
         {badrooms.map((option,index)=>(
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
         {furnished.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floors">
        <Form.Label>Floors</Form.Label>
        <Form.Control as="select">
          <option>Select Floors</option>
         {floors.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>  
      
      <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floor No.</Form.Label>
      <Form.Control as="select">
        <option>Select Floor No.</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
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
         {badrooms.map((option,index)=>(
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
         {furnished.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bathrooms">
        <Form.Label>Floors</Form.Label>
        <Form.Control as="select">
          <option>Select Floors</option>
         {floors.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>  
      
      <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floor No.</Form.Label>
      <Form.Control as="select">
        <option>Select Floor No.</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
  </>
  ), 
  "Commercial Office Space" : (
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="Furnished Status">
        <Form.Label>Furnished Status</Form.Label>
        <Form.Control as="select">
          <option>Select </option>
         {furnished.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floors">
        <Form.Label>Floors</Form.Label>
        <Form.Control as="select">
          <option>Select Floors</option>
         {floors.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>  
      
      <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floor No.</Form.Label>
      <Form.Control as="select">
        <option>Select Floor No.</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="bathrooms">
        <Form.Label>Washrooms</Form.Label>
        <Form.Control as="select">
          <option>Select</option>
         {bathrooms.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <div className="mt-3">
      <label className="form-label">Personal Washroom</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="washRoom"
          value="yes"
          checked={formData.washRoom === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="washRoom"
          value="no"
          checked={formData.washRoom === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>
    <div className="mt-3">
      <label className="form-label">Pantry/Cafeteria</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="Dry"
          checked={formData.cafeTeria === 'Dry'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Dry
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="wet"
          checked={formData.cafeTeria === 'wet'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Wet
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="not available"
          checked={formData.cafeTeria === 'not available'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Not Available
        </label>
      </div>
    </div>

      


  </>
  ),
  "Office in IT Park/SEZ":(
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="Furnished Status">
        <Form.Label>Furnished Status</Form.Label>
        <Form.Control as="select">
          <option>Select </option>
         {furnished.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floors">
        <Form.Label>Floors</Form.Label>
        <Form.Control as="select">
          <option>Select Floors</option>
         {floors.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>  
      
      <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floor No.</Form.Label>
      <Form.Control as="select">
        <option>Select Floor No.</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="bathrooms">
        <Form.Label>Washrooms</Form.Label>
        <Form.Control as="select">
          <option>Select</option>
         {bathrooms.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <div className="mt-3">
      <label className="form-label">Personal Washroom</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="washRoom"
          value="yes"
          checked={formData.washRoom === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="washRoom"
          value="no"
          checked={formData.washRoom === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>
    <div className="mt-3">
      <label className="form-label">Pantry/Cafeteria</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="Dry"
          checked={formData.cafeTeria === 'Dry'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Dry
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="wet"
          checked={formData.cafeTeria === 'wet'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Wet
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="not available"
          checked={formData.cafeTeria === 'not available'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Not Available
        </label>
      </div>
    </div>

  </>
  ),
  "Commercial Shop":(
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="Furnished Status">
        <Form.Label>Furnished Status</Form.Label>
        <Form.Control as="select">
          <option>Select </option>
         {furnished.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floors">
        <Form.Label>Floors</Form.Label>
        <Form.Control as="select">
          <option>Select Floors</option>
         {floors.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>  
      
      <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floor No.</Form.Label>
      <Form.Control as="select">
        <option>Select Floor No.</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="bathrooms">
        <Form.Label>Washrooms</Form.Label>
        <Form.Control as="select">
          <option>Select</option>
         {bathrooms.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <div className="mt-3">
      <label className="form-label">Personal Washroom</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="washRoom"
          value="yes"
          checked={formData.washRoom === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="washRoom"
          value="no"
          checked={formData.washRoom === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>
    <div className="mt-3">
    <label className="form-label">Pantry/Cafeteria
  <span className="tooltip-icon"> 
    <i className="fas fa-question-circle"></i>
    <span className="tooltip-text">
      Dry Pantry - Area for light cooking. Eg: Snacks, Tea, Coffee etc. <br />
      Wet Pantry - Area for regular cooking & dishwashing.
    </span>
  </span>
</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="Dry"
          checked={formData.cafeTeria === 'Dry'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Dry
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="wet"
          checked={formData.cafeTeria === 'wet'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Wet
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="not available"
          checked={formData.cafeTeria === 'not available'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Not Available
        </label>
      </div>
      <div className="mt-3">
      <label className="form-label">Corner Shop</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cornerShop"
          value="yes"
          checked={formData.cornerShop === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cornerShop"
          value="no"
          checked={formData.cornerShop === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
      
    </div>
      
    </div>
    <div className="mt-3">
      <label className="form-label">Is Main Road Facing
      </label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="roadFacing"
          value="yes"
          checked={formData.roadFacing === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="roadFacing"
          value="no"
          checked={formData.roadFacing === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
      
    </div>
      
    

  </>
  ),
  "Commercial Showroom":(
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="Furnished Status">
        <Form.Label>Furnished Status</Form.Label>
        <Form.Control as="select">
          <option>Select </option>
         {furnished.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="floors">
        <Form.Label>Floors</Form.Label>
        <Form.Control as="select">
          <option>Select Floors</option>
         {floors.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>  
      
      <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floor No.</Form.Label>
      <Form.Control as="select">
        <option>Select Floor No.</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="bathrooms">
        <Form.Label>Washrooms</Form.Label>
        <Form.Control as="select">
          <option>Select</option>
         {bathrooms.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>

      <div className="mt-3">
      <label className="form-label">Personal Washroom</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="washRoom"
          value="yes"
          checked={formData.washRoom === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="washRoom"
          value="no"
          checked={formData.washRoom === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>
    <div className="mt-3">
<label className="form-label">Pantry/Cafeteria
  <span className="tooltip-icon"> 
    <i className="fas fa-question-circle"></i>
    <span className="tooltip-text" style={{fontSize:'15px'}}>
      Dry Pantry - Area for light cooking. Eg: Snacks, Tea, Coffee etc. <br />
      Wet Pantry - Area for regular cooking & dishwashing.
    </span>
  </span>
</label>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="Dry"
          checked={formData.cafeTeria === 'Dry'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Dry
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="wet"
          checked={formData.cafeTeria === 'wet'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Wet
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cafeTeria"
          value="not available"
          checked={formData.cafeTeria === 'not available'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Not Available
        </label>
      </div>
      
      <div className="mt-3">
      <label className="form-label">Corner Shop</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cornerShop"
          value="yes"
          checked={formData.cornerShop === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cornerShop"
          value="no"
          checked={formData.cornerShop === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
      
    </div>
      
    </div>
    <div className="mt-3">
      <label className="form-label">Is Main Road Facing
      </label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="roadFacing"
          value="yes"
          checked={formData.roadFacing === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="roadFacing"
          value="no"
          checked={formData.roadFacing === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
      
    </div>
      
  </>
  ),
  "Commercial Land/Plot":(
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="totalfloorNo">
      <Form.Label>Floor Allowed for construction</Form.Label>
      <Form.Control as="select">
        <option>Total Floor</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="bathrooms">
      <Form.Label>No. of open sides</Form.Label>
      <Form.Control as="select">
        <option>Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>


        
      </Form.Control>
    </Form.Group>
     <Form.Group controlId="gardenArea">
        <Form.Label>Width of road facing the plot</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control type="text" placeholder=" Road Width" />
          </Col>
          <Col xs={3}>
            <Form.Control as="select">
              <option>Square Meters</option>
              <option>Square Feet</option>
              {/* Add other units if needed */}
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>

   

    <div className="mt-3">
      <label className="form-label">Boundary wall made</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="boundaryWallMade"
          value="yes"
          checked={formData.boundaryWallMade === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="boundaryWallMade"
          value="no"
          checked={formData.boundaryWallMade === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>

    
   
  </>
  ), "Industrial Land" : (
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="totalfloorNo">
      <Form.Label>Floor Allowed for construction</Form.Label>
      <Form.Control as="select">
        <option>Total Floor</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="bathrooms">
      <Form.Label>No. of open sides</Form.Label>
      <Form.Control as="select">
        <option>Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>


        
      </Form.Control>
    </Form.Group>
     <Form.Group controlId="gardenArea">
        <Form.Label>Width of road facing the plot</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control type="text" placeholder=" Road Width" />
          </Col>
          <Col xs={3}>
            <Form.Control as="select">
              <option>Square Meters</option>
              <option>Square Feet</option>
              {/* Add other units if needed */}
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>

      <div className="mt-3">
      <label className="form-label">Any Construction done</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="constructionDone"
          value="yes"
          checked={formData.constructionDone === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="constructionDone"
          value="no"
          checked={formData.constructionDone === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>

    <div className="mt-3">
      <label className="form-label">Boundary wall made</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="boundaryWallMade"
          value="yes"
          checked={formData.boundaryWallMade === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="boundaryWallMade"
          value="no"
          checked={formData.boundaryWallMade === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>

   
  </>
  ),
  "Industrial Building" : (
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floors</Form.Label>
      <Form.Control as="select">
        <option>Select</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
  </>
  ),
  "Industrial Shed":(
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="totalfloorNo">
      <Form.Label>Floor Allowed for construction</Form.Label>
      <Form.Control as="select">
        <option>Total Floor</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="sides">
      <Form.Label>No. of open sides</Form.Label>
      <Form.Control as="select">
        <option>Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>


        
      </Form.Control>
    </Form.Group>
     <Form.Group controlId="gardenArea">
        <Form.Label>Width of road facing the plot</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control type="text" placeholder=" Road Width" />
          </Col>
          <Col xs={3}>
            <Form.Control as="select">
              <option>Square Meters</option>
              <option>Square Feet</option>
              {/* Add other units if needed */}
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>
  </>
  ),
  "Agricultural Land/Plot":(
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
         {bathrooms.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>
     <Form.Group controlId="gardenArea">
        <Form.Label>Width of road facing the plot</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control type="text" placeholder=" Road Width" />
          </Col>
          <Col xs={3}>
            <Form.Control as="select">
              <option>Square Meters</option>
              <option>Square Feet</option>
              {/* Add other units if needed */}
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>
      <div className="mt-3">
      <label className="form-label">Boundary wall made</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="boundaryWallMade"
          value="yes"
          checked={formData.boundaryWallMade === 'yes'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="boundaryWallMade"
          value="no"
          checked={formData.boundaryWallMade === 'no'}
          onChange={handleChange}
        />
        <label className="form-check-label">
          No
        </label>
      </div>
    </div>
      
          </>
  ),
  "Farm House": (
    <>
    <h5 className="mt-3">Property Features</h5>
    <Form.Group controlId="bedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bedrooms</option>
         {badrooms.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>
 
  
  <Form.Group controlId="Furnished Status">
        <Form.Label>Furnished Status</Form.Label>
        <Form.Control as="select">
          <option>Select </option>
         {furnished.map((option,index)=>( 
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>


    <Form.Group controlId="totalfloorNo">
      <Form.Label>Total Floor No.</Form.Label>
      <Form.Control as="select">
        <option>Select Floor No.</option>
        {totalFloors.map((option,index)=>(
          <option key={index}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>



      <Form.Group controlId="bathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control as="select">
          <option>Select Bathrooms</option>
         {bathrooms.map((option,index)=>(
          <option key={index}>{option}</option>
         ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="sides">
      <Form.Label>No. of open sides</Form.Label>
      <Form.Control as="select">
        <option>Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>


        
      </Form.Control>
    </Form.Group>
     <Form.Group controlId="gardenArea">
        <Form.Label>Width of road facing the plot</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control type="text" placeholder=" Road Width" />
          </Col>
          <Col xs={3}>
            <Form.Control as="select">
              <option>Square Meters</option>
              <option>Square Feet</option>
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>
  </>
  )
  // Add more property types and their specific features here

};

export default propertyTypeFeatures