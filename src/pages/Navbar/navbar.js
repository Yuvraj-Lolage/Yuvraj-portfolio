import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Navbar/navbar.css";

const Navbar = () => {
 

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
            offset={-60}
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
            offset={-60}
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
            offset={-50}
            duration={200}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
