const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navs" >
            <a className="navbar-brand mx-2 colors" href="#">
                Truck
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse anish justify-content-end mx-5" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-auto">
                    <li className="nav-item mx-5">
                        <a className="nav-link colr" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5 colr" href="about-us.php">About us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle colr" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link mx-5 colr " href="contact.php">Contact us</a>
                    </li>
                </ul>

                <button className="btn btn-cus my-2 my-sm-0 px-4 py-2 btnl"> <a
                    type="button" style={{ "color": "white", "textdecoration": "none" }}
                    href="login.php">Login/SignUp</a></button>
            </div>
        </nav>
    );
}

export default Navbar;