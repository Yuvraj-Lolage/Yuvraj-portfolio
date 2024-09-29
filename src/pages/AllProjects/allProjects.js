import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../AllProjects/allProjects.css";
import floatingButtonIcon from '../../assets/images/floating_button_icon.png';
import arrowRight from '../../assets/images/arrow-right.png';
import axios from 'axios';

const AllProjects = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:4000')
            .then(response => {
                setData(response.data);
                console.log(response.data);
                
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <section className="allprojects-section">
        <span id="sub-title-text">Work Showcase</span>
        <h1 id="title-text">Featured Designs & Developments</h1>
                <section className='project-tiles'>
                    {data.map((item, index) => (
                        <section className='project-row'>
                        <div className='project'>
                            <div class="card m-1">
                                <button className="floating-button"><img className='floating-icon' src={floatingButtonIcon} /></button>
                                <div class="card-body">
                                    <img className='project-img' src={ item.projectThumbnail } />
                                </div>
                            </div>
                            <span id='project-title'>{ item.projectName }</span>
                        </div>
                    </section>
                    ))}
                </section>
            </section>
        </>
    )
}

export default AllProjects;