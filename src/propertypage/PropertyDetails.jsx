import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../propertypage/PropertyDetails.css"; // Add your custom CSS for styling

const PropertyDetails = () => {
  // Simulate property data with dummy images
  const propertyData = {
    images: [
      "https://via.placeholder.com/150", // Dummy image 1
      "https://via.placeholder.com/150", // Dummy image 2
      "https://via.placeholder.com/150", // Dummy image 3
      "https://via.placeholder.com/150", // Dummy image 4
      "https://via.placeholder.com/150", // Dummy image 5
      "https://via.placeholder.com/150", // Dummy image 6
      "https://via.placeholder.com/150", // Dummy image 7
      "https://via.placeholder.com/150", // Dummy image 8
      "https://via.placeholder.com/150", // Dummy image 9

      // Add more images if necessary
    ],
    price: "50,00,000",
    bhk: "3 BHK",
    location: "Sector 62, Gurgaon",
    beds: 3,
    baths: 2,
    carpetArea: "1500",
    furnishing: "Semi-furnished",
    floor: "3rd",
    transactionType: "Resale",
    status: "Ready to Move",
    facing: "East",
    lift:1,
    ownerName: "Krishna",
    fullPhoneNumber: "+91-89XXXXXXXX",

    bookingAmount: "5.0 Lac",
    address: "Chittaranjan Park, New Delhi, South, Delhi NCR",
    landmarks: "Greater Kailash Metro",
    flooring: "Vitrified, Ceramic Tiles, Marble",
    loanOffered: "₹128533 EMI",
    typeOfOwnership: "Freehold",
    overlooking: "Garden/Park, Main Road",
    ageOfConstruction: "New Construction",
    additionalRooms: "Puja Room, Study, Servant Room",
    waterAvailability: "24 Hours Available",
    statusOfElectricity: "No/Rare Powercut",
    authorityApproval: "Developer",
    description: "Brand new park facing, builder floor available for sale, with lift and stilt car parking Plz call for site visit.More options also available in different sizes and budget in all over South Delhi area.",
  };

  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false); // State to manage form modal
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);

  const handleShowImages = () => {
    setShowSignupModal(true); // Prompt user to sign up to view full image gallery
  };

  const handleSignup = () => {
    setShowSignupModal(false);
    // After signup logic, allow full image gallery viewing
  };

  const handleContactOwner = () => {
    setShowFormModal(true); // Show form modal when "Contact Owner" is clicked
  };

  const handleShowPhoneNumber = () => {
    if (!phoneNumberVisible) {
      setPhoneNumberVisible(true); // Show full phone number after button click
    } else {
      setShowFormModal(true); // Show form if phone number is already visible
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    const userInfo = {
      name: e.target.formName.value,
      email: e.target.formEmail.value,
      phone: e.target.formWhatsApp.value,
      property: propertyData,  // Pass the property details here
  };
  const existingRequests = JSON.parse(localStorage.getItem('requests')) || [];
    localStorage.setItem('requests', JSON.stringify([...existingRequests, userInfo]));

    setShowFormModal(false); // Close form after submission
  };

  return (
    <div >
        <div className="property-details-container">
      {/* Image Section */}
      <div className="images-section">
        <div className="image-grid">
          {/* Display first 4 images */}
          {propertyData.images.slice(0, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="property-image"
            />
          ))}

          {/* Display "+X Images" if more than 4 images */}
          {propertyData.images.length > 4 && (
            <div className="more-images" onClick={handleShowImages}>
              <span>{`+${propertyData.images.length - 4} Images`}</span>
            </div>
          )}
        </div>
      </div>

      {/* Property Info Section */}
      <div className="property-info ">
        <h4>
          ₹{propertyData.price} | {propertyData.bhk} Builder Floor in{" "}
          {propertyData.location}
        </h4>
        <div className="property-features" style={{ marginTop:'15px', fontSize:'13px', color:'#777'}}>
          <span className="fw-bold">{propertyData.beds} Beds</span>
          <span className="fw-bold">{propertyData.baths} Baths</span>
          <span className="fw-bold">{propertyData.carpetArea} sqft</span>
          <span className="fw-bold">{propertyData.furnishing}</span>
        </div>

        <div className="additional-details pt-3 " >
          <div className="pb-2"><strong>Carpet Area:</strong> {propertyData.carpetArea}</div>
          <div className="pb-2"><strong>Floor:</strong> {propertyData.floor}</div>
          <div className="pb-2"> <strong>Transaction Type:</strong> {propertyData.transactionType}</div>
          <div className="pb-2"><strong>Status:</strong> {propertyData.status}</div>
          <div className="pb-2"><strong>Facing:</strong> {propertyData.facing}</div>
          <div className="pb-2"><strong>Lift:</strong> {propertyData.lift}</div>
          <div><strong>Furnished Status:</strong> {propertyData.furnishing}</div>


        </div>

        {/* Contact Section */}
        <div className="property-contact">
          <Button variant="danger mb-2" onClick={handleContactOwner}>
            Contact Owner
          </Button>
          <Button variant="secondary" onClick={handleShowPhoneNumber}>
            {phoneNumberVisible
              ? `${propertyData.ownerName}: ${propertyData.fullPhoneNumber}`
              : "Get Phone No."}
          </Button>
        </div>
      </div>
      </div>

      {/* Modal for Signup */}
      <Modal show={showSignupModal} onHide={() => setShowSignupModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up to View All Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please sign up to access all images of this property.</p>
          <Button variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Body>
      </Modal>

      {/* Modal for Form */}
      <Modal show={showFormModal} onHide={() => setShowFormModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formWhatsApp">
              <Form.Label>Your WhatsApp Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your WhatsApp number"
                required
              />
            </Form.Group>

            <Form.Group controlId="formTerms">
              <Form.Check
                type="checkbox"
                label="I Agree to Terms of Use"
                required
              />
            </Form.Group>

            <Button variant="danger" type="submit">
              Continue
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

        {/* More Details Section */}
        <div className="more-details">
  <div className="more-details-container">
    <h5 >More Details:</h5>

    <div className="detail-item pt-3">
      <strong>Price Breakup:</strong> ₹{propertyData.price}
    </div>

    <div className="detail-item">
      <strong>Booking Amount:</strong> ₹{propertyData.bookingAmount}
    </div>

    <div className="detail-item">
      <strong>Address:</strong> {propertyData.address}
    </div>

    <div className="detail-item">
      <strong>Landmarks:</strong> {propertyData.landmarks}
    </div>

    <div className="detail-item">
      <strong>Furnishing:</strong> {propertyData.furnishing}
    </div>

    <div className="detail-item mb-1">
      <strong>Flooring:</strong> {propertyData.flooring}
    </div>

    {/* Offer badge */}
    <div className="offer-badge mb-2 w-100 text-center">
      Save up to 40% on your Dream Home Interiors from Top Brands
    </div>
    

    {/* Loan details */}
    <div className="detail-item">
      <strong>Loan Offered:</strong>
      
        {propertyData.loanOffered}
        {/* <div>
        <img src="path/to/bank-icon1.png" alt="Bank 1" />
        <img src="path/to/bank-icon2.png" alt="Bank 2" />
        <img src="path/to/bank-icon2.png" alt="Bank 2" />

        </div> */}
      
    </div>

    <div className="detail-item">
      <strong>Type of Ownership:</strong> {propertyData.typeOfOwnership}
    </div>

    <div className="detail-item">
      <strong>Overlooking:</strong> {propertyData.overlooking}
    </div>

    <div className="detail-item">
      <strong>Age of Construction:</strong> {propertyData.ageOfConstruction}
    </div>

    <div className="detail-item">
      <strong>Additional Rooms:</strong> {propertyData.additionalRooms}
    </div>

    <div className="detail-item">
      <strong>Water Availability:</strong> {propertyData.waterAvailability}
    </div>

    <div className="detail-item">
      <strong>Status of Electricity:</strong> {propertyData.statusOfElectricity}
    </div>

    <div className="detail-item">
      <strong>Lift:</strong> {propertyData.lift}
    </div>

    <div className="detail-item">
      <strong>Authority Approval:</strong> {propertyData.authorityApproval}
    </div>

    <div className="description">
      <strong>Description:</strong> {propertyData.description}
    </div>

    <button className="btn-danger" onClick={handleContactOwner}>
      Contact Agent
    </button>
  </div>

  {/* Modal for Form */}
  <Modal show={showFormModal} onHide={() => setShowFormModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Fill out this one-time form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group controlId="formMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your mobile number" required />
        </Form.Group>

        <Form.Group controlId="formTerms">
          <Form.Check type="checkbox" label="I Agree to Terms of Use" required />
        </Form.Group>

        <button className="btn-danger" type="submit">
          Get Contact Details
        </button>
      </Form>
    </Modal.Body>
  </Modal>
</div>

    </div>

  );
};

export default PropertyDetails;
