import React, { useState, useEffect } from "react";
import FreeEstimate from "../FreeEstimate";

function DentRepair() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow images
  const galleryImages = [
    "https://i.ytimg.com/vi/Ib2eqhDnuBY/maxresdefault.jpg",
    "https://img.wonderhowto.com/img/90/02/63572490952568/0/fix-car-dents-8-easy-ways-remove-dents-yourself-without-ruining-paint.1280x600.jpg",
    "https://s3-media0.fl.yelpcdn.com/bphoto/KoyGTyDtYPvLh1O8ALLrbg/1000s.jpg",
    // Add more slideshow images as needed
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % galleryImages.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? galleryImages.length - 1 : prevSlide - 1
    );
  };

  // Auto-advance the slideshow every 3 seconds
  useEffect(() => {
    const slideshowTimer = setInterval(nextSlide, 3000);
    return () => clearInterval(slideshowTimer);
  }, []);

    return (
        <div>
    
          <section id="home" className="hero">
            <div className="hero-content">
            </div>
          </section>
    
          <section id="services" className="services">
            <h2>Our Services</h2>
            <p>Restore Your Vehicle to its Pristine State</p>
            <FreeEstimate/>
            <div className="service-card">
              <h3>Paintless Dent Repair</h3>
              <p>Efficiently remove dents without damaging the original paint, saving you time and money.</p>
              <img src="https://www.pchdentrepair.com/wp-content/uploads/2022/04/paintless-dent-repair-san-diego-before-and-after-2-1024x1024.jpg" alt="Paintless Dent Repair" width="60%"/>
            </div>
            <div className="service-card">
              <h3>Dent Removal</h3>
              <p>Our skilled technicians fix minor dents and dings, restoring your car's smooth appearance.</p>
              <img src="https://images.squarespace-cdn.com/content/v1/5dd75d2aaeb965723970ea23/1576097911056-MYV1NXOL3X5NZVLCO0S4/before-and-after-large-dent.jpg?format=2500w" alt="Dent Removal" width="60%"/>
            </div>
          </section>
    
          <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="slideshow-container">
          {galleryImages.map((image, index) => (
            <div
              className={`gallery-slide ${
                index === currentSlide ? "active" : ""
              }`}
              key={index}
            >
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}

          {/* Next and previous buttons */}
          <a className="prev" onClick={prevSlide}>
            &#10094;
          </a>
          <a className="next" onClick={nextSlide}>
            &#10095;
          </a>
        </div>
      </section>
    
          <footer>
            <p>&copy; 2023 Car Wraps R Us. All rights reserved.</p>
          </footer>
        </div>
      );
}

export default DentRepair