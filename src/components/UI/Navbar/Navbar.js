import { NavLink } from "react-router-dom";

import logo from "../../../assets/images/logo.png";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="Logo de My Zoo" width="50px" className="rounded" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/les-animaux" className="nav-link">Les animaux</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;