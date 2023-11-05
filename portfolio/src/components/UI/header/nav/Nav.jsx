import me from '../../../../assets/images/me.jpg'
import './Nav.css'

export default function Nav({links}) {
    return(
        <nav className="navbar bg-body-secondary" data-bs-theme="dark">
            <div className="container-fluid  row justify-content-center">
                <div className="col text-light">
                    Jeremy Rapich
                    <img src={me} width="300" height="300" className="d-inline-block align-text-top" id='navImage'></img>
                </div>
                <div className="col navbar-brand">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link) => link)}
                    </ul>
                </div>
                <div className="col"></div>
            </div>
        </nav>
    );
}