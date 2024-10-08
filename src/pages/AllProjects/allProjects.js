import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../AllProjects/allProjects.css";
import floatingButtonIcon from '../../assets/images/floating_button_icon.png';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

const AllProjects = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedChip, setSelectedChip] = useState(null);
    const chipsData = [
        { label: 'Web Applications', field: 'web', avatar: "" },
        { label: 'Mobile Applications', field: 'mobile', avatar: "" },
        { label: 'UI/UX Designs', field: 'ui', avatar: "" },
        { label: 'Backend APIs', field: 'backend', avatar: "" }
    ];



    useEffect(() => {
        getAllProjects();
    }, []);

    const getAllProjects = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_ROOT_URL}`)
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
    }

    const cardLayout = (item, index) => {
        return (
            <div className='col-lg-6'>
                <div className="card my-4" key={index}> {/* key is added */}
                    <div className="card-body">
                        <button className="floating-button" onClick={() => window.open(`/project/${item._id}`)}>
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

    const fetchData = (category) => {
        console.log(`${category} projects`);
        axios.get(`${process.env.REACT_APP_BACKEND_ROOT_URL}/projects/${category}`)
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
    }

    const handleChipClick = (chip) => {
        setSelectedChip(chip.field);  // Set the selected chip
        fetchData(chip.field);  // Fetch sorted data
    };
    const handleChipDelete = (chip) => {
        setSelectedChip(null);
        getAllProjects();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <>
            <section className="allprojects-section">
                <span id="sub-title-text">Work Showcase</span>
                <h1 id="title-text">Featured Designs & Developments</h1>
                <p>Or Sort Projects with</p>
                <section>
                    {chipsData.map((chip) => (
                        <Chip
                            className='custom-chip'
                            key={chip.field}
                            // avatar={<Avatar>{chip.label[0]}</Avatar>}  // First letter of the label
                            avatar={<Avatar className='custom-avatar' >{chip.label[0]}</Avatar>}
                            label={chip.label}
                            variant={selectedChip === chip.field ? "filled" : "outlined"}  // Selected chip style
                            clickable
                            onClick={() => handleChipClick(chip)}  // Sort by the chip field
                            onDelete={selectedChip === chip.field ? () => handleChipDelete(chip) : undefined} // Clear filter
                        />
                    ))}
                </section>
                <div className='row'>
                    {data.length !== 0 ? data.map((item, index) => {
                        return cardLayout(item, index);
                    }) :
                        <div className="d-grid justify-content-center align-items-center" style={{height: "50vh"}}>
                            <p className='d-grid place-items-center'>No Projects in this category</p>
                        </div>
                    }

                </div>
            </section>
        </>
    )
}

export default AllProjects;