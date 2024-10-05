import React, { useState } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Navbar/navbar.css";
import Hamburger from "../../components/Hamburger/hamburger";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburge = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log(hamburgerOpen);
    
  };
  return (
    <>
      <ul className="nav my-custom-navbar">
        <li className={`nav-item`}>
          <Link
            className="nav-link"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
          >
            About me
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
            duration={200}
          >
            Services
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
          >
            Projects
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="experience"
            spy={true}
            smooth={true}
            offset={-60}
            duration={200}
          >
            Experience
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger-background">
        <h4>Yuvraj Lolage</h4>
      </div>
      <div className="hamburger" onClick={ toggleHamburge }>
        <Hamburger isOpen={ hamburgerOpen }/>
      </div>
      <style jsx="true">{`

        

        ul {
          z-index: ${hamburgerOpen ? '11' : '0'} !important;
          display: ${hamburgerOpen ? 'flex' : ''} !important;
          flex-direction: ${hamburgerOpen ? 'column' : ''} !important;
          background-color: red;
          width: 50vw;
          margin-top: 50px;
          position: absolute;
        }
      `}</style>
    </>
  );
};

export default Navbar;
