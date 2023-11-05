//project constructor to build a new object containing project data to display on the portfolio
export default class ProjectObj {
    constructor(id, name, link, image, description){
        this.id = id;
        this.projectName = name;
        this.link = link;
        this.image = image;
        this.description = description;
    }
};