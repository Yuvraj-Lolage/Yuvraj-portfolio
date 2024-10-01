import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../AllProjects/allProjects.css";
import floatingButtonIcon from '../../assets/images/floating_button_icon.png';
import { Chip } from "@react-md/chip";
import axios from 'axios';

const AllProjects = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = process.env.REACT_APP_JWT_AUTHORIZATION_TOKEN;
    useEffect(() => {
        axios.get('https://yuvraj-lolage-portfolio-backend-f28wh7kb5.vercel.app/',{
            headers: {
                Authorization: `Bearer ${token}` // Send the token in the Authorization header
              }
        })
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <section className="allprojects-section">
                <Chip
                    key=""
                    selected=""
                    className=""
                    onClick={() => {}
                        
                    }
                >
                    MObile Application Development
                </Chip>

                <span id="sub-title-text">Work Showcase</span>
                <h1 id="title-text">Featured Designs & Developments</h1>
                <section className='project-tiles'>
                    {data.map((item, index) => (
                        <section className='project-row'>
                            <div className='project'>
                                <div class="card m-1">
                                    <button className="floating-button"><img className='floating-icon' src={floatingButtonIcon} /></button>
                                    <div class="card-body">
                                        <img className='project-img' src={item.projectThumbnail} />
                                    </div>
                                </div>
                                <span id='project-title'>{item.projectName}</span>
                            </div>
                        </section>
                    ))}
                </section>
            </section>
        </>
    )
}

export default AllProjects;