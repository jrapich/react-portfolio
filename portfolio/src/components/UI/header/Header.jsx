// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Nav from './nav/Nav';
import me from '../../../assets/images/me-resized.jpg'

export default function Header() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Nav
      links={[
        <Link key={1} className="nav-link text-light" to="/">
            <img src={me} width="30" height="24" className="d-inline-block align-text-top"></img>
            Jeremy Rapich
        </Link>,
        <Link key={2} className="nav-link text-light" to="/resume">
          Resume
        </Link>,
        <Link key={3} className='nav-link text-light' to='/about'>
            About Me
        </Link>,
        <Link key={4} className='nav-link text-light' to='/contact'>
            Contact
        </Link>
        
      ]}
    />
  );
}