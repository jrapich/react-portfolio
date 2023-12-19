import './Resume.css';

export default function Resume () {
    return (
        <div className="resume row container-fluid">
            <div className="col-2 bg-secondary bg-gradient"></div>
            <section className="col bg-secondary border border-dark" id="resumeSection">
                <div className='my-2'></div>
                <a className="resumeLink" href="/downloads/JeremyRapichResume2024.pdf" download>
                        <h4>Click here to download full Resume</h4>
                </a>
                <h3><b>SKILLS:</b></h3>
                <div className="d-flex justify-content-start flex-column">
                    <ul>
                        <li className="text-start">Proficient in writing and debugging Front-end and Back-end JavaScript;</li>
                        <li className="text-start">Proficient in using HTML/CSS/JavaScript to build Full Stack Web Applications;</li>
                        <li className="text-start">Experience in writing, debugging, and deploying RESTful API/MERN stack apps;</li>
                        <li className="text-start">Experience in setting up and interfacing with MySQL and MongoDB databases;</li>
                        <li className="text-start">Familiarity with ReactJS and GraphQL Apollo Client/Server;</li>
                        <li className="text-start">Basic Experience in Ubuntu Server admin by self hosting and self managing a number of personal apps and projects;</li>
                        <li className="text-start">Problem solving difficult situations while providing excellent customer service;</li>
                        <li className="text-start">Typing speed of 50-60 WPM;</li>
                    </ul>
                </div>
                <h3><b>EDUCATION AND CERTS:</b></h3>
                <div className="d-flex justify-content-start flex-column">
                    <ul>
                        <li className='text-start'>University of Utah Professional Education - FullStack WebDev Certificate -  Dec. 2023</li>
                        <li className='text-start'>Tooele High School - HS Diploma - Mar. 2011</li>
                    </ul>
                </div>
                <h3><b>INTERESTS:</b></h3>
                <div className="d-flex justify-content-start flex-column">
                    <ul>
                        <li className="text-start">Astronomy, Rockets and Spaceflight;</li>
                        <li className="text-start">Music and DJing;</li>
                        <li className="text-start">World History</li>
                    </ul>
                </div>
                <h3><b>MILITARY SERVICE</b></h3>
                <div className='d-flex justify-content-start flex-column'>
                    <ul>
                        <li className="text-start">Apache Helicopter Mechanic - Utah Army National Guard - West Jordan, UT - Nov. 2011 to Nov. 2017</li>
                    </ul>
                </div>
                <h3><b>WORK EXPERIENCE</b></h3>
                <div className="d-flex justify-content-start flex-column">
                    <ul>
                        <li className="text-start">Service Dispatcher, Pond's Plumbing & Heating - North Salt Lake, UT - May 2023 to Present</li>
                        <li className="text-start">Dispatch Shift Supervisor - Guardian Flight - South Jordan, UT - June 2020 to April 2023</li>
                        <li className="text-start">Communications Specialist/Air Ambulance Dispatcher - Guardian Flight - South Jordan, UT - August 2018 to June 2020</li>
                        <li className="text-start">Control Room Operator, Utah State Capitol - Utah Department of Public Safety/Utah Highway Patrol - Nov. 2014 to Jul. 2018</li>
                    </ul>
                </div>
                <h4><b>And more...</b></h4>
                <div className='my-5'></div>
            </section>
            <div className="col-2 bg-secondary bg-gradient"></div> 
        </div>
    )
};