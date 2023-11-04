export default function Nav({links}) {
    return(
        <nav className="navbar bg-body-secondary" data-bs-theme="dark">
            <div className="container-fluid justify-content-center">
                <div className="navbar-brand">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}