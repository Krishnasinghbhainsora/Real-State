import React, { useState, useEffect, useRef } from 'react';
import { Form, FormControl, Button, Dropdown, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../pagesCss/HeroSection.css';
import { FaAngleDown } from 'react-icons/fa';

const Plot = () => {
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState({});
  const [selectedBudget, setSelectedBudget] = useState('');
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [submenuHeight, setSubmenuHeight] = useState(0);
  const [enterName, setEnterName] = useState('');
const [enterArea, setEnterArea] = useState('');
  const [residentialProperties, setResidentialProperties] = useState([
    { title: 'Property1' },
    { title: 'Property2' },
    { title: 'Property3' },
    { title: 'Property4' }
    
  ]);

  const [commercialProperties, setCommercialProperties] = useState([
    { title: 'Plot1' },
    { title: 'Plot2' },
    { title: 'Plot3' },
    { title: 'Plot4' }
    
  ]);
  const [otherProperties, setOtherProperties] = useState([
    { title: 'Other1' },
    { title: 'Other2' },
    { title: 'Other3' },
    { title: 'Other4' }
    
  ]);

  const demoImageUrl = 'https://via.placeholder.com/150x250';

  // Arrays for enterName and enterArea values
const nameArray = ['sqft', 'sqyrd', 'sqm']; // Enter name options
const areaArray = ['100','200','300','400','500','1000','1500','2000','3000','4000','5000','10000','25000','50000'];

  


  const propertyDropdownRef = useRef(null);
  const budgetDropdownRef = useRef(null);
  const submenuRef = useRef(null); // Ref to the submenu
  const navigate = useNavigate();

  const handlePropertySelect = (property) => {
    setSelectedPropertyTypes((prev) =>
      prev.includes(property)
        ? prev.filter((item) => item !== property)
        : [...prev, property]
    );
  };

  const handleSubcategorySelect = (property, subcategory) => {
    setSelectedSubcategory((prev) => ({
      ...prev,
      [property]: subcategory,
    }));
  };

  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget);
    setShowBudgetDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (
      propertyDropdownRef.current &&
      !propertyDropdownRef.current.contains(event.target)
    ) {
      setShowPropertyDropdown(false);
    }
    if (
      budgetDropdownRef.current &&
      !budgetDropdownRef.current.contains(event.target)
    ) {
      setShowBudgetDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const location = useLocation();

  const handleCategoryClick = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
      setSubmenuHeight(0);
    } else {
      setExpandedCategory(category);
      if (submenuRef.current) {
        setSubmenuHeight(submenuRef.current.scrollHeight);
      }
    }
  };

   // Function to handle form submission
   const handleSearchClick = () => {
    // Check if the screen width is mobile size
    if (window.innerWidth <= 768) {
      navigate('/filters'); // Redirect to the filter page
    }
  };

const handleEnterNameSelect = (eventKey) => {
  setEnterName(eventKey);
};

