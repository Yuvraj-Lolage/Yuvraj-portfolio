import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./project_details.css";
import floatingButtonIcon from '../../assets/images/floating_button_icon.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        try {
            axios.get(`${ process.env.REACT_APP_BACKEND_ROOT_URL }/getProject/${projectId}`)
                .then((response) => {
                    setProject(response.data);
                    console.log(response.data);
                    setLoading(false);
                })
        } catch (error) {
            setError(error.message);
            console.log(error);
            setLoading(false);
        }


        console.log(`Project id = ${projectId}`);

    }, [])


    const cardLayout = (item, index) => {
        return (
            <div className='col-lg-6'>
                <div className="card my-4" key={index}> {/* key is added */}
                    <div className="card-body">
                        <button className="floating-button">
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
            <h1 className='text-center'>Project Details</h1>
            <div className='row'>
                {project.map((item, index) => {
                    return cardLayout(item, index);
                })}
            </div>
        </>
    );
}

export default ProjectDetails;

