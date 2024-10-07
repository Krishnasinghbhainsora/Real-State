import React, { useEffect, useState } from 'react';

const RequestProperty = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch requests from localStorage
    const storedRequests = JSON.parse(localStorage.getItem('requests')) || [];
    setRequests(storedRequests);
  }, []);

  return (
    <section className='m-4'>
    <div className="request-property-container">
      <h2>Your Property Requests</h2>
      {requests.length > 0 ? (
        requests.map((request, index) => (
          <div key={index} className="property-request-card">
            <h4>Property: {request.property.bhk} at {request.property.location}</h4>
            <p>Price: {request.property.price}</p>
            <p>Requested by: {request.name}</p>
            <p>Email: {request.email}</p>
            <p>Phone: {request.phone}</p>
          </div>
        ))
      ) : (
        <p>No requests found. Start contacting property owners!</p>
      )}
    </div>
    </section>
  );
};

export default RequestProperty;
