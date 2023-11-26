import './Resume.css';

export default function Project () {
    return (
        <div className="resume row container-fluid">
            <div className="col-2 bg-secondary bg-gradient"></div>
            <section className="col bg-secondary" id="resumeSection">
                <h3><b>SKILLS:</b></h3>
                <div className="d-flex justify-content-start flex-column">
                    <ul>
                        <li className="text-start">Proficient in writing and debugging Front-end and Back-end JavaScript;</li>
                        <li className="text-start">Experience in writing, debugging, and deploying RESTful API/MERN stack apps;</li>
                        <li className="text-start">Experience in setting up and interfacing with MySQL and MongoDB databases;</li>
                        <li className="text-start">Basic Experience in Ubuntu Server admin by self hosting and self managing a number of personal apps and projects</li>
                    </ul>
                </div>
                <a className="resumeLink" href="/downloads/JeremyRapichResume2024.pdf" download>
                        <h4>Click here to download full Resume</h4>
                </a>
            </section>
            <div className="col-2 bg-secondary bg-gradient"></div> 
        </div>
    )
};