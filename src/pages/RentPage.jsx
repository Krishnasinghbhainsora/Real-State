import React, { useState, useEffect, useRef } from 'react';
import { Form, FormControl, Button, Dropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../pagesCss/HeroSection.css';
import { FaAngleDown } from 'react-icons/fa';

const RentPage = () => {
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);

  const propertyDropdownRef = useRef(null);
  const budgetDropdownRef = useRef(null);

  // Toggle property type dropdown
  const togglePropertyDropdown = () => {
    setShowPropertyDropdown(prev => !prev);
    setShowBudgetDropdown(false); // Close the budget dropdown
  };

  // Toggle budget dropdown
  const toggleBudgetDropdown = () => {
    setShowBudgetDropdown(prev => !prev);
    setShowPropertyDropdown(false); // Close the property dropdown
  };

  // Handle property selection
  const handlePropertySelect = (property) => {
    setSelectedPropertyTypes(prev => 
      prev.includes(property)
        ? prev.filter(item => item !== property)
        : [...prev, property]
    );
  };

  // Handle budget selection
  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget);
    setShowBudgetDropdown(false); // Close dropdown after selection
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (propertyDropdownRef.current && !propertyDropdownRef.current.contains(event.target)) {
      setShowPropertyDropdown(false);
    }
    if (budgetDropdownRef.current && !budgetDropdownRef.current.contains(event.target)) {
      setShowBudgetDropdown(false);
    }
  };

  // Add and clean up event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="hero-section" style={{ 
      backgroundImage: "url('/images/p2.jpg')", // Replace with your Just Sold page background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '80vh',
      position: 'relative'
    }}>
      <div className="overlay"></div>
      <div className="content">
        <h1>Find Your Perfect Rental </h1>
        <Nav className="nav-links">
          <Link to="/buy" style={{ color: '#fff', textDecoration: 'none' }}>Buy</Link>
          <Link to="/rent" style={{ color: '#fff', textDecoration: 'none' }}>Rent</Link>
          
          <Link to="/pg" style={{ color: '#fff', textDecoration: 'none' }}>PG</Link>
          <Link to="/plot" style={{ color: '#fff', textDecoration: 'none' }}>Plot</Link>
          <Link to="/commercial" style={{ color: '#fff', textDecoration: 'none' }}>Commercial</Link>
        </Nav>
        <Form className="search-form">
          <FormControl 
            type="text" 
            placeholder="Enter City, Locality, Project" 
            className="search-input" 
          />

          {/* Property Type Dropdown */}
          <Dropdown
            className="custom-dropdown"
            show={showPropertyDropdown}
            ref={propertyDropdownRef}
          >
            <Dropdown.Toggle 
              variant="dark" 
              id="property-type-dropdown" 
              onClick={togglePropertyDropdown}
              className="property-type-dropdown-toggle"
            >
              {selectedPropertyTypes.length > 0 
                ? `${selectedPropertyTypes[0]}${selectedPropertyTypes.length > 1 ? ` +${selectedPropertyTypes.length - 1}` : ''}` 
                : 'Property Type'}
              <FaAngleDown className="dropdown-arrow-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Header>Residential</Dropdown.Header>
              <Dropdown.Item 
                onClick={() => handlePropertySelect('Flat')}
                className={selectedPropertyTypes.includes('Flat') ? 'selected-item' : ''}
              >
                Flat
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handlePropertySelect('House/Villa')}
                className={selectedPropertyTypes.includes('House/Villa') ? 'selected-item' : ''}
              >
                House/Villa
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handlePropertySelect('Plot')}
                className={selectedPropertyTypes.includes('Plot') ? 'selected-item' : ''}
              >
                Plot
              </Dropdown.Item>
              <Dropdown.Header>Commercial</Dropdown.Header>
              <Dropdown.Item 
                onClick={() => handlePropertySelect('Office Space')}
                className={selectedPropertyTypes.includes('Office Space') ? 'selected-item' : ''}
              >
                Office Space
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handlePropertySelect('Shop/Showroom')}
                className={selectedPropertyTypes.includes('Shop/Showroom') ? 'selected-item' : ''}
              >
                Shop/Showroom
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handlePropertySelect('Commercial Land')}
                className={selectedPropertyTypes.includes('Commercial Land') ? 'selected-item' : ''}
              >
                Commercial Land
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handlePropertySelect('Warehouse/Godown')}
                className={selectedPropertyTypes.includes('Warehouse/Godown') ? 'selected-item' : ''}
              >
                Warehouse/Godown
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handlePropertySelect('Industrial Building')}
                className={selectedPropertyTypes.includes('Industrial Building') ? 'selected-item' : ''}
              >
                Industrial Building
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Budget Dropdown */}
          <Dropdown
            className="custom-dropdown"
            show={showBudgetDropdown}
            ref={budgetDropdownRef}
          >
            <Dropdown.Toggle 
              variant="dark" 
              id="budget-dropdown" 
              onClick={toggleBudgetDropdown}
            >
              {selectedBudget ? `${selectedBudget} (Click to Change)` : 'Budget'}
              <FaAngleDown className="dropdown-arrow-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item 
                onClick={() => handleBudgetSelect('₹5 Lac')}
                className={selectedBudget === '₹5 Lac' ? 'selected-item' : ''}
              >
                ₹5 Lac
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handleBudgetSelect('₹10 Lac')}
                className={selectedBudget === '₹10 Lac' ? 'selected-item' : ''}
              >
                ₹10 Lac
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handleBudgetSelect('₹20 Lac')}
                className={selectedBudget === '₹20 Lac' ? 'selected-item' : ''}
              >
                ₹20 Lac
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handleBudgetSelect('₹30 Lac')}
                className={selectedBudget === '₹30 Lac' ? 'selected-item' : ''}
              >
                ₹30 Lac
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handleBudgetSelect('₹40 Lac')}
                className={selectedBudget === '₹40 Lac' ? 'selected-item' : ''}
              >
                ₹40 Lac
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handleBudgetSelect('₹50 Lac')}
                className={selectedBudget === '₹50 Lac' ? 'selected-item' : ''}
              >
                ₹50 Lac
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handleBudgetSelect('₹60 Lac')}
                className={selectedBudget === '₹60 Lac' ? 'selected-item' : ''}
              >
                ₹60 Lac
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="dark">Search</Button>
        </Form>
      </div>
    </div>
  );
};

export default RentPage;
