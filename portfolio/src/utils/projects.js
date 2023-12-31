//project constructor to build a new object containing project data to display on the portfolio
import lacks from '../assets/images/lacks.png';
import techblog from '../assets/images/tech-blog.png';
import social from '../assets/images/social-api.png';
import starmapperJWST from '../assets/images/main_image_star-forming_region_carina_nircam_final-5mb.jpg';
import svg from  '../assets/images/svg.png';
import readme from '../assets/images/readme.png';
import chickenKing from '../assets/images/roost.png';
import bookSearch from '../assets/images/booksearch.png';

class ProjectObj {
    constructor(id, name, link, github, image, description){
        this.id = id;
        this.projectName = name;
        this.link = link;
        this.github = github;
        this.image = image;
        this.description = description
    }
};

const currentProjects = {
    projectName:[
        'The Roost',
        'Book Search',
        'Lacks(Slack Clone)',
        'Tech-Blog',
        'Social Media API',
        'Starmapper',
        'Simple SVG Generator',
        'README Generator'],
    link:[
        'https://the-roost.spinda.dev/',
        'https://book-search-engine-production-ddcc.up.railway.app/',
        'https://lacks-production.up.railway.app/',
        'https://tech-blog-production-fedd.up.railway.app/',
        'https://github.com/jrapich/social-media-API',
        'https://newtron21.github.io/Starmapper/',
        'https://github.com/jrapich/SVG-generator',
        'https://github.com/jrapich/readme-generator'
    ],
    github:[
        'https://github.com/shindekokoro/the-roost',
        'https://github.com/jrapich/book-search-engine',
        'https://github.com/daestanii1997/lacks',
        'https://github.com/jrapich/tech-blog',
        'https://github.com/jrapich/social-media-API',
        'https://github.com/Newtron21/Starmapper',
        'https://github.com/jrapich/SVG-generator',
        'https://github.com/jrapich/readme-generator'
    ],
    image:[chickenKing,bookSearch,lacks,techblog,social,starmapperJWST,svg,readme],
    description:[
        `The Roost: A full MERN stack, custom RPG game. Navigate the never ending maze of an evil chicken coop filled with untold dangers and undead flightless birds.
        Complete with a functional leveling, combat, and highscore system all built with Javascript and React.
        This serves as the final project of the webdev bootcamp, and was a great undertaking in both problem solving skills and developer collabration to get it working and functional in a short amount of time.
        Our dev team for this want to continue working on this, including considering putting the game on mobile app stores and monetizing it in some way. Visit the link above and conquer the undead chicken kingdom today!`,

        `A React/MERN full stack app that allows a user to search for and save their favorite books, by searching against the Google Books API.`,

        `Lacks, a fullstack app, is a simple, and humorous Slack clone, built as a group project with 4 people.
        It utilizes the MVC model. 
        Not entirely finished and could use some work. It was built using ExpressJS and SQL on the backend, with Handlebars rendering the frontend. `,

        `A simple CMA style tech blog fullstack app. Built with Express, Handlebars and SQL, following the MVC model.
        Complete with a working front end, user auth and login via SQL, session saving via cookie, and a functioning blog/comments system,
        this blog was an ambitious and in depth project to compete, just with the sheer amount of work it took to get it all working.`,

        'A RESTful back end API for a mock social media website, using mongodb and mongoose to store/retrieve data, with Express providing the API routes.',

        `STARMAPPER. Then result of our first group project of the course, it interacts with two seperate remote APIs to display a constellation in the night sky based
        on the city the user searches with.`,

        `A backend app using Node and  OOP principles with Javascript to generate very simple shapes via SVG file. `,

        `A backend app using Node and Javascript to quickly generate markdown to use for a README.md file. Also generates badges that can then be added to the readme.`
    ],

}

export {ProjectObj, currentProjects};
