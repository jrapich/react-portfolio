import {useState, useEffect} from 'react';
import Project from '../project/Project';
//import project data constructor
import {ProjectObj, currentProjects} from '../../../utils/projects';
const {projectName, link, github, image, description} = currentProjects;

export default function Portfolio(){
    //state for each project on the portfolio page
    const [projects, setProjects] = useState([]);

    //array of objects that contain my project info
    //each object will render to the portfolio page as its own project card
    const projectData = [];
    for (let i = 0; i < link.length; i++) {
        projectData.push(new ProjectObj(i+1, projectName[i], link[i], github[i], image[i], description[i]));
    }

    //useEffect to render all of the above projects in the portfolio on page load
    useEffect(()=>{
        setProjects(projectData);
    }, []);

    return(
        <div>
            <Project projects={projects} />
        </div>
    );
}