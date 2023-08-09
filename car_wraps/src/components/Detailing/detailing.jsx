import React, { useState, useEffect } from "react";
import FreeEstimate from "../FreeEstimate";

function Detailing() {
    // Slideshow state
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slideshow images
    const galleryImages = [
        "https://m.media-amazon.com/images/I/61WTgqAh3zL._AC_UF1000,1000_QL80_.jpg",
        "https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyd2FzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "https://images.squarespace-cdn.com/content/v1/5511d8d4e4b04b58e54a9de7/1633275486615-OFR9FFSDE6V5YHK439VP/B2C20CDB-C0E1-4D1A-BD98-5D650AF654E5.JPG?format=1000w",
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
                    <p>Experience the Ultimate Auto Rejuvenation</p>
                    <FreeEstimate />
                <div className="service-card">
                    <h3>Interior Detailing</h3>
                    <p>Revitalize your car's interior with our meticulous detailing services, leaving it clean and refreshed.</p>
                    <img src="https://cleanriteautodetailingrkfd.com/wp-content/uploads/2018/05/AdobeStock_85893844-min.jpeg" alt="Interior Detailing" width="60%" />
                </div>
                <div className="service-card">
                    <h3>Exterior Detailing</h3>
                    <p>Protect and restore your car's exterior shine with our expert detailing techniques and premium products.</p>
                    <img src="https://www.ziebart.com/images/default-source/service-gallery-2019/exterior-detailing/ext_detailing_hand_wash_bottom.jpg?Status=Master&sfvrsn=515dcf6e_6" alt="Exterior Detailing" width="60%" />
                </div>
            </section>

            <section id="gallery" className="gallery">
                <h2>Gallery</h2>
                <div className="slideshow-container">
                    {galleryImages.map((image, index) => (
                        <div
                            className={`gallery-slide ${index === currentSlide ? "active" : ""
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

export default Detailing