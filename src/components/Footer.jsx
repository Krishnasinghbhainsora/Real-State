import React, { useState } from 'react';
import { BsGooglePlay, BsApple } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // Separate state variables for About and Disclaimer sections
  const [isReadMoreAbout, setIsReadMoreAbout] = useState(false);
  const [isReadMoreDisclaimer, setIsReadMoreDisclaimer] = useState(false);

  const toggleReadMoreAbout = () => {
    setIsReadMoreAbout(!isReadMoreAbout);
  };

  const toggleReadMoreDisclaimer = () => {
    setIsReadMoreDisclaimer(!isReadMoreDisclaimer);
  };

  return (
    <footer className="footer mt-5 py-5 bg-light ">
      <div className="container">
        <div className="row">
          {/* Column 1: About Magicbricks + More from Our Network */}
          <div className="col-md-6">
            <h6 className='fw-bold' style={{fontSize:'14px'}}>About Zwolf Realty</h6>
            <p style={{fontSize:'13px'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi placeat modi veritatis reprehenderit totam doloribus fuga explicabo doloremque zwolf by&nbsp;
              {isReadMoreAbout ? (
                <>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veniam eius animi nobis. Nostrum, aliquam? Autem natus quasi, dicta, adipisci minus ut quisquam expedita perspiciatis ratione corrupti earum beatae fugiat officia, ea ipsum incidunt facilis quia minima. Blanditiis assumenda, quisquam ex eveniet natus dignissimos dolores voluptatem quasi ut aliquam quos.
                  <span className="read-less" onClick={toggleReadMoreAbout}> Read less</span>
                </>
              ) : (
                <span className="read-more" onClick={toggleReadMoreAbout}> Read more</span>
              )}
            </p>

            <h6 className='fw-bold' style={{fontSize:'14px'}}>More from our Network</h6>
            <ul className="network-list" style={{fontSize:'13px', gap:'0'}}>
              <li>Times of India</li>
              <li>Economic Times</li>
              <li>MensXp</li>
              <li>Filmfare</li>
              <li>iDiva</li>
              <li>TimesJobs</li>
              <li>India Times</li>
              <li>Gadgets Now</li>
            </ul>

            {/* Social Media Icons */}
            <div className="social-icons mb-3  ">
              <a href="#" className="ms-2"><FaFacebookF size={20} /></a>
              <a href="#" className="ms-2"><FaTwitter size={20} /></a>
              <a href="#" className="ms-2"><FaLinkedinIn size={20} /></a>
              <a href="#"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Properties in India + New Projects in India */}
          <div className="col-md-6">
            <h6 className='fw-bold' style={{fontSize:'14px'}}>Properties in India</h6>
            <p style={{fontSize:'13px'}}>
              Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune | Property in Bangalore | Property in Noida | Property in Gurgaon | Property in Ahmedabad
            </p>

            <h6 className=" fw-bold " style={{fontSize:'14px'}}>New Projects in India</h6>
            <p style={{fontSize:'13px'}}>
              New Projects in New Delhi | New Projects in Mumbai | New Projects in Chennai | New Projects in Pune | New Projects in Noida | New Projects in Gurgaon | New Projects in Bangalore | New Projects in Ahmedabad
            </p>
          </div>

          <hr/>
          <div>
            <p style={{fontSize:'12px', color:'grey'}}>
              Disclaimer: Zwolf Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by&nbsp;     
              {isReadMoreDisclaimer ? (
                <>
                   various Builder(s)/Developer(s) who have advertised their products. Zwolf is only communicating the offers and not selling or rendering any of those products or services. It neither warrants nor is it making any representations with respect to offer(s) made on the site. Zwolf Realty Services Limited shall neither be responsible nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller and both Seller and Customer/Buyer/User shall settle all such disputes without involving Zwolf Realty Services Limited in any manner.
                  <span className="read-less" onClick={toggleReadMoreDisclaimer}> Read less</span>
                </>
              ) : (
                <span className="read-more" onClick={toggleReadMoreDisclaimer}> Read more</span>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black py-0">
        <p className="text-center text-white " >
          &copy; 2024 Zwolf Realty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
