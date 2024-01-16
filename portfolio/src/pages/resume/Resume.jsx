import './Resume.css';

export default function Resume () {
    return (
        <>
            <div className="resume row container-fluid">
                <div className="col-2 sideCol bg-gradient py-2"></div>
                <section className="col centerCol border border-dark py-2" id="resumeSection">
                    <div className='my-2'></div>
                    <a className="resumeLink" href="/downloads/Jeremy Rapich Resume 2024.pdf" download>
                            <h4>Click here to download full Resumé</h4>
                    </a>
                    <h3><b>SKILLS:</b></h3>
                    <div className="d-flex justify-content-start flex-column">
                        <ul>
                            <li className="text-start">Writing and debugging Front-end and Back-end JavaScript;</li>
                            <li className="text-start">Using HTML/CSS/JavaScript to build Full Stack Web Applications;</li>
                            <li className="text-start">Building, debugging, and deploying RESTful API/MERN stack apps in a team environment;</li>
                            <li className="text-start">NodeJS, ExpressJS, SequelizeJS, MongooseJS, HandlebarsJS, jQuery;</li>
                            <li className="text-start">CSS/component libraries such as Bootstrap and Material UI;</li>
                            <li className="text-start">Setting up and interfacing with MySQL and MongoDB databases;</li>
                            <li className="text-start">ReactJS and GraphQL Apollo Client/Server;</li>
                            <li className="text-start">Deploying apps, bare metal and via 3rd party(Heroku and Railway), AWS coming soon;</li>
                            <li className="text-start">Ubuntu Server admin via terminal/self hosting personal apps and projects;</li>
                            <li className="text-start">6+ years experience in problem solving difficult situations while providing excellent customer service(dispatch/communications);</li>
                            <li className="text-start">Typing speed of 50-60 WPM;</li>
                            <li className="text-start">Always learning and improving! Python/Java/AngularJS/VueJS/React Native studying/learning coming soon;</li>
                        </ul>
                    </div>
                    <h3><b>EDUCATION AND CERTS:</b></h3>
                    <div className="d-flex justify-content-start flex-column">
                        <ul>
                            <li className='text-start'>Certificate - University of Utah Professional Education - Full Stack WebDev Bootcamp -  Dec. 2023</li>
                            <li className='text-start'>HS Diploma - Tooele High School - Mar. 2011</li>
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
                            <li className="text-start">Apache Helicopter Mechanic - Secret Clearance - Utah Army National Guard - West Jordan, UT - Nov. 2011 to Nov. 2017</li>
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
                    <div className='py-4'></div>
                </section>
                <div className="col-2 sideCol bg-gradient py-2"></div> 
            </div>
        </>
    )
};