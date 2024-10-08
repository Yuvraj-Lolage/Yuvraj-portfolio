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
            axios.get(`${process.env.REACT_APP_BACKEND_ROOT_URL}/getProject/${projectId}`)
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

    }, [projectId])


    const cardLayout = (item, index) => {
        return (
            <div class="row">
                <div class="col-sm-7 my-5">
                    <span id="sub-title-text">Project Details</span>
                    <h1 id="title-text">{item.projectName}</h1>

                    <div className="card my-4" key={index}> {/* key is added */}
                        <div className="card-body">
                            <button className="floating-button">
                                <img className=' img-fluid floating-icon' src={floatingButtonIcon} alt="icon" />
                            </button>
                            <div className="card-body">
                                {/* Image source is fetched from the item's thumbnail */}
                                <img className='project-img shadow-lg' src={item.projectThumbnail} alt={item.projectName} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-5 my-5">
                    <span id="sub-title-text">Technical Terms</span>
                </div>
            </div>
            // <div className='row'>
            // <span id="sub-title-text">Project Details</span>
            // <h1 id="title-text">{ item.projectName }</h1>
            // <div className='col-lg-7'>
            //     <div className="card my-4" key={index}> {/* key is added */}
            //         <div className="card-body">
            //             <button className="floating-button">
            //                 <img className=' img-fluid floating-icon' src={floatingButtonIcon} alt="icon" />
            //             </button>
            //             <div className="card-body">
            //                 {/* Image source is fetched from the item's thumbnail */}
            //                 <img className='project-img shadow-lg' src={item.projectThumbnail} alt={item.projectName} />
            //             </div>
            //             {/* Displaying the project title */}
            //             <span id='project-title'>{item.projectName}</span>
            //         </div>
            //     </div>
            // </div>
            // <div className='col-lg-7'>
            //     { item.projectName }
            //     <br/>
            //     { item.ProjectDetails }
            // </div>
            // </div>
        );
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <section className='project-details-section'>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <h4 class="alert-heading">Thank you for visiting!</h4>
                    <p>The page is currently under development. We apologize for any inconvenience this may cause.</p>
                    <hr />
                    <p class="mb-0">Whenever you need assistance, feel free to reach out. We appreciate your patience!</p>

                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>


                {project.map((item, index) => {
                    return cardLayout(item, index);
                })}
            </section>
        </>
    );
}

export default ProjectDetails;

