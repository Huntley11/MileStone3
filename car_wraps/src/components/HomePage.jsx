import React from "react";
import HomePageCards from "./Homepage Cards/HomePageCard";

function HomePage() {
    return (
        <div>
            <div className="body">
                <HomePageCards 
                    title="Car Wraps"
                    image=""
                    paragraph="Our skilled team provides high-quality car wraps that not only protect your car's original paint but also allow you to express your unique style. From stunning designs to sleek finishes, our car wraps offer a dynamic way to make a lasting impression on the road, ensuring your vehicle stands out from the crowd with elegance and distinction. Elevate your driving experience and showcase your individuality with our premium car wrap solutions!"
                />
                <HomePageCards 
                    title="Detailing"
                    image="./Detailing/images/paintCorrectionImage.jpg"
                    paragraph=" Our meticulous team works tirelessly to bring out the true beauty of your vehicle, from thorough interior cleaning and polishing to flawless exterior treatments. Experience the luxury of driving a spotless and gleaming car that radiates elegance and reflects your impeccable taste. Trust in our passion for perfection, and let us make your car shine inside and out with our top-tier car detailing expertise!"
                />
                <HomePageCards 
                    title="Dent Repair"
                    image=""
                    paragraph="With our skilled technicians employing cutting-edge paintless dent repair techniques, we swiftly eliminate dents and dings, restoring your car's pristine appearance and ensuring a hassle-free experience, all while saving you time and money. Drive with confidence and let your car shine like new again with our top-notch dent repair services!"
                />
            </div>
        </div>
            
            
    )
}

export default HomePage