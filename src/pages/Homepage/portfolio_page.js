import React from 'react'
import { Link } from 'react-scroll';
import '../Homepage/portfolio_page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Homepage = () => {
    return (<>
         
        <section id="home">
            <h1 className='center-text'>Introduction</h1>
        </section>
        <section id="aboutme">
            <h1 className='center-text'>About me</h1>
        </section>
        <section id="services">
            <h1 className='center-text'>Services</h1>
        </section>
        <section id="projects">
            <h1 className='center-text'>Projects</h1>
        </section>
        <section id="experience">
            <h1 className='center-text'>experience</h1>
        </section>
        <section id="contact">
            <h1 className='center-text'>Under developement</h1>
        </section>
    </>);
}
 
export default Homepage;