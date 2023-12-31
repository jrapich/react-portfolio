import './Footer.css';

export default function Footer() {
    return(
        <footer className='row container-fluid text-light d-block footer-colors'>
            <span>&copy; Jeremy Rapich 2023 </span>
            <span><a href='https://www.github.com/jrapich'>Github</a></span>
            <span><a href='https://www.linkedin.com/in/jeremy-rapich' >LinkedIn</a></span>
            <span><a href='https://www.twitter.com/jeremy_rapich' >Twitter</a></span>
            <div className='py-2'></div>
        </footer>
    );
}