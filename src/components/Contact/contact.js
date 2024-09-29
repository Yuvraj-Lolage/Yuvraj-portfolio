import React from 'react'
import '../Contact/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import avatar from '../../assets/images/yuvraj_avatar.png';
import githubIcon from '../../assets/images/github_icon.png';
import linkedInIcon from '../../assets/images/linkedin_icon.png';
import figmaIcon from '../../assets/images/figma_icon.png';

export const Contact = () => {
    return (
        <>
            <section className='contact-section'>
                <section className='contact-information'>
                    <h1 id="title-text">Let’s Start</h1>
                    <h1 id="title-text">project together?</h1>

                    <p id="collaboration-desc">Feel free to contact me for any questions, collaboration, conversation, or simply to say hello! Thank you so much for stopping by and visiting my site.</p>

                    <section className='contact-details'>
                        <span id='email'>yuvilolage7@gmail.com</span>
                        <span id='mobile'>+91 9284489739</span>
                    </section>
                </section>
                <section className='contact-avatar'>
                    <img className='img-fluid' src={avatar} />
                </section>
            </section>
            <section className='d-flex justify-content-center align-items-center mt-5'>
                <button type="button" class="btn btn-light" onClick={() => window.open('https://github.com/Yuvraj-Lolage', '_blank')}>
                    <section className='button-text'>
                        <img width={50} src={githubIcon} alt="Button Image" />
                        <span class="fs-4 ms-3">GitHub</span>
                    </section>
                </button>
                <button type="button" class="btn btn-light" onClick={() => window.open('https://www.linkedin.com/in/yuvraj-lolage-4349b8269/', '_blank')}>
                    <section className='button-text'>
                        <img width={50} src={linkedInIcon} alt="Button Image" />
                        <span class="fs-4 ms-3">LinkedIn</span>
                    </section>
                </button>
                <button type="button" class="btn btn-light">
                    <section className='button-text'>
                        <img width={50} src={figmaIcon} alt="Button Image" />
                        <span class="fs-4 ms-3">Figma</span>
                    </section>
                </button>
            </section>
        </>
    );
}