import React from 'react'
import '../WorkShowcase/projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import techonsyProject from '../../assets/images/techonsy_project.png';
import ewasteProject from '../../assets/images/Ewaste_project.png';
import floatingButtonIcon from '../../assets/images/floating_button_icon.png';
import arrowRight from '../../assets/images/arrow-right.png';

export const Projects = () => {
    return (
        <>
            <section className="projects-section">
                <span id="sub-title-text">Work Showcase</span>
                <h1 id="title-text">Featured Designs & Developments</h1>

                <section className='project-tiles'>
                    <section className='project-row'>
                        <div className='project'>
                            <div class="card m-1">
                                <button className="floating-button"><img className='floating-icon' src={floatingButtonIcon} /></button>
                                <div class="card-body">
                                    <img className='project-img' src={techonsyProject} />
                                </div>
                            </div>
                            <span id='project-title'>Techonsy LMS web portal</span>
                        </div>
                        <div className='project'>
                            <div class="card m-1">
                                <button className="floating-button"><img className='floating-icon' src={floatingButtonIcon} /></button>
                                <div class="card-body">
                                    <img className='project-img' src={ewasteProject} />
                                </div>
                            </div>
                            <span id='project-title'>E-waste management system</span>
                        </div>
                    </section>
                    <section className='project-row'>
                        <div className='project'>
                            <div class="card m-1">
                                <button className="floating-button"><img className='floating-icon' src={floatingButtonIcon} /></button>
                                <div class="card-body">
                                    <img className='project-img' src={techonsyProject} />
                                </div>
                            </div>
                            <span id='project-title'>Techonsy LMS web portal</span>
                        </div>
                        <div className='project'>
                            <div class="card m-1">
                                <div class="card-body">
                                    <button className="floating-button"><img className='floating-icon' src={floatingButtonIcon} /></button>
                                    <img className='project-img' src={ewasteProject} />
                                </div>
                            </div>
                            <span id='project-title'>E-waste management system</span>
                        </div>
                    </section>
                </section>

                <section className='text-center mt-3'>
                <button className='btn btn-dark custom-btn'>
                    <span className='btn-text'>Show</span>
                    <span className='btn-icon'>
                        <img src={arrowRight} alt="Arrow Right" />
                    </span>
                </button>
                </section>
            </section>
        </>
    );
}