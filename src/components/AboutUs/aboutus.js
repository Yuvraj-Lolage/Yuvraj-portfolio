import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../AboutUs/aboutus.css";

const AboutUs = () => {
    return (
        <>
            <section className="about-section">
                <span id="sub-title-text">Who am I</span>
                <h1 id="title-text">ABOUT ME</h1>

                <section id="aboutus-desc">
                    <p className="text-justify">Hello! I'm Yuvraj, a designer with a passion for bringing creative visions to life. With over 1 years of experience in the design field, I have developed a keen eye for detail and a dedication to innovation.</p>
                    <p className="text-justify">I am also a full-stack developer, allowing me to create end-to-end solutions with a blend of creativity and technical expertise.</p>
                    <p className="text-justify">My journey has been fueled by a relentless pursuit of excellence, leading me to work on diverse projects where I've honed my skills in conceptualization, design execution, and client collaboration.</p>
                    <p className="text-justify">This portfolio is a showcase of my journey and the milestones I've achieved along the way, reflecting my commitment to creating impactful and meaningful designs.</p>
                </section>
            </section>
        </>
    )
}

export default AboutUs;