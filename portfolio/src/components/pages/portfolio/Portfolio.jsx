import {useState, useEffect} from 'react';
import Project from '../project/Project';
//import project data constructor
import ProjectObj from '../../../utils/projects';


export default function Portfolio(){
    //state for each project on the portfolio page
    const [projects, setProjects] = useState([]);

    //array of objects that contain my project info
    //each object will render to the portfolio page as its own project card
    const projectData = [];
    projectData.push(new ProjectObj(1,'name','github link','screenshot'));
    projectData.push(new ProjectObj(2,'name','github link','screenshot'));
    projectData.push(new ProjectObj(3,'name','github link','screenshot'));
    projectData.push(new ProjectObj(4,'name','github link','screenshot'));
    projectData.push(new ProjectObj(5,'name','github link','screenshot'));
    projectData.push(new ProjectObj(6,'name','github link','screenshot'));

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