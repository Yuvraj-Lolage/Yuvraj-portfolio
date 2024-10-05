import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../AllProjects/allProjects.css";
import floatingButtonIcon from '../../assets/images/floating_button_icon.png';
import axios from 'axios';

const AllProjects = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${ process.env.REACT_APP_BACKEND_ROOT_URL }`)
            .then(response => {
                setData(response.data);
                console.log(response.data);

                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                console.log(err);

                setLoading(false);
            });
    }, []);

    const cardLayout = (item, index) => {
        return (
            <div className='col-lg-6'>
                <div className="card my-4" key={index}> {/* key is added */}
                    <div className="card-body">
                        <button className="floating-button" onClick={ ()=> window.open(`/project/${ item._id }`) }>
                            <img className=' img-fluid floating-icon' src={floatingButtonIcon} alt="icon" />
                        </button>
                        <div className="card-body">
                            {/* Image source is fetched from the item's thumbnail */}
                            <img className='project-img shadow-lg' src={item.projectThumbnail} alt={item.projectName} />
                        </div>
                        {/* Displaying the project title */}
                        <span id='project-title'>{item.projectName}</span>
                    </div>
                </div>
            </div>
        );
    }


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <section className="allprojects-section">
                <span id="sub-title-text">Work Showcase</span>
                <h1 id="title-text">Featured Designs & Developments</h1>

                <div className='row'>

                    {data.map((item, index) => {
                        return cardLayout(item, index);
                    })}
                </div>
            </section>
        </>
    )
}

export default AllProjects;