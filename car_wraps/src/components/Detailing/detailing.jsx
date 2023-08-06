import React from "react";
import FreeEstimate from "../FreeEstimate";

function Detailing() {
    return (
        <div>
    
          <section id="home" className="hero">
            <div className="hero-content">
              <h1>Car Detailing Experts</h1>
              <p>Experience the Ultimate Auto Rejuvenation</p>
            </div>
          </section>
    
          <section id="services" className="services">
            <h2>Our Services</h2>
            <FreeEstimate/>
            <div className="service-card">
              <img src="interior-detailing.jpg" alt="Interior Detailing" />
              <h3>Interior Detailing</h3>
              <p>Revitalize your car's interior with our meticulous detailing services, leaving it clean and refreshed.</p>
            </div>
            <div className="service-card">
              <img src="exterior-detailing.jpg" alt="Exterior Detailing" />
              <h3>Exterior Detailing</h3>
              <p>Protect and restore your car's exterior shine with our expert detailing techniques and premium products.</p>
            </div>
            {/* Add more service cards as needed */}
          </section>
    
          <section id="gallery" className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-images">
              <img src="gallery-image1.jpg" alt="Gallery Image 1" />
              <img src="gallery-image2.jpg" alt="Gallery Image 2" />
              <img src="gallery-image3.jpg" alt="Gallery Image 3" />
              {/* Add more gallery images as needed */}
            </div>
          </section>

          <footer>
            <p>&copy; 2023 Car Wraps R Us. All rights reserved.</p>
          </footer>
        </div>
      );
}

export default Detailing