import React, { useState, useEffect, useRef } from 'react';
import { Form, FormControl, Button, Dropdown, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../pagesCss/HeroSection.css';
import { FaAngleDown } from 'react-icons/fa';

const HeroSection = () => {
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState({});
  const [selectedBudget, setSelectedBudget] = useState('');
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [submenuHeight, setSubmenuHeight] = useState(0);
  const [residentialProperties, setResidentialProperties] = useState([
    { title: 'Property 1' },
    { title: 'Property 2' },
    { title: 'Property 3' },
    { title: 'Property 4' }
    
  ]);

  const [commercialProperties, setCommercialProperties] = useState([
    { title: 'Commercial 1' },
    { title: 'Commercial 2' },
    { title: 'Commercial 3' },
    { title: 'Commercial 4' }
    
  ]);
  const [otherProperties, setOtherProperties] = useState([
    { title: 'Other 1' },
    { title: 'Other 2' },
    { title: 'Other 3' },
    { title: 'Other 4' }
    
  ]);

  const demoImageUrl = 'https://via.placeholder.com/150x250';


  


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

  return (
    <section>
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="content">
        <h1>The #1 site real estate professionals trust</h1>
        <Nav className="nav-links">
          <Link to="/buy" className={location.pathname === '/buy' ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>
            Buy
          </Link>
          <Link to="/rent" className={location.pathname === '/rent' ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>
            Rent
          </Link>
          <Link to="/pg" className={location.pathname === '/pg' ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>
            PG
          </Link>
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
                    Residential <FaAngleDown />
                  </Dropdown.Header>
                  {expandedCategory === 'Residential' && (
                    <div className="horizontal-menu" style={{fontSize:'15px'}} ref={submenuRef}>
                      <Dropdown.Item onClick={() => handlePropertySelect('Flat')} className={selectedPropertyTypes.includes('Flat') ? 'selected-item' : ''}>
                        Flat  
                      </Dropdown.Item>
                      {selectedPropertyTypes.includes('Flat') && (
                        <div className="horizontal-submenu" style={{fontSize:'12px'}} >
                          <Dropdown.Item onClick={() => handleSubcategorySelect('Flat', '1 BHK')} className={selectedSubcategory.Flat === '1 BHK' ? 'selected-item' : ''}>
                            1 BHK
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleSubcategorySelect('Flat', '2 BHK')} className={selectedSubcategory.Flat === '2 BHK' ? 'selected-item' : ''}>
                            2 BHK
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleSubcategorySelect('Flat', '3 BHK')} className={selectedSubcategory.Flat === '3 BHK' ? 'selected-item' : ''}>
                            3 BHK
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleSubcategorySelect('Flat', '4 BHK')} className={selectedSubcategory.Flat === '4 BHK' ? 'selected-item' : ''}>
                            4 BHK
                          </Dropdown.Item>
                          
                        </div>
                      )}
                      <Dropdown.Item onClick={() => handlePropertySelect('House/Villa')} className={selectedPropertyTypes.includes('House/Villa') ? 'selected-item' : ''}>
                        House/Villa
                      </Dropdown.Item>
                      {selectedPropertyTypes.includes('House/Villa') && (
                        <div className="horizontal-submenu" style={{fontSize:'12px'}} >
                          <Dropdown.Item onClick={() => handleSubcategorySelect('House/Villa', '1 BHK')} className={selectedSubcategory['House/Villa'] === '1 BHK' ? 'selected-item' : ''}>
                            1 BHK
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleSubcategorySelect('House/Villa', '2 BHK')} className={selectedSubcategory['House/Villa'] === '2 BHK' ? 'selected-item' : ''}>
                            2 BHK
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleSubcategorySelect('House/Villa', '3 BHK')} className={selectedSubcategory['House/Villa'] === '3 BHK' ? 'selected-item' : ''}>
                            3 BHK
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleSubcategorySelect('House/Villa', '4 BHK')} className={selectedSubcategory['House/Villa'] === '4 BHK' ? 'selected-item' : ''}>
                            4 BHK
                          </Dropdown.Item>
                          
                        </div>
                      )}
                      <Dropdown.Item onClick={() => handlePropertySelect('Plot')} className={selectedPropertyTypes.includes('Plot') ? 'selected-item' : ''}>
                        Plot
                      </Dropdown.Item>
                      {selectedPropertyTypes.includes('Plot') && (
                        <div className="horizontal-submenu" style={{fontSize:'12px'}} >
                          <Dropdown.Item onClick={() => handleSubcategorySelect('Plot', '500 sqft')} className={selectedSubcategory.Plot === '500 sqft' ? 'selected-item' : ''}>
                            500 sqft
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleSubcategorySelect('Plot', '1000 sqft')} className={selectedSubcategory.Plot === '1000 sqft' ? 'selected-item' : ''}>
                            1000 sqft
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleSubcategorySelect('Plot', '2000 sqft')} className={selectedSubcategory.Plot === '2000 sqft' ? 'selected-item' : ''}>
                            2000 sqft
                          </Dropdown.Item>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="property-item " style={{fontSize:'15px'}} >
                  <Dropdown.Header onClick={() => handleCategoryClick('Commercial')}>
                    Commercial <FaAngleDown />
                  </Dropdown.Header>
                  {expandedCategory === 'Commercial' && (
                    <div className="horizontal-submenu" style={{fontSize:'12px'}} >
                      <Dropdown.Item onClick={() => handlePropertySelect('Office Space')} className={selectedPropertyTypes.includes('Office Space') ? 'selected-item' : ''}>
                        Office Space
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePropertySelect('Shop/Showroom')} className={selectedPropertyTypes.includes('Shop/Showroom') ? 'selected-item' : ''}>
                        Shop/Showroom
                      </Dropdown.Item>
                    </div>
                  )}
                </div>
                <div className="property-item" style={{fontSize:'15px'}} >
                  <Dropdown.Header onClick={() => handleCategoryClick('Others')}>
                    Others <FaAngleDown />
                  </Dropdown.Header>
                  {expandedCategory === 'Others' && (
                    <div className="horizontal-submenu" style={{fontSize:'12px'}} >
                      <Dropdown.Item onClick={() => handlePropertySelect('Farmhouse')} className={selectedPropertyTypes.includes('Farmhouse') ? 'selected-item' : ''}>
                        Farmhouse
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePropertySelect('Service Apartment')} className={selectedPropertyTypes.includes('Service Apartment') ? 'selected-item' : ''}>
                        Service Apartment
                      </Dropdown.Item>
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

          <Button variant="primary" type="submit" className="search-button">
            Search
          </Button>
        </Form>
        
      </div>
      
    </div>
     <div className='mt-4' style={{margin:'20px'}}>
      {/* Residential Properties */}
      <div className="residential-section" >
        <h2>Residential Property:</h2>
        <div className="property-cards-row">
          {residentialProperties.map((property, index) => (
            <div className="property-card" key={index}>
              <img src={demoImageUrl} alt={`Residential Property ${index + 1}`} />
              <h3>{property.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Commercial Properties */}
      <div className="commercial-section mt-5">
        <h2>Commercial Property:</h2>
        <div className="property-cards-row">
          {commercialProperties.map((property, index) => (
            <div className="property-card" key={index}>
              <img src={demoImageUrl} alt={`Commercial Property ${index + 1}`} />
              <h3>{property.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="others-section mt-5">
        <h2>Others Property:</h2>
        <div className="property-cards-row">
          {otherProperties.map((property, index) => (
            <div className="property-card" key={index}>
              <img src={demoImageUrl} alt={`Others Property ${index + 1}`} />
              <h3>{property.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>       
    </section>


  );
};
      

export default HeroSection;
