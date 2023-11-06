import './Project.css';

export default function Project (props) {
    return (
        <section className='row container-fluid' id="projects">
            <div className="col-2"></div>
            <section className="col container-fluid">
                <h4>Here are a list of apps I have developed. Feel free to click on a image to be taken to the deployed app's site, if it has one.</h4>
                {props.projects.map((project)=>(
                    <div className="card" key={project.id}>
                    <a href={project.link}>
                        <img src={project.image} className="card-img-top" alt="screenshot"></img>
                    </a>
                    <div className="card-body">
                        <h4 className="card-text">{project.projectName}</h4>
                        <p className='card-text'>{project.description}</p>
                        <a href={project.github}>Github Repo</a>
                    </div>
                </div>
                ))}
            </section>
            <div className="col-2"></div>
        </section>
    )
};