//project constructor to build a new object containing project data to display on the portfolio
import lacks from '../assets/images/lacks.png';
import techblog from '../assets/images/tech0blog.png';
import social from '../assets/images/social-api.png';
import starmapperJWST from '../assets/images/main_image_star-forming_region_carina_nircam_final-5mb.jpg';
import svg from  '../assets/image/svg.png';
import readme from '../assets/images/readme.png';

export class ProjectObj {
    constructor(id, name, link, image){
        this.id = id;
        this.projectName = name;
        this.link = link;
        this.image = image;
    }
};

export const currentProjects = {
    projectName:[
        'Lacks(Slack Clone)',
        'Tech-Blog',
        'Social Media API',
        'Starmapper',
        'Simple SVG Generator',
        'README Generator'],
    link:[
        'https://github.com/daestanii1997/lacks',
        'https://github.com/jrapich/tech-blog',
        'https://github.com/jrapich/social-media-API',
        'https://github.com/Newtron21/Starmapper',
        'https://github.com/jrapich/SVG-generator',
        'https://github.com/jrapich/readme-generator'
    ],
    image:[lacks,techblog,social,starmapperJWST,svg,readme],

}
