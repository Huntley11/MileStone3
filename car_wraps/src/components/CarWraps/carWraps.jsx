import React, { useState, useEffect } from "react";
import FreeEstimate from "../FreeEstimate";
import "./pages.css";

const CarWraps = () => {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow images
  const galleryImages = [
    "https://teckwrap.com/cdn/shop/products/teckwrap-satin-matte-purple-blue-ck892-vinyl-wrap-vinyl-wrap-craft-film-car-wraps-31726506770543_1024x.jpg?v=1669061472",
    "https://teckwrap.com/cdn/shop/products/teckwrap-gloss-metallic-supreme-red-gal26-hd-vinyl-wrap-vinyl-wrap-craft-film-car-wraps-31705220579439_1024x.jpg?v=1668368650",
    "https://teckwrap.com/cdn/shop/products/teckwrap-chrome-yellow-gold-chrome-chm02-hd-vinyl-wrap-vinyl-wrap-craft-film-car-wraps-31704980422767_1024x.jpg?v=1668365769",
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
        <h1>Our Services</h1>
        <p>Express yourself through your car fully</p>
        <FreeEstimate />
        <div className="service-card">
          <h3>Full Vehicle Wraps</h3>
          <p>
            Transform your vehicle with a full car wrap. Choose from a wide range
            of designs and materials.
          </p>
          <img
            src="https://www.wrapteck.com/cdn/shop/products/SuperGlossyMetallicGrapePurple3009_15.jpg?v=1650003585&width=1445"
            alt="Car Wrap 1"
            width="60%"
          />
        </div>
        <div className="service-card">
          <h3>Partial Wraps</h3>
          <p>
            Enhance your car's appearance with our premium partial wraps,
            tailor-made to suit your style.
          </p>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c55d51465019fdb54f95277/1549857694139-ZTB7M25G2QW1VJEOI0P5/DSC_3864.JPG"
            alt="Car Wrap 2"
            width="60%"
          />
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
};

export default CarWraps;