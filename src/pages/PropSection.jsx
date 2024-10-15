import React from 'react'
import { Link} from "react-router-dom";
import "../pagesCss/HeroSection.css";



const PropSection = () => {
    const residentialProperties = [
        { id: 1, title: "Flat" },
        { id: 2, title: "Villa" },
        { id: 3, title: "Plot" },
        { id: 4, title: "Property4" },
      ];
    
      const commercialProperties = [
        { id: 5, title: "Commercial1" },
        { id: 6, title: "Commercial2" },
        { id: 7, title: "Commercial3" },
        { id: 8, title: "Commercial4" },
      ];
    
      const otherProperties = [
        { id: 9, title: "Other1" },
        { id: 10, title: "Other2" },
        { id: 11, title: "Other3" },
        { id: 12, title: "Other4" },
      ];
    
      const getResidentialHoverText = (title) => {
        switch (title) {
          case "Flat":
            return "View More Flats";
          case "Villa":
            return "View All Villas";
          case "Plot":
            return "View All Plots";
          default:
            return "View More Residential";
        }
      };
      
      // Hover text logic for Commercial Properties
      const getCommercialHoverText = (title) => {
        switch (title) {
          case "Commercial1":
            return "Explore Commercial1";
          case "Commercial2":
            return "Explore Commercial2";
          case "Commercial3":
            return "Explore Commercial3";
          default:
            return "View More Commercial Properties";
        }
      };
      
      // Hover text logic for Other Properties
      const getOtherHoverText = (title) => {
        switch (title) {
          case "Other1":
            return "Explore Other1";
          case "Other2":
            return "Explore Other2";
          case "Other3":
            return "Explore Other3";
          default:
            return "View More Other Properties";
        }
      };
      
    
    
      const demoImageUrl = "https://images.pexels.com/photos/8134849/pexels-photo-8134849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
     <div className="mt-4" style={{ margin: "20px" }}>
  {/* Residential Properties */}
  <div className="residential-section">
    <h3>Residential Property:</h3>
    <div className="property-cards-row">
      {residentialProperties.map((property) => (
        <Link
          to={`/properties/${property.title}`}
          key={property.title}
          className="property-card"
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <div className="image-container">
            <img
              src={demoImageUrl}
              alt={`Residential Property ${property.title}`}
              className="property-image"
            />
            <div className="overlays"></div>
            <div className="hover-text">{getResidentialHoverText(property.title)}</div>
          </div>
          <h6 className="text-center">{property.title}</h6>
        </Link>
      ))}
    </div>
  </div>

  {/* Commercial Properties */}
  <div className="commercial-section mt-5">
    <h3>Commercial Property:</h3>
    <div className="property-cards-row">
      {commercialProperties.map((property) => (
        <Link
          to={`/properties/${property.title}`}
          key={property.title}
          className="property-card"
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <div className="image-container">
            <img
              src={demoImageUrl}
              alt={`Commercial Property ${property.title}`}
              className="property-image"
            />
            <div className="overlays"></div>
            <div className="hover-text">{getCommercialHoverText(property.title)}</div>
          </div>
          <h6 className="text-center">{property.title}</h6>
        </Link>
      ))}
    </div>
  </div>

  {/* Others Properties */}
  <div className="others-section mt-5">
    <h3>Others Property:</h3>
    <div className="property-cards-row">
      {otherProperties.map((property) => (
        <Link
          to={`/properties/${property.title}`}
          key={property.title}
          className="property-card"
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <div className="image-container">
            <img
              src={demoImageUrl}
              alt={`Others Property ${property.title}`}
              className="property-image"
            />
            <div className="overlays"></div>
            <div className="hover-text">{getOtherHoverText(property.title)}</div>
          </div>
          <h6 className="text-center">{property.title}</h6>
        </Link>
      ))}
    </div>
  </div>
</div>
    
    </>
  )
}

export default PropSection