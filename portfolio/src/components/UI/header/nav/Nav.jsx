export default function Nav({links}) {
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand" href="#">
                <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
                Bootstrap
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* {links.map((link) => link)} */}
                </ul>
            </div>
        </nav>
    );
}