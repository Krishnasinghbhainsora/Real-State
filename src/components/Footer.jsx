import React, { useState } from 'react';
import { BsGooglePlay, BsApple } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <footer className="footer mt-5 py-5 bg-light ">
      <div className="container">
        <div className="row">
          {/* Column 1: About Magicbricks + More from Our Network */}
          <div className="col-md-6">
            <h6 className='fw-bold'>About Zwolf Realty</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi placeat modi veritatis reprehenderit totam doloribus fuga explicabo doloremque voluptates!
              {isReadMore ? (
                <>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veniam eius animi nobis. Nostrum, aliquam? Autem natus quasi, dicta, adipisci minus ut quisquam expedita perspiciatis ratione corrupti earum beatae fugiat officia, ea ipsum incidunt facilis quia minima. Blanditiis assumenda, quisquam ex eveniet natus dignissimos dolores voluptatem quasi ut aliquam quos.
                  <span className="read-less" onClick={toggleReadMore}> Read less</span>
                </>
              ) : (
                <span className="read-more" onClick={toggleReadMore}> Read more</span>
              )}
            </p>

            <h6 className='fw-bold'>More from our Network</h6>
            <ul className="network-list">
              <li>Times of India</li>
              <li>Economic Times</li>
              <li>MensXp</li>
              <li>Filmfare</li>
              <li>iDiva</li>
              <li>TimesJobs</li>
              <li>India Times</li>
              <li>Gadgets Now</li>
            </ul>

            {/* App Store Icons */}
            {/* <div className="mt-3">
              <a href="#"><BsGooglePlay size={30} /></a>
              <a href="#" className="ml-2"><BsApple size={30} /></a>
            </div> */}

            {/* Social Media Icons */}
            <div className="social-icons mb-3  ">
              <a href="#" className="ms-2"><FaFacebookF size={24} /></a>
              <a href="#" className="ms-2"><FaTwitter size={24} /></a>
              <a href="#" className="ms-2"><FaLinkedinIn size={24} /></a>
              <a href="#"><FaInstagram size={24} /></a>
            </div>
          </div>

          {/* Column 2: Properties in India + New Projects in India */}
          <div className="col-md-6">
            <h6 className='fw-bold'>Properties in India</h6>
            <p>
              Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune | Property in Bangalore | Property in Noida | Property in Gurgaon | Property in Ahmedabad
            </p>

            <h6 className=" fw-bold">New Projects in India</h6>
            <p>
              New Projects in New Delhi | New Projects in Mumbai | New Projects in Chennai | New Projects in Pune | New Projects in Noida | New Projects in Gurgaon | New Projects in Bangalore | New Projects in Ahmedabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
