import me from '../../../../assets/images/me.jpg';
import './Nav.css';

export default function Nav({links}) {
    return(
        <nav className="navbar bg-body-secondary" data-bs-theme="dark">
            <div className="container-fluid  row justify-content-center">
                <section className="col-2 text-light">
                    <div>
                        <img src={me} width="200" height="200" className="d-inline-block align-text-top navImage"></img>
                    </div>
                </section>
                <section className="col navbar-brand">
                    <ul className="navbar-nav">
                        {links.map((link) => link)}
                    </ul>
                </section>
                <section className="col-2">
                </section>
            </div>
        </nav>
    );
}