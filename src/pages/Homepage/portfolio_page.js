import React from 'react'
import { Link } from 'react-scroll';
import '../Homepage/portfolio_page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TextAnimation from '../../components/textAnimation';
const Homepage = () => {
    return (<>

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
            <h1 className='subtitle-text'>Who I am</h1>
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