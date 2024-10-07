import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Dropdown, Button, Nav, Row, Col, Modal, ListGroup  } from 'react-bootstrap';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'; // Import the check icon
import '../pagesCss/Filters.css';

const Filters = () => {
  const [selectedCities, setSelectedCities] = useState(['New Delhi']);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedBHKs, setSelectedBHKs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [minValue, setMinValue] = useState('');
const [maxValue, setMaxValue] = useState('');

  const cityList = ['New Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Hyderabad'];
  const propertyTypes = [
    { name: 'Flat', icon: '🏢' },
    { name: 'House/Villa', icon: '🏠' },
    { name: 'Plot/Land', icon: '🏞️' },
    { name: 'Commercial', icon: '🏞️' },

    { name: 'Office Space', icon: '🏢' },
    { name: 'Shop/Showroom', icon: '🏬' },
    { name: 'Farmhouse', icon: '🌳' },
    { name: 'Service Apartment', icon: '🏨' },
  ];

  const filteredCities = cityList.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCitySelect = (city) => {
    if (!selectedCities.includes(city)) {
      setSelectedCities([...selectedCities, city]);
    }
    setShowModal(false);
  };

  const handleRemoveCity = (cityToRemove) => {
    setSelectedCities(selectedCities.filter(city => city !== cityToRemove));
  };

  const handleMinPriceSelect = (price) => {
    setMinPrice(price);
    setPriceRange([parseInt(price), priceRange[1]]);
  };

  const handleMaxPriceSelect = (price) => {
    setMaxPrice(price);
    setPriceRange([priceRange[0], parseInt(price)]);
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setPriceRange([parseInt(value), priceRange[1]]);
    setMinPrice(value);
  };

  const handleMaxSliderChange = (e) => {
    const value = e.target.value;
    setPriceRange([priceRange[0], parseInt(value)]);
    setMaxPrice(value);
  };

  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyTypes(prevTypes =>
      prevTypes.includes(type) ? prevTypes.filter(t => t !== type) : [...prevTypes, type]
    );
  };

  const handleBHKSelect = (bhk) => {
    setSelectedBHKs(prevBHKs =>
      prevBHKs.includes(bhk) ? prevBHKs.filter(b => b !== bhk) : [...prevBHKs, bhk]
    );
  };
  const handleMinSelect = (eventKey) => {
    setMinValue(eventKey);
  };
  
  const handleMaxSelect = (eventKey) => {
    setMaxValue(eventKey);
  };

  const activeRoute = location.pathname.split('/')[1];

  return (
    <div className="filter-page">
      {/* Navigation Links (Top Section) */}
      <Nav className="category-nav">
      <Link to="/buy/filters" className={`nav-link ${activeRoute === 'buy' ? 'active' : ''}`}>
          Buy
        </Link>
        <Link to="/rent/filters" className={`nav-link ${activeRoute === 'rent' ? 'active' : ''}`}>
          Rent
        </Link>
        <Link to="/pg/filters" className={`nav-link ${activeRoute === 'pg' ? 'active' : ''}`}>
          New Projects
        </Link>
        <Link to="/plot/filters" className={`nav-link ${activeRoute === 'plot' ? 'active' : ''}`}>
          Plot
        </Link>
        <Link to="/commercial/filters" className={`nav-link ${activeRoute === 'commercial' ? 'active' : ''}`}>
          Commercial
        </Link>
      </Nav>

      {/* City/Locality Selection */}
      <div className="location-selection">
        <h6>Select City/Localities</h6>
        <div className="location-container">
          {selectedCities.map((city, index) => (
            <Button 
              variant="outline-primary" 
              key={index} 
              className="selected-location"
            >
              {city}
              <AiOutlineClose 
                className="remove-city-icon" 
                onClick={() => handleRemoveCity(city)} 
              />
            </Button>
          ))}
          <Button 
            variant="outline-secondary" 
            className="add-more-button" 
            onClick={() => setShowModal(true)}
          >
            + Add More
          </Button>
        </div>
      </div>

      {/* Budget Section */}
      <div className="budget-selection">
        <h6>Budget</h6>
        <div className="budget-inputs">
          <Dropdown onSelect={handleMinPriceSelect}>
            <Dropdown.Toggle variant="light" className="budget-dropdown">
              Min {minPrice && `₹${minPrice} Lacs`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="20">₹20 Lacs</Dropdown.Item>
              <Dropdown.Item eventKey="40">₹40 Lacs</Dropdown.Item>
              <Dropdown.Item eventKey="60">₹60 Lacs</Dropdown.Item>
              {/* Add more options */}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown onSelect={handleMaxPriceSelect}>
            <Dropdown.Toggle variant="light" className="budget-dropdown">
              Max {maxPrice && `₹${maxPrice} Lacs`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="60">₹60 Lacs</Dropdown.Item>
              <Dropdown.Item eventKey="80">₹80 Lacs</Dropdown.Item>
              <Dropdown.Item eventKey="100">₹100 Lacs</Dropdown.Item>
              {/* Add more options */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="budget-slider">
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={priceRange[0]}
            onChange={handleSliderChange}
          />
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={handleMaxSliderChange}
          />
          <div className="price-range-display">
            <span>₹{priceRange[0]} Lacs</span> - <span>₹{priceRange[1]} Lacs</span>
          </div>
        </div>
      </div>

      {/* Property Type Selection */}
      <div className="property-type-selection">
        <h6>Property Type</h6>
        <Row>
          {propertyTypes.map((type, index) => (
            <Col xs={4} className="property-type-card" key={index}>
              <div
                className={`card-content ${selectedPropertyTypes.includes(type.name) ? 'selected' : ''}`}
                onClick={() => handlePropertyTypeSelect(type.name)}
              >
                <span className="property-icon">{type.icon}</span>
                <span className="property-name">{type.name}</span>
                {selectedPropertyTypes.includes(type.name) && (
                  <AiOutlineCheck className="selected-icon" />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Conditional Rendering for BHK and Covered Area */}
      {selectedPropertyTypes.includes('Flat') || selectedPropertyTypes.includes('House/Villa') ? (
        <div className="bhk-selection">
          <h6>BHK</h6>
          <div className="bhk-buttons">
            {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK'].map((bhk, index) => (
              <Button
                key={index}
                variant={selectedBHKs.includes(bhk) ? 'primary' : 'outline-secondary'}
                onClick={() => handleBHKSelect(bhk)}
              >
                {bhk}
              </Button>
            ))}
          </div>
        </div>
      ) : selectedPropertyTypes.includes('Plot/Land') ? (
        <div className="covered-area ">
  <h6 style={{marginBottom:'40px'}}>Covered Area (sqft)</h6>
  <div className="covered-area-inputs d-flex " style={{justifyContent:"space-between"}}>
    <div className="min-input d-flex">
      <Dropdown onSelect={handleMinSelect}>
        <Dropdown.Toggle variant="light" className="budget-dropdown">
          Min {minValue ? `${minValue}` : 'Select'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="100">100</Dropdown.Item>
          <Dropdown.Item eventKey="200">200</Dropdown.Item>
          <Dropdown.Item eventKey="300">300</Dropdown.Item>
          <Dropdown.Item eventKey="500">500</Dropdown.Item>
          <Dropdown.Item eventKey="1000">1,000</Dropdown.Item>
          <Dropdown.Item eventKey="1500">1,500</Dropdown.Item>
          <Dropdown.Item eventKey="2000">2,000</Dropdown.Item>
          <Dropdown.Item eventKey="2500">2,500</Dropdown.Item>
          <Dropdown.Item eventKey="3000">3,000</Dropdown.Item>
          <Dropdown.Item eventKey="4000">4,000</Dropdown.Item>
          <Dropdown.Item eventKey="5000">5,000</Dropdown.Item>
          <Dropdown.Item eventKey="10000">10,000</Dropdown.Item>
          <Dropdown.Item eventKey="25000">25,000</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="max-input">
      <Dropdown onSelect={handleMaxSelect}>
        <Dropdown.Toggle variant="light" className="budget-dropdown ">
          Max {maxValue ? `${maxValue}` : 'Select'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="100">100</Dropdown.Item>
          <Dropdown.Item eventKey="200">200</Dropdown.Item>
          <Dropdown.Item eventKey="300">300</Dropdown.Item>
          <Dropdown.Item eventKey="500">500</Dropdown.Item>
          <Dropdown.Item eventKey="1000">1,000</Dropdown.Item>
          <Dropdown.Item eventKey="1500">1,500</Dropdown.Item>
          <Dropdown.Item eventKey="2000">2,000</Dropdown.Item>
          <Dropdown.Item eventKey="2500">2,500</Dropdown.Item>
          <Dropdown.Item eventKey="3000">3,000</Dropdown.Item>
          <Dropdown.Item eventKey="4000">4,000</Dropdown.Item>
          <Dropdown.Item eventKey="5000">5,000</Dropdown.Item>
          <Dropdown.Item eventKey="10000">10,000</Dropdown.Item>
          <Dropdown.Item eventKey="20000">20,000</Dropdown.Item>
          <Dropdown.Item eventKey="25000">25,000</Dropdown.Item>
          <Dropdown.Item eventKey="30000">30,000</Dropdown.Item>
          <Dropdown.Item eventKey="35000">35,000</Dropdown.Item>
          <Dropdown.Item eventKey="40000">40,000</Dropdown.Item>
          <Dropdown.Item eventKey="45000">45,000</Dropdown.Item>
          <Dropdown.Item eventKey="50000">50,000</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
</div>
      ) : null}

      {/* Add More City/Localities Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select City/Locality</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Search City"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ListGroup variant="flush" className="mt-3">
            {filteredCities.map((city, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => handleCitySelect(city)}
                className="city-item"
              >
                {city}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Filters;
