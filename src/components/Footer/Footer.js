import { NavLink } from "react-router-dom";

import classes from "./Footer.module.css";

import imgFacebook from "../../assets/images/footer/fb.png";
import imgTwitter from "../../assets/images/footer/twitter.png";
import imgYoutube from "../../assets/images/footer/youtube.png";



const Footer = () => (
    <footer className="bg-primary">
        <div className="text-white text-center">MyZoo - Tous droits réservés</div>
        <div className="row no-gutters align-items-center text-center pt-2">
            <div className="col-3">
                <a href="https://www.facebook.com" className="d-block" target="_blank">
                    <img src={imgFacebook} alt="Logo Facebook" className="imgFB" />
                </a>
            </div>
            <div className="col-3">
                <a href="https://www.twitter.com" className="d-block" target="_blank">
                    <img src={imgTwitter} alt="Logo Twitter" className="imgTwitter" />
                </a>
            </div>
            <div className="col-3">
                <a href="https://www.youtube.com" className="d-block" target="_blank">
                    <img src={imgYoutube} alt="Logo Youtube" className="imgYoutube" />
                </a>
            </div>
            <div className="col-3">
                <NavLink to="/mentions-legales" className={`nav-link p-0 m-0 ${classes.p_footerLink}`}>Mentions légales</NavLink>
                <a href="mailto:contact@myzoo.com" className={`nav-link p-0 m-0 ${classes.p_footerLink}`}>contact@myzoo.com</a>
            </div>
        </div>
    </footer>
)

export default Footer;