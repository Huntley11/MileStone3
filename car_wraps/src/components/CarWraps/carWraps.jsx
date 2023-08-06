import React from "react";
import FreeEstimate from "../FreeEstimate";
import "./pages.css"

function CarWraps() {
    return (
      <div>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Car Wraps R Us</h1>
            <p>Your One-Stop Shop for Premium Car Wraps</p>
          </div>
        </section>

        <section id="services" className="services">
          <h2>Our Services</h2>
          <FreeEstimate/>
          <div className="service-card">
            <img src="car-wrap-image1.jpg" alt="Car Wrap 1" />
            <h3>Full Vehicle Wraps</h3>
            <p>Transform your vehicle with a full car wrap. Choose from a wide range of designs and materials.</p>
          </div>
          <div className="service-card">
            <img src="car-wrap-image2.jpg" alt="Car Wrap 2" />
            <h3>Partial Wraps</h3>
            <p>Enhance your car's appearance with our premium partial wraps, tailor-made to suit your style.</p>
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
  };
  
export default CarWraps