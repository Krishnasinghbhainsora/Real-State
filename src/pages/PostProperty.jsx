import React, { useState, useContext } from "react";
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
import axios from "axios";
import { AccountContext } from "../Contexts/UserContext";
import { ToastContainer, toast } from 'react-toastify';

const PostProperty = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [userType, setUserType] = useState("owner");
  const [activeTab, setActiveTab] = useState("exteriorView");
  const [propertyType, setPropertyType] = useState("");
  const [photos, setPhotos] = useState([])
  const [urls, setUrls] = useState([]);
  const [imageuploadbutton, setimagebutton] = useState(false)
  const { user } = useContext(AccountContext)

  const handleSelect = (key) => {
    setActiveTab(key);
  };



  const handleShow = (category) => {
    setCurrentCategory(category);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleFileChange = (e) => {
    setPhotos(Array.from(e.target.files));
    handleClose();
    setimagebutton(true)
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < photos.length; i++) {
      formData.append('photos[]', photos[i]);
    }

    try {
      const res = await axios.post('http://localhost:8000/property/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setUrls(res.data);
      setFormData((prevData) => ({ ...prevData, URL: res.data }));
      // alert("success")
      console.log(res);
      toast.success('Image uploaded successfully!', { duration: 3000 });
    } catch (err) {
      console.error('Error:', err);
      // alert("error")
      toast.error('Error uploading image!');
    }
  };

  const handleDeleteImage = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, index) => index !== index));
  };
  // Handle property type selection
  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
    const { value } = event.target;
    setFormData({ ...formData, propertyType: value });
  };
  // Hook to programmatically navigate



  const badrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"]
  const balconies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"];
  const furnished = ["Furnished", "unfurnished", "Semi-Furnished"]
  const bathrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"];
  const floors = ["Lower Basement", "Upper Basement", "Ground", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"];
  const totalFloors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"];

  // const Name = user?.user?.name
  // const E_mail = user?.user?.email
  // const Phone =  user?.user?.mobileNumber
  // const Type =  user?.user?.userType
  // const ownerid = user?.user?._id
  const [formData, setFormData] = useState({
    Name: user?.user?.name,
    E_mail:user?.user?.email,
    Phone: user?.user?.mobileNumber,
    Type:user?.user?.userType,
    ownerid: user?.user?.id,
    propertyType: "",
    for: "",
    bedrooms: "",
    balconies: "",
    furnished: "",
    bathrooms: "",
    washRoom: '',
    floors: "",
    totalFloors: "",
    cafeTeria: '',
    roadFacing: '',
    roadFacingunits: "",
    constructionDone: '',
    boundaryWallMade: '',
    gatedColony: '',
    cornerShop: '',
    numberofopensides: "",

    city: "",
    locality: "",
    landzone: "",
    coveredArea: "",
    coveredareaUnit: "",
    plotarea: "",
    plotareaunits: "",
    possessionStatus: "",
    availablefromMonth: "",
    availablefromYear: "",
    currentlyLeased: "",
    price: "",
    bookingtoken: "",
    priceNegotiable: false,
    URL: [],
  });


  const handlesubmit = async () => {
    // if (urls.length < 5) {
    //   toast.error('Please upload at least five images!');
    //   return;
    // }
    try {
      
      console.log("checking posting",formData);
      await axios.post('http://localhost:8000/property/create', formData);
      toast.success('Property created successfully!');
    } catch (error) {
      console.log(error);
      toast.error(res.data.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;  // Get 'checked' for checkbox
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };



  // Specific features for different property types
  const propertyTypeFeatures = {
    "Flat/Apartment": (
      <>
        <h6 className="mt-3 fw-bold">Property Features</h6>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          >
            <option>Select Bedrooms</option>
            {badrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balconies">
          <Form.Label className="mt-2">Balconies</Form.Label>
          <Form.Control as="select" name="balconies" onChange={handleChange}>
            <option>Select Balconies</option>
            {balconies.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>

        </Form.Group>
        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floors" >
          <Form.Label className="mt-2" >Floors</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="floors">
            <option>Select Floors</option>
            {floors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
          <Form.Group controlId="totalfloorNo">
            <Form.Label className="mt-2">Total Floor No.</Form.Label>
            <Form.Control as="select" onChange={handleChange} name="totalFloors">
              <option>Select Floor No.</option>
              {totalFloors.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">Bathrooms</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="bathrooms">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
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
          <Form.Control as="select"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          >
            <option>Select Bedrooms</option>
            {badrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balconies">
          <Form.Label className="mt-2">Balconies</Form.Label>
          <Form.Control as="select" name="balconies" onChange={handleChange}>
            <option>Select Balconies</option>
            {balconies.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>

        </Form.Group>

        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="gardenArea">
          <Form.Label className="mt-2">Width of road facing the plot</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder=" Road Width" onChange={handleChange} name="roadFacing" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select" onChange={handleChange} name="roadFacingunits">
                <option >Select</option>
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
        <h6 className="mt-3 fw-bold">Property Features</h6>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          >
            <option>Select Bedrooms</option>
            {badrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balconies">
          <Form.Label className="mt-2">Balconies</Form.Label>
          <Form.Control as="select" name="balconies" onChange={handleChange}>
            <option>Select Balconies</option>
            {balconies.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>

        </Form.Group>

        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="gardenArea">
          <Form.Label className="mt-2">Width of road facing the plot</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder=" Road Width" onChange={handleChange} name="roadFacing" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select" onChange={handleChange} name="roadFacingunits">
                <option >Select</option>
                <option>Square Meters</option>
                <option>Square Feet</option>
                {/* Add other units if needed */}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </>
    ),
    "Builder Floor Apartment": (
      <>
        <h6 className="mt-3 fw-bold">Property Features</h6>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          >
            <option>Select Bedrooms</option>
            {badrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balconies">
          <Form.Label className="mt-2">Balconies</Form.Label>
          <Form.Control as="select" name="balconies" onChange={handleChange}>
            <option>Select Balconies</option>
            {balconies.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>

        </Form.Group>

        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">Bathrooms</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="bathrooms">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>


        <Form.Group controlId="totalfloorNo">
          <Form.Label className="mt-2">Total Floor No.</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="totalFloors">
            <option>Select Floor No.</option>
            {totalFloors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floors">
          <Form.Label className="mt-2">Floors</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="floors">
            <option>Select Floors</option>
            {floors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </>
    ),
    "Residential Land/Plot": (
      <>
        <h6 className="mt-3 fw-bold">Property Features</h6>
        <Form.Group controlId="totalfloorNo">
          <Form.Label className="mt-2">Floor Allowed for construction</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="totalFloors">
            <option>Select Floor No.</option>
            {totalFloors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>

        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">No. of open sides</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="numberofopensides">
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>



          </Form.Control>
        </Form.Group>
        <Form.Group controlId="gardenArea">
          <Form.Label className="mt-2">Width of road facing the plot</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder=" Road Width" onChange={handleChange} name="roadFacing" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select" onChange={handleChange} name="roadFacingunits">
                <option >Select</option>
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

      <>  <h6 className="mt-3 fw-bold">Property Features</h6>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          >
            <option>Select Bedrooms</option>
            {badrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balconies">
          <Form.Label className="mt-2">Balconies</Form.Label>
          <Form.Control as="select" name="balconies" onChange={handleChange}>
            <option>Select Balconies</option>
            {balconies.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>

        </Form.Group>

        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="floors" >
          <Form.Label className="mt-2" >Floors</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="floors">
            <option>Select Floors</option>
            {floors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
          <Form.Group controlId="totalfloorNo">
            <Form.Label className="mt-2">Total Floor No.</Form.Label>
            <Form.Control as="select" onChange={handleChange} name="totalFloors">
              <option>Select Floor No.</option>
              {totalFloors.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Group>
      </>
    ),
    "Studio Apartment": (
      <>
        <h6 className="mt-3 fw-bold">Property Features</h6>
        <Form.Group controlId="bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          >
            <option>Select Bedrooms</option>
            {badrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balconies">
          <Form.Label className="mt-2">Balconies</Form.Label>
          <Form.Control as="select" name="balconies" onChange={handleChange}>
            <option>Select Balconies</option>
            {balconies.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>

        </Form.Group>

        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">Bathrooms</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="bathrooms">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="floors" >
          <Form.Label className="mt-2" >Floors</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="floors">
            <option>Select Floors</option>
            {floors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>

        </Form.Group>

        <Form.Group controlId="totalfloorNo">
          <Form.Label className="mt-2">Total Floor No.</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="totalFloors">
            <option>Select Floor No.</option>
            {totalFloors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

      </>
    ),
    "Commercial Office Space": (
      <>
        <h6 className="mt-3 fw-bold">Property Features</h6>


        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floors" >
          <Form.Label className="mt-2" >Floors</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="floors">
            <option>Select Floors</option>
            {floors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>

        </Form.Group>


        <Form.Group controlId="totalfloorNo">
          <Form.Label className="mt-2">Total Floor No.</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="totalFloors">
            <option>Select Floor No.</option>
            {totalFloors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">Bathrooms</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="bathrooms">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
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
        </div>




      </>
    ),
    "Office in IT Park/SEZ": (
      <>
        <h6 className="mt-3 fw-bold">Property Features</h6>


        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floors" >
          <Form.Label className="mt-2" >Floors</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="floors">
            <option>Select Floors</option>
            {floors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
          <Form.Group controlId="totalfloorNo">
            <Form.Label className="mt-2">Total Floor No.</Form.Label>
            <Form.Control as="select" onChange={handleChange} name="totalFloors">
              <option>Select Floor No.</option>
              {totalFloors.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">Bathrooms</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="bathrooms">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
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
              <span className="tooltip-text" >
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
        </div>

      </>
    ),
    "Commercial Shop": (
      <>
        <h6 className="mt-3 fw-bold">Property Features</h6>


        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floors" >
          <Form.Label className="mt-2" >Floors</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="floors">
            <option>Select Floors</option>
            {floors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
          <Form.Group controlId="totalfloorNo">
            <Form.Label className="mt-2">Total Floor No.</Form.Label>
            <Form.Control as="select" onChange={handleChange} name="totalFloors">
              <option>Select Floor No.</option>
              {totalFloors.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">Bathrooms</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="bathrooms">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
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
    "Commercial Showroom": (
      <>

        <h6 className="mt-3 fw-bold">Property Features</h6>
        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="floors" >
          <Form.Label className="mt-2" >Floors</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="floors">
            <option>Select Floors</option>
            {floors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
          <Form.Group controlId="totalfloorNo">
            <Form.Label className="mt-2">Total Floor No.</Form.Label>
            <Form.Control as="select" onChange={handleChange} name="totalFloors">
              <option>Select Floor No.</option>
              {totalFloors.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">Bathrooms</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="bathrooms">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
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
              <span className="tooltip-text" style={{ fontSize: '15px' }}>
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
    "Commercial Land/Plot": (
      <>
        <h5 className="mt-3">Property Features</h5>

        <Form.Group controlId="totalfloorNo">
          <Form.Label className="mt-2">Floor allowed for construction</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="totalFloors">
            <option>Select Floor No.</option>
            {totalFloors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">No. of open sides</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="numberofopensides">
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>



          </Form.Control>
        </Form.Group>
        <Form.Group controlId="gardenArea">
          <Form.Label className="mt-2">Width of road facing the plot</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder=" Road Width" onChange={handleChange} name="roadFacing" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select" onChange={handleChange} name="roadFacingunits">
                <option >Select</option>
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
    "Industrial Land": (
      <>
        <h5 className="mt-3">Property Features</h5>
        <Form.Group controlId="totalfloorNo">
          <Form.Label>Floor Allowed for construction</Form.Label>
          <Form.Control as="select">
            <option>Total Floor</option>
            {totalFloors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">No. of open sides</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="numberofopensides">
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>



          </Form.Control>
        </Form.Group>
        <Form.Group controlId="gardenArea">
          <Form.Label className="mt-2">Width of road facing the plot</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder=" Road Width" onChange={handleChange} name="roadFacing" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select" onChange={handleChange} name="roadFacingunits">
                <option >Select</option>
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
    "Industrial Building": (
      <>
        <h5 className="mt-3">Property Features</h5>
        <Form.Group controlId="totalfloorNo">
          <Form.Label>Floor Allowed for construction</Form.Label>
          <Form.Control as="select">
            <option>Total Floor</option>
            {totalFloors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </>
    ),
    "Industrial Shed": (
      <>
        <Form.Group controlId="totalfloorNo">
          <Form.Label>Floor Allowed for construction</Form.Label>
          <Form.Control as="select">
            <option>Total Floor</option>
            {totalFloors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="sides">
          <Form.Label className="mt-2">No. of open sides</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="numberofopensides">
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>



          </Form.Control>
        </Form.Group>
        <Form.Group controlId="gardenArea">
          <Form.Label className="mt-2">Width of road facing the plot</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder=" Road Width" onChange={handleChange} name="roadFacing" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select" onChange={handleChange} name="roadFacingunits">
                <option >Select</option>
                <option>Square Meters</option>
                <option>Square Feet</option>
                {/* Add other units if needed */}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </>
    ),
    "Agricultural Land/Plot": (
      <>
        <h5 className="mt-3">Property Features</h5>
        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">Bathrooms</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="bathrooms">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="gardenArea">
          <Form.Label className="mt-2">Width of road facing the plot</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder=" Road Width" onChange={handleChange} name="roadFacing" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select" onChange={handleChange} name="roadFacingunits">
                <option >Select</option>
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
          <Form.Control as="select"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          >
            <option>Select Bedrooms</option>
            {badrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>



        <Form.Group controlId="Furnished Status">
          <Form.Label className="mt-2">Furnished Status</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="furnished">
            <option>Select </option>
            {furnished.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="totalfloorNo">
          <Form.Label>Total floor No.</Form.Label>
          <Form.Control as="select">
            <option>Select Floor No.</option>
            {totalFloors.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>


        <Form.Group controlId="bathrooms">
          <Form.Label className="mt-2">Bathrooms</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="bathrooms">
            <option>Select Bathrooms</option>
            {bathrooms.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="sides">
          <Form.Label className="mt-2">No. of open sides</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="numberofopensides">
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>



          </Form.Control>
        </Form.Group>
        <Form.Group controlId="gardenArea">
          <Form.Label className="mt-2">Width of road facing the plot</Form.Label>
          <Row>
            <Col xs={9}>
              <Form.Control type="text" placeholder=" Road Width" onChange={handleChange} name="roadFacing" />
            </Col>
            <Col xs={3}>
              <Form.Control as="select" onChange={handleChange} name="roadFacingunits">
                <option >Select</option>
                <option>Square Meters</option>
                <option>Square Feet</option>
                {/* Add other units if needed */}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </>
    )
    // Add more property types and their specific features here

  };




  return (
    <div className="container mt-5 ">
      {/* {console.log("....checking user ",user.user)} */}
      <Row>
        {/* Left Side - Form */}
        <Col xs={12} md={8} className="mb-4">
          <h2 >Sell or Rent your Property</h2>
          <p>
            You are posting this property for{" "}
            <span style={{ color: "orange" }}>FREE!</span>
          </p>

          <Form>
            {/* Personal Details */}




            {!user && (
              <>
                {/* <h6 className="fw-bold">Personal Details</h6>
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
                </Form.Group> */}

                {/* 
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
                          <Form.Control type="text" placeholder="IND +91" disabled />
                        </Col>
                        <Col xs={9}>
                          <Form.Control type="text" placeholder="WhatsApp Number" />
                        </Col>
                      </Row>
                    </Form.Group>
                    <Button variant="warning" className="w-100 mt-2" style={{ fontSize: '13px' }}>
                      <i className="bi bi-whatsapp"></i> Enter your WhatsApp No. to get enquiries from Buyer/Tenant
                    </Button>

                    <Form.Group controlId="email">
                      <Form.Label className="mt-2">Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>
                  </>
                  
                )} */
                  <h1>jatin</h1>
                }
              </>

            )}




            {/* Property Details */}
            <h6 className="mt-3 fw-bold">Property Details</h6>
            <Form.Group controlId="for">
              <Form.Label>For</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Sale"
                  name="for"
                  id="sale"
                  value="Sale"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Rent/Lease"
                  name="for"
                  id="rent"
                  value="Rent/Lease"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="PG/Hostel"
                  name="for"
                  id="pg"
                  value="PG/Hostel"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>


            {/* Property Features - Conditionally Rendered */}
            <Form.Group controlId="propertyType">
              <Form.Label className="mt-2">Property Type</Form.Label>

              <Form.Control as="select" onChange={handlePropertyTypeChange} name="propertyType" className="custom-select-dropdown">
                <option >Select Property Type</option>

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



            {/* Property Location */}
            <h6 className="mt-3 fw-bold">Property Location</h6>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City" onChange={handleChange} name="city" />
            </Form.Group>

            <Form.Group controlId="locality">
              <Form.Label className="mt-2">Locality</Form.Label>
              <Form.Control type="text" placeholder="Enter Locality" onChange={handleChange} name="locality" />
            </Form.Group>

            <Form.Group controlId="landZone">
              <Form.Label className="mt-2">Land Zone</Form.Label>
              <span className="tooltip-icon">
                <i className="fas fa-question-circle"></i>
                <span className="tooltip-text " style={{ fontSize: '12.5px', left: '110px' }}>
                  Classification of land on the basis of its use like Residential, Commercial, Industrial, Mixed Use Zone & more. To know your land zone refer the Master Plan/Development Plan of your city.
                </span>
              </span>
              <Form.Control as="select" name="landzone" onChange={handleChange} >
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

            {/* Area */}
            <h6 className="mt-3 fw-bold">Area</h6>
            <Form.Group controlId="superArea">
              <Form.Label>Covered Area</Form.Label>
              <Row>
                <Col xs={9}>
                  <Form.Control
                    type="text"
                    placeholder="Covered Area"
                    name="coveredArea"  // Add name attribute
                    onChange={handleChange}  // Use the existing handleChange function
                  />
                </Col>

                <Col xs={3}>
                  <Form.Control as="select"
                    name="coveredareaUnit"  // Add name attribute for unit selection
                    onChange={handleChange}
                  >
                    <option>select</option>
                    <option>Sq-ft</option>
                    <option>Sq-yard</option>
                    <option>Sq-m</option>
                    <option>Acre</option>
                    <option>Bigha</option>
                    <option>Hectare</option>
                    <option>Marla</option>
                    <option>Kanal</option>
                    <option>Biswa1</option>
                    <option>Biswa2</option>
                    <option>Ground</option>
                    <option>Aankadam</option>
                    <option>Rood</option>
                    <option>Chatak</option>
                    <option>Kottah</option>
                    <option>Marla</option>
                    <option >Cent</option>
                    <option >Perch</option>
                    <option >Guntha</option>
                    <option >Are</option>


                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="superArea " className="mt-2">
              <Form.Label >Plot Area</Form.Label>
              <Row>
                <Col xs={9} >
                  <Form.Control type="text" placeholder="Plot Area"
                    name="plotarea"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs={3}>
                  <Form.Control as="select" name="plotareaunits" onChange={handleChange}>
                    <option >Select</option>
                    <option>Sq-ft</option>
                    <option>Sq-yard</option>
                    <option>Sq-m</option>
                    <option>Acre</option>
                    <option>Bigha</option>
                    <option>Hectare</option>
                    <option>Marla</option>
                    <option>Kanal</option>
                    <option>Biswa1</option>
                    <option>Biswa2</option>
                    <option>Ground</option>
                    <option>Aankadam</option>
                    <option>Rood</option>
                    <option>Chatak</option>
                    <option>Kottah</option>
                    <option>Marla</option>
                    <option >Cent</option>
                    <option >Perch</option>
                    <option >Guntha</option>
                    <option >Are</option>


                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            {/* Transaction Type, Property Availability */}
            <h6 className="mt-3 fw-bold">Transaction Type, Property Availability</h6>
            <Form.Group controlId="possessionStatus">
              <div className="mt-3">
                <Form.Label className="me-3">Possession Status</Form.Label>
                <Form.Check
                  inline
                  type="radio"
                  label="Under Construction"
                  name="possessionStatus"
                  id="underConstruction"
                  value="Under Construction"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Ready to Move"
                  name="possessionStatus"
                  id="readyToMove"
                  value="Ready to Move"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>


            <Form.Group controlId="availability">
              <Form.Label className="mt-2">Available From</Form.Label>
              <Row>
                <Col xs={6}>
                  <Form.Control as="select" name="availablefromMonth" onChange={handleChange}>
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Col>
                <Col xs={6}>
                  <Form.Control as="select" name="availablefromYear" onChange={handleChange}>
                    <option>Year</option>
                    {/* <option>2025</option> */}
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                    <option>2031</option>
                    <option>2032</option>
                    <option>2033</option>
                    <option>2034</option>
                    <option>2035</option>

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
                  value="Yes"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="No"
                  name="currentlyLeased"
                  id="leasedNo"
                  value="No"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>


            {/* Price Details */}
            <h6 className="mt-3 fw-bold">Price Details</h6>
            <Form.Group controlId="totalPrice">
              <Form.Label>Total Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Total Price" onChange={handleChange} name="price" />
            </Form.Group>

            <Form.Group controlId="bookingToken">
              <Form.Label className="mt-2">Booking/Token Amount (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Booking/Token Amount"
                onChange={handleChange}
                name="bookingtoken"
              />
            </Form.Group>

            <Form.Group controlId="priceNegotiable">
              <Form.Check
                className="mt-2"
                type="checkbox"
                label="Price Negotiable"
                name="priceNegotiable"
                onChange={handleCheckboxChange}
              />
            </Form.Group>

            {/* Photos Section */}
            <h6 className="mt-3 fw-bold">Photos</h6>
            <p>Please Upload images before submitting the form</p>
            <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
              {/* <Nav variant="tabs" className="mb-2">
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
              </Nav> */}
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
                    <div className="image-previews mt-3 ">
                      {photos.map((file, index) => (
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
                    {imageuploadbutton && (
                      <button type="button" className="btn px-5 my-3 btn-outline-danger " onClick={handleUpload}>Upload</button>
                    )
                    }
                  </div>
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>
            {/* Modal for Adding Photos */}
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Upload Photos </Modal.Title>
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
              <p>
                Accepted formats are .jpeg, .gif, .bmp, & .png. Maximum size
                allowed is 20 MB. Minimum dimensions allowed 600x400 Pixel.
              </p>


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

            <Button variant="danger" className="w-100" onClick={handlesubmit}>
              Login & Post Property
            </Button>
          </Form>
        </Col>

        {/* Right Side - Advertisement */}
        <Col xs={12} md={4}>
          <div className="p-3 border">
            <h6 className="fw-bold">Advertise</h6>
            <ul>
              <li>Respond to Buyer Enquiries</li>
              <li>Connect with Matching Buyers</li>
              <li>Download the App</li>
            </ul>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default PostProperty;
