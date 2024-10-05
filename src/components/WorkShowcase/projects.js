import React from 'react';
import { Link } from 'react-router-dom';
import '../WorkShowcase/projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import techonsyProject from '../../assets/images/techonsy_project.png';
import ewasteProject from '../../assets/images/Ewaste_project.png';
import bookApplication from '../../assets/images/book_app.png';
import bakingBarons from '../../assets/images/baking_barons.png';
import floatingButtonIcon from '../../assets/images/floating_button_icon.png';
import arrowRight from '../../assets/images/arrow-right.png';

export const Projects = () => {
    return (
        <>
            <div>
                <span id="sub-title-text">Work Showcase</span>
                <h1 id="title-text">Featured Designs & Developments</h1>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div class="card my-4">
                            <div class="card-body">
                                <button className="floating-button"><img className=' img-fluid floating-icon' src={floatingButtonIcon} /></button>
                                <div class="card-body">
                                    <img className='project-img shadow-lg' src={techonsyProject} />
                                </div>
                                <span id='project-title'>Techonsy LMS web portal</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div class="card my-4">
                            <div class="card-body">
                                <button className="floating-button"><img className=' img-fluid floating-icon' src={floatingButtonIcon} /></button>
                                <div class="card-body">
                                    <img className='project-img shadow-lg' src={ewasteProject} />
                                </div>
                                <span id='project-title'>E-waste Management System</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div class="card my-4">
                            <div class="card-body">
                                <button className="floating-button"><img className=' img-fluid floating-icon' src={floatingButtonIcon} /></button>
                                <div class="card-body">
                                    <img className='project-img shadow-lg' src={bakingBarons} />
                                </div>
                                <span id='project-title'>T echonsy LMS web portal</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div class="card my-4">
                            <div class="card-body">
                                <button className="floating-button"><img className=' img-fluid floating-icon' src={floatingButtonIcon} /></button>
                                <div class="card-body">
                                    <img className='project-img shadow-lg' src={bookApplication} />
                                </div>
                                <span id='project-title'>E-waste Management System</span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='text-center mt-3 button-section'>
                    <Link to="/allprojects" className='btn btn-dark custom-btn'>
                        <span className='btn-text'>Show more </span>
                        <span className='btn-icon'>
                            <img src={arrowRight} alt="Arrow Right" />
                        </span>
                    </Link>
                </section>
            </div>
        </>
    );
}