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


const PostProperty = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [userType, setUserType] = useState("owner");
  const [activeTab, setActiveTab] = useState("exteriorView");
  const [propertyType, setPropertyType] = useState("");


  const handleSelect = (key) => {
    setActiveTab(key);
  };

  const [photos, setPhotos] = useState({
    "Exterior View": [],
    "Master Plan": [],
    "Location Map": [],
    Others: [],
  });

  const handleShow = (category) => {
    setCurrentCategory(category);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos((prevPhotos) => ({
      ...prevPhotos,
      [currentCategory]: [...prevPhotos[currentCategory], ...files],
    }));
    handleClose();
  };
  const handleDeleteImage = (category, index) => {
    setPhotos((prevPhotos) => ({
      ...prevPhotos,
      [category]: prevPhotos[category].filter((_, i) => i !== index),
    }));
  };
  // Handle property type selection
 const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const badrooms = [1,2,3,4,5,6,7,8,9,10, ">10"]
  const balconies = [0, 1, 2, 3,4,5,6,7,8,9,10,">10"];
  const furnished = ["Furnished", "unfurnished", "Semi-Furnished"]
  const bathrooms = [1,2,3,4,5,6,7,8,9,10,">10"];
  const floors = ["Lower Basement", "Upper Basement", "Ground", 1,2,3,4,5,6,7,8,9,10, ">10" ];
  const totalFloors = [1,2,3,4,5,6,7,8,9,10,">10"];

  // Specific features for different property types
  const propertyTypeFeatures = {
    "Flat/Apartment": (
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

      <Form.Group controlId="bathrooms">
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


 
  
  return (
    <div className="container mt-5 ">
      <Row>
        {/* Left Side - Form */}
        <Col xs={12} md={8} className="mb-4">
          <h2>Sell or Rent your Property</h2>
          <p>
            You are posting this property for{" "}
            <span style={{ color: "orange" }}>FREE!</span>
          </p>

          <Form>
            {/* Personal Details */}

            <h5>Personal Details</h5>
            <Form.Group controlId="userType">
              <Form.Label>I am</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Owner"
                  name="userType"
                  id="owner"
                  checked={userType === "owner"}
                  onChange={() => setUserType("owner")}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Agent"
                  name="userType"
                  id="agent"
                  checked={userType === "agent"}
                  onChange={() => setUserType("agent")}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Builder"
                  name="userType"
                  id="builder"
                  checked={userType === "builder"}
                  onChange={() => setUserType("builder")}
                />
              </div>
            </Form.Group>

            {/* Conditionally render Name, Mobile, and Email fields for "Owner" */}
            {userType === "owner" && (
              <>
                <Form.Group controlId="name">
                  <Form.Label className="mt-2">Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group controlId="mobile">
                  <Form.Label className="mt-2">Mobile</Form.Label>
                  <Row>
                    <Col xs={3}>
                      <Form.Control
                        type="text"
                        placeholder="IND +91"
                        disabled
                      />
                    </Col>
                    <Col xs={9}>
                      <Form.Control type="text" placeholder="WhatsApp Number" />
                    </Col>
                  </Row>
                </Form.Group>
                <Button variant="warning" className="mb-3 w-100 mt-2">
                  <i className="bi bi-whatsapp"></i> Enter your WhatsApp No. to
                  get enquiries from Buyer/Tenant
                </Button>

                <Form.Group controlId="email">
                  <Form.Label className="mt-2">Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
              </>
            )}
            {/* Property Details */}
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


          
            
            {/* Property Location */}
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
              <Form.Control as="select">
                <option>Select Land Zone</option>
                {/* Add land zone options here */}
              </Form.Control>
            </Form.Group>

             {/* Conditionally render additional features based on selected property type */}
           {propertyType && propertyTypeFeatures[propertyType]}

            {/* Area */}
            <h5 className="mt-3">Area</h5>
            <Form.Group controlId="superArea">
              <Form.Label>Super Area</Form.Label>
              <Row>
                <Col xs={9}>
                  <Form.Control type="text" placeholder="Super Area" />
                </Col>
                <Col xs={3}>
                  <Form.Control as="select">
                    <option>Sq.ft</option>
                    {/* Add other units if needed */}
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="plotArea">
              <Form.Check className="mt-1" type="checkbox" label="Plot Area" />
            </Form.Group>

            {/* Transaction Type, Property Availability */}
            <h5 className="mt-3">Transaction Type, Property Availability</h5>
            <Form.Group controlId="possessionStatus">
              <Form.Label>Possession Status</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Under Construction"
                  name="possessionStatus"
                  id="underConstruction"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Ready to Move"
                  name="possessionStatus"
                  id="readyToMove"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="availability">
              <Form.Label className="mt-2">Available From</Form.Label>
              <Row>
                <Col xs={6}>
                  <Form.Control as="select">
                    <option>Month</option>
                    {/* Add month options */}
                  </Form.Control>
                </Col>
                <Col xs={6}>
                  <Form.Control as="select">
                    <option>Year</option>
                    {/* Add year options */}
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="currentlyLeased">
              <Form.Label className="mt-2">Currently Leased Out</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Yes"
                  name="currentlyLeased"
                  id="leasedYes"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="No"
                  name="currentlyLeased"
                  id="leasedNo"
                />
              </div>
            </Form.Group>

            {/* Price Details */}
            <h5 className="mt-3">Price Details</h5>
            <Form.Group controlId="totalPrice">
              <Form.Label>Total Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Total Price" />
            </Form.Group>

            <Form.Group controlId="bookingToken">
              <Form.Label className="mt-2">Booking/Token Amount (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Booking/Token Amount"
              />
            </Form.Group>

            <Form.Group controlId="priceNegotiable">
              <Form.Check className="mt-2" type="checkbox" label="Price Negotiable" />
            </Form.Group>

            {/* Photos Section */}
            <h5 className="mt-3">Photos</h5>
            <p>It's Optional! But, don't forget to upload them later.</p>
            <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
              <Nav variant="tabs" className="mb-2">
                <Nav.Item>
                  <Nav.Link eventKey="exteriorView">Exterior View</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="masterPlan">Master Plan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="locationMap">Location Map</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="others">Others</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="exteriorView">
                  <div className="photo-upload-box">
                    <p className="pt-2">
                      85% of Buyers enquire on Properties with Photos. Upload
                      Photos & Get up to 10x more Enquiries
                    </p>
                    <Button
                      variant="outline-danger"
                      className="mt-3"
                      onClick={() => handleShow("Exterior View")}
                    >
                      Add Photos Now
                    </Button>
                    {/* Preview images for "Exterior View" */}
                    <div className="image-previews mt-3">
                      {photos["Exterior View"].map((file, index) => (
                        <div key={index} className="image-container">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview-${index}`}
                            className="uploaded-image-preview"
                          />
                          <button
                            className="delete-image-button"
                            onClick={() =>
                              handleDeleteImage("Exterior View", index)
                            }
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="masterPlan">
                  <div className="photo-upload-box">
                    <p className="pt-2">
                      85% of Buyers enquire on Properties with Photos. Upload
                      Photos & Get up to 10x more Enquiries
                    </p>
                    <Button
                      variant="outline-danger"
                      className="mt-3"
                      onClick={() => handleShow("Master Plan")}
                    >
                      Add Photos Now
                    </Button>
                    {/* Preview images for "Master Plan" */}
                    <div className="image-previews mt-3">
                      {photos["Master Plan"].map((file, index) => (
                        <div key={index} className="image-container">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview-${index}`}
                            className="uploaded-image-preview"
                          />
                          <button
                            className="delete-image-button"
                            onClick={() =>
                              handleDeleteImage("Master Plan", index)
                            }
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="locationMap">
                  <div className="photo-upload-box">
                    <p className="pt-2">
                      85% of Buyers enquire on Properties with Photos. Upload
                      Photos & Get up to 10x more Enquiries
                    </p>
                    <Button
                      variant="outline-danger"
                      className="mt-3"
                      onClick={() => handleShow("Location Map")}
                    >
                      Add Photos Now
                    </Button>
                    {/* Preview images for "Location Map" */}
                    <div className="image-previews mt-3">
                      {photos["Location Map"].map((file, index) => (
                        <div key={index} className="image-container">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview-${index}`}
                            className="uploaded-image-preview"
                          />
                          <button
                            className="delete-image-button"
                            onClick={() =>
                              handleDeleteImage("Location Map", index)
                            }
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="others">
                  <div className="photo-upload-box">
                    <p className="pt-2">
                      85% of Buyers enquire on Properties with Photos. Upload
                      Photos & Get up to 10x more Enquiries
                    </p>
                    <Button
                      variant="outline-danger"
                      className="mt-3"
                      onClick={() => handleShow("Others")}
                    >
                      Add Photos Now
                    </Button>
                    {/* Preview images for "Others" */}
                    <div className="image-previews mt-3">
                      {photos["Others"].map((file, index) => (
                        <div key={index} className="image-container">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview-${index}`}
                            className="uploaded-image-preview"
                          />
                          <button
                            className="delete-image-button"
                            onClick={() => handleDeleteImage("Others", index)}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* Modal for Adding Photos */}
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Upload Photos - {currentCategory}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Select Images</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <div className="photo-guidelines mt-4">
              <p >
                Accepted formats are .jpeg, .gif, .bmp, & .png. Maximum size
                allowed is 20 MB. Minimum dimensions allowed 600x400 Pixel.
              </p>
              <p>
                You can also email them to us for uploading at photos@zwolf.com
              </p>
              <div className="image-guidelines d-flex justify-content-between">
                <img
                  src="valid.jpg"
                  alt="Valid example"
                  className="guideline-img"
                />
                <img
                  src="invalid1.jpg"
                  alt="Invalid example 1"
                  className="guideline-img"
                />
                <img
                  src="invalid2.jpg"
                  alt="Invalid example 2"
                  className="guideline-img"
                />
              </div>
            </div>

            <Form.Group className="mt-4 mb-3">
              <Form.Check
                type="checkbox"
                label="I am posting this property exclusively on Zwolf"
              />
              <Form.Check
                type="checkbox"
                label="I agree to Zwolf T&C, Privacy Policy, & Cookie Policy"
              />
              <Form.Check
                type="checkbox"
                label="I want to receive responses on Whatsapp"
              />
            </Form.Group>

            <Button variant="danger" className="w-100">
              Login & Post Property
            </Button>
          </Form>
        </Col>

        {/* Right Side - Advertisement */}
        <Col xs={12} md={4}>
          <div className="p-3 border">
            <h5>Advertise</h5>
            <ul>
              <li>Respond to Buyer Enquiries</li>
              <li>Connect with Matching Buyers</li>
              <li>Download the App</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostProperty;
