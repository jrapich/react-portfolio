import me from '../../../../assets/images/me.jpg';
import nightstreak from '../../../../assets/images/nightstreak-half.jpg'
import './Nav.css';

export default function Nav({links}) {
    return(
        <nav className="navbar nav-colors">
            <div className="container-fluid  row justify-content-center">
                <section className="col-2">
                    <div>
                        <a href="/home">
                            <img 
                            src={me} 
                            width="200" 
                            height="200" 
                            className="d-inline-block align-text-top navImage"
                            >
                            </img>
                        </a>
                    </div>
                </section>
                <section className="col navbar-brand">
                    <div className="navbar-nav">
                        {links.map((link) => link)}
                    </div>
                </section>
                <section className="col-2">
                    <div>
                        <a href="/home">
                            <img 
                            src={nightstreak} 
                            width="200" 
                            height="200" 
                            className="d-inline-block align-text-top navImage"
                            >
                            </img>
                        </a>
                    </div>
                </section>
            </div>
        </nav>
    );
}