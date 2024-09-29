import React from 'react';
import '../Homepage/portfolio_page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TextAnimation from '../../components/TextAnimation/textAnimation';
import AboutUs from '../../components/AboutUs/aboutus';
import Services from '../../components/ProfessionalServices/services';
import { Projects } from '../../components/WorkShowcase/projects';
import { Contact } from '../../components/Contact/contact';
import { motion, useScroll } from 'framer-motion';
import Navbar from '../Navbar/navbar';

const Homepage = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            {/* Scroll progress bar */}
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
                />
                <Navbar/>
            <section className='h-auto'>
            <section id="home">
                <h1 className='mt-5 name-text'>Hi, I am Yuvraj.</h1>
                <div>
                    <TextAnimation />
                </div>
                <h1 className='based-text'>based in India.</h1>

                <section className='desc-text'>
                    <h4>I love designing websites and user interfaces, doing freelance work and focusing on designing digital products that are easy on users and customers.</h4>
                </section>

                <section className='btn-section'>
                    <button className='btn btn-dark'>Get in touch</button>
                    <button className='btn btn-light'>Download Resume</button>
                </section>


            </section>
            <section id="aboutme">
                <AboutUs />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="projects">
                <Projects />
            </section>
            {/* <section id="experience">
            <h1 className='center-text'>experience</h1>
        </section> */}
            <section id="contact">
                <Contact />
            </section>
        </section>
        </>
    );
};

export default Homepage;
