export default function Nav({links}) {
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand" href="#">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}