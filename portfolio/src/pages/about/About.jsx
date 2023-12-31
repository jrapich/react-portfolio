import './About.css'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

export default function About() {
    return (
      <>
        <section className='row container-fluid text-center' id="aboutMe">
          <div className='col-2 sideCol bg-gradient py-4'></div>
          <div className='col border border-dark centerCol py-4'>
            <h3> My Fullstack Webdev Journey</h3>
            <p>
                Hello, my name is Jeremy. I currently live in South Jordan and am a recent graduate student of the University of Utah/EdEx 
                Fullstack Web Developer Coding Bootcamp. I successfully completed it December 4th, 2023.
                I have learned much through it and feel I have gained valuable knowledge and experience building frontend, backend,
                and full stack apps. I'm quite proud of the hard work I've put in to it and the knowledge I've obtained from it.
            </p>
            <p>
                At the beginning of the course, one of the first assignments was to build and deploy a simple portfolio with basic
                html and css only. You can see that <a href='https://jrapich.github.io/jrapich-portfolio/'>here.</a> Much has changed 
                since then in both my knowledge and experience in building web apps.
                This portfolio, in contrast, was built entirely with ReactJS and Bootstrap!
            </p>
            <p>
                I am proud of the hard work I've put into becoming a developer and adopting a growth mindset. I know the learning never stops
                and am looking forward to the new skills and knowledge I will be gaining. Be sure to check the portfolio section here to check out
                apps I have built both during and after my webdev course.
            </p>
            <hr></hr>
            <p>
                Much of my past work experience lies in communications and emergency dispatch. I was an air ambulance dispatcher
                for 5 years, and am seeking to jumpstart myself in a new career that is much less stressful and demanding.
            </p>
            <p>
                I've always been curious and experimentive with computers and technology, so a coding career seems like an obvious choice.
                How computers and the internet work and what makes them function has always been interesting to me. I've used Linux as my primary
                OS for several years and have enjoyed the tinkering and customization that it brings. I've repurposed an old PC as an ubuntu linux server at my home
                and have been learning to self host all sorts of interesting things. Several of my own projects completed throughout my webdev bootcamp will be self hosted
                complete with my own domain soon.
            </p>
            <p>
                When I'm not messing with tech stuff, I'm enjoying music and have a vinyl record collection. I'm proud of the digital and physical
                music library I've maintained since I was 14, and have been slowly learning how to DJ as a fun side hobby.
            </p>
            <section className='d-flex justify-content-center'>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </section>
            <h4>Powered by Vite + React</h4>
          </div>
          <div className='col-2 sideCol bg-gradient py-4'></div>
        </section>
      </>
    )
  }