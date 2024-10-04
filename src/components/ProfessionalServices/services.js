import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../ProfessionalServices/services.css";

const Services = () => {
    return (
        <section className="services-section" >
            <span id="sub-title-text">Professional Services</span>
            <h1 id="title-text">WHAT CAN I DO FOR YOU?</h1>

            <section>
            <div className='row'>
                    <div className='col-lg mx-2'>
                        <div class="card my-3">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                    <div className='col-lg mx-2'>
                        <div class="card my-3">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                    <div className='col-lg mx-2'>
                        <div class="card my-3">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                    <div className='col-lg mx-2'>
                        <div class="card my-3">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="card-deck">
                <div class="card m-1">
                    <div class="card-body">
                        UI/UX Designing.
                    </div>
                </div>
                <div class="card m-1">
                    <div class="card-body">
                        Web application developement.
                    </div>
                </div>
                <div class="card m-1">
                    <div class="card-body">
                        Mobile application developement.
                    </div>
                </div>
                <div class="card m-1">
                    <div class="card-body">
                        Wireframing & Prototyping.
                    </div>
                </div>
            </section> */}
        </section>
    )
}

export default Services;