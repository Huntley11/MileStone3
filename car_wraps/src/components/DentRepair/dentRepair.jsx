import React from "react";
import FreeEstimate from "../FreeEstimate";

function DentRepair() {
    return (
        <div>
    
          <section id="home" className="hero">
            <div className="hero-content">
              <h1>Expert Dent Repair</h1>
              <p>Restore Your Vehicle to its Pristine State</p>
            </div>
          </section>
    
          <section id="services" className="services">
            <h2>Our Services</h2>
            <FreeEstimate/>
            <div className="service-card">
              <img src="paintless-dent-repair.jpg" alt="Paintless Dent Repair" />
              <h3>Paintless Dent Repair</h3>
              <p>Efficiently remove dents without damaging the original paint, saving you time and money.</p>
            </div>
            <div className="service-card">
              <img src="dent-removal.jpg" alt="Dent Removal" />
              <h3>Dent Removal</h3>
              <p>Our skilled technicians fix minor dents and dings, restoring your car's smooth appearance.</p>
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

export default DentRepair