const handleEnterAreaSelect = (eventKey) => {
  setEnterArea(eventKey);
};

  return (
    <section>
    <div className="hero-section" style={{ 
      backgroundImage: "url('/images/p5.jpg')", // Replace with your Just Sold page background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center 45%',
      height: '78vh',
      position: 'relative'
    }}>
      <div className="overlay"></div>
      <div className="content">
        <h1>Just Sold Your Property</h1>
        <Nav className="nav-links">
          <Link to="/buy" className={location.pathname === '/buy' ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>
            Buy
          </Link>
          <Link to="/rent" className={location.pathname === '/rent' ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>
            Rent
          </Link>
          {/* <Link to="/pg" className={location.pathname === '/pg' ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>
            PG
          </Link> */}
          <Link to="/plot" className={location.pathname === '/plot' ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>
            Plot
          </Link>
          <Link to="/commercial" className={location.pathname === '/commercial' ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>
            Commercial
          </Link>
        </Nav>
        <Form className="search-form " >
          <FormControl type="text" placeholder="Enter City, Locality, Project" className="search-input" onClick={handleSearchClick}/>

          <Dropdown className="custom-dropdown " show={showPropertyDropdown} ref={propertyDropdownRef}>
            <Dropdown.Toggle variant="dark" id="property-type-dropdown " onClick={() => setShowPropertyDropdown((prev) => !prev)} aria-expanded={showPropertyDropdown} aria-controls="property-type-dropdown-menu" className="property-type-dropdown-toggle">
              {selectedPropertyTypes.length > 0
                ? `${selectedPropertyTypes[0]}${selectedPropertyTypes.length > 1 ? ` +${selectedPropertyTypes.length - 1}` : ''}`
                : 'Property Type'}
              {/* <FaAngleDown className="dropdown-arrow-icon" /> */}
            </Dropdown.Toggle>
            <Dropdown.Menu id="property-type-dropdown-menu" className="dropdown-menu-custom">
              <div className="category-menu">
                <div className="property-item" style={{ marginBottom: expandedCategory === 'Residential' ? submenuHeight : 0 }}>
                  <Dropdown.Header onClick={() => handleCategoryClick('Residential')}>
                  {expandedCategory !== 'Residential' && enterName && enterArea
          ? `Residential (${enterName}, ${enterArea})`  // Show selected unit and area
          : 'Residential'} {/* Default label */}
           <FaAngleDown />
                  </Dropdown.Header>
                  {expandedCategory === 'Residential' && (
        <div className="covered-area">
          <div className="covered-area-inputs">
            
            {/* Name Dropdown */}
            <div className="name-input">
              <Dropdown onSelect={handleEnterNameSelect}>
                <Dropdown.Toggle variant="light" className="budget-dropdown">
                  {enterName ? enterName : 'Select Unit'} {/* Show selected unit or placeholder */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Map through nameArray */}
                  {nameArray.map((name) => (
                    <Dropdown.Item
                      key={name}
                      eventKey={name}
                      onClick={()=> handlePropertySelect('Residential')}
                      className={enterName === name ? 'selected-item' : ''} style={{fontSize:'13px'}}
                    >
                      {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Area Dropdown */}
            <div className="area-input">
              <Dropdown onSelect={handleEnterAreaSelect}>
                <Dropdown.Toggle variant="light" className="budget-dropdown">
                  {enterArea ? enterArea : 'Select Area'} {/* Show selected area or placeholder */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Map through areaArray from 100 to 50,000 */}
                  {areaArray.map((area) => (
                    <Dropdown.Item
                      key={area}
                      eventKey={area}
                      onClick={()=> handlePropertySelect('Residential')}
                      className={enterArea === area ? 'selected-item' : ''} style={{fontSize:'13px'}}
                    >
                      {area}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      )}
                </div>
                <div className="property-item " style={{fontSize:'15px'}} >
                  <Dropdown.Header onClick={() => handleCategoryClick('Commercial')}>
                  {expandedCategory !== 'Commercial' && enterName && enterArea
          ? `Commercial (${enterName}, ${enterArea})`  // Show selected unit and area
          : 'Commercial'}  <FaAngleDown />
                  </Dropdown.Header>
                  {expandedCategory === 'Commercial' && (
        <div className="covered-area">
          <div className="covered-area-inputs">
            
            {/* Name Dropdown */}
            <div className="name-input">
              <Dropdown onSelect={handleEnterNameSelect}>
                <Dropdown.Toggle variant="light" className="budget-dropdown">
                  {enterName ? enterName : 'Select Unit'} {/* Show selected unit or placeholder */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Map through nameArray */}
                  {nameArray.map((name) => (
                    <Dropdown.Item
                      key={name}
                      eventKey={name}
                      onClick={() =>
                        handlePropertySelect('Commercial')}
                      className={enterName === name ? 'selected-item' : ''} style={{fontSize:'13px'}}
                    >
                      {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Area Dropdown */}
            <div className="area-input">
              <Dropdown onSelect={handleEnterAreaSelect}>
                <Dropdown.Toggle variant="light" className="budget-dropdown">
                  {enterArea ? enterArea : 'Select Area'} {/* Show selected area or placeholder */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Map through areaArray from 100 to 50,000 */}
                  {areaArray.map((area) => (
                    <Dropdown.Item
                      key={area}
                      eventKey={area}
                      onClick={() =>
                        handlePropertySelect('Commercial')}
                      className={enterArea === area ? 'selected-item' : ''}
                      style={{fontSize:'13px'}}
                    >
                      {area}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      )}
                </div>
                <div className="property-item" style={{fontSize:'15px'}} >
                  <Dropdown.Header onClick={() => handleCategoryClick('Others')}>
                  {expandedCategory !== 'Others' && enterName && enterArea
          ? `Others (${enterName}, ${enterArea})`  // Show selected unit and area
          : 'Others'} <FaAngleDown />
                  </Dropdown.Header>
                  {expandedCategory === 'Others' && (
        <div className="covered-area">
          <div className="covered-area-inputs">
            
            {/* Name Dropdown */}
            <div className="name-input">
              <Dropdown onSelect={handleEnterNameSelect}>
                <Dropdown.Toggle variant="light" className="budget-dropdown">
                  {enterName ? enterName : 'Select Unit'} {/* Show selected unit or placeholder */}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  {/* Map through nameArray */}
                  {nameArray.map((name) => (
                    <Dropdown.Item
                      key={name}
                      eventKey={name}
                      onClick={() =>
                        handlePropertySelect('Others')}
                      className={enterName === name ? 'selected-item' : ''}
                      style={{fontSize:'13px'}}
                    >
                      {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Area Dropdown */}
            <div className="area-input">
              <Dropdown onSelect={handleEnterAreaSelect}>
                <Dropdown.Toggle variant="light" className="budget-dropdown">
                  {enterArea ? enterArea : 'Select Area'} {/* Show selected area or placeholder */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Map through areaArray from 100 to 50,000 */}
                  {areaArray.map((area) => (
                    <Dropdown.Item
                      key={area}
                      eventKey={area}
                      onClick={() =>
                        handlePropertySelect('Others')}
                      className={enterArea === area ? 'selected-item' : ''}
                      style={{fontSize:'13px'}}
                    >
                      {area}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      )}
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          {/* Budget Dropdown */}
          <Dropdown className="custom-dropdown" show={showBudgetDropdown} ref={budgetDropdownRef}>
            <Dropdown.Toggle variant="dark" id="budget-dropdown" onClick={() => setShowBudgetDropdown((prev) => !prev)} aria-expanded={showBudgetDropdown} aria-controls="budget-dropdown-menu" className="budget-dropdown-toggle">
              {selectedBudget || 'Budget'}
              {/* <FaAngleDown className="dropdown-arrow-icon" /> */}
            </Dropdown.Toggle>
            <Dropdown.Menu id="budget-dropdown-menu" className="dropdown-menu-custom">
              <Dropdown.Item onClick={() => handleBudgetSelect('Below ₹20 Lacs')}>Below ₹20 Lacs</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBudgetSelect('₹20 Lacs to ₹40 Lacs')}>₹20 Lacs to ₹40 Lacs</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBudgetSelect('₹40 Lacs to ₹60 Lacs')}>₹40 Lacs to ₹60 Lacs</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBudgetSelect('₹60 Lacs to ₹80 Lacs')}>₹60 Lacs to ₹80 Lacs</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBudgetSelect('₹80 Lacs to ₹1 Crore')}>₹80 Lacs to ₹1 Crore</Dropdown.Item>
              <Dropdown.Item onClick={() => handleBudgetSelect('Above ₹1 Crore')}>Above ₹1 Crore</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="primary" type="submit" className="search-button" style={{padding: "7px 20px"}}>
            Search
          </Button>
        </Form>
      </div>
      
    </div>
    <div className='mt-4' style={{margin:'20px'}}>
      {/* Residential Properties */}
      <div className="residential-section">
        <h3>Newest property:</h3>
        <div className="property-cards-row">
          {residentialProperties.map((property)=> (
              <Link to={`/properties/${property.title}`} key={property.title} className="property-card " style={{textDecoration:'none', color:'#000'}}>
                <img src={demoImageUrl} alt={`Residential Property ${property.title}`} />
                <h6 className="text-center">{property.title}</h6>
              </Link>
          ))}
        </div>
      </div>

      {/* Commercial Properties */}
      <div className="commercial-section mt-5">
        <h3>Plot Properties:</h3>
        <div className="property-cards-row">
          {commercialProperties.map((property)=> (
              <Link to={`/properties/${property.title}`} key={property.title} className="property-card " style={{textDecoration:'none', color:'#000'}}>
                <img src={demoImageUrl} alt={`Residential Property ${property.title}`} />
                <h6 className="text-center">{property.title}</h6>
              </Link>
          ))}
        </div>
      </div>
      <div className="others-section mt-5">
        <h3>Single family home Property:</h3>
        <div className="property-cards-row">
          {otherProperties.map((property)=> (
              <Link to={`/properties/${property.title}`} key={property.title} className="property-card " style={{textDecoration:'none', color:'#000'}}>
                <img src={demoImageUrl} alt={`Residential Property ${property.title}`} />
                <h6 className="text-center">{property.title}</h6>
              </Link>
          ))}
        </div>
      </div>
    </div> 
    </section>
    
  );
};

export default Plot;
