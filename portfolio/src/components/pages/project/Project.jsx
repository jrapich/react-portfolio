
export default function Project (props) {
    return (
        <section className='row container-fluid' id="projects">
            <div className="col-2"></div>
            <section className="col container-fluid">
                {props.projects.map((project)=>(
                    <div className="card" key={project.id}>
                    <a href={project.link}>
                        <img src={project.image} className="card-img-top" alt=""></img>
                    </a>
                    <div className="card-body">
                        {console.log(project.name)}
                        <p className="card-text">{project.projectName}</p>
                    </div>
                </div>
                ))}
            </section>
            <div className="col-2"></div>
        </section>
    )
};