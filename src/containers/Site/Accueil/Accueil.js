import { useEffect } from "react";

import TitreH1 from "../../../components/UI/Titres/TitreH1";

import imgBanderole from "../../../assets/images/banderole.png";
import imgLogo from "../../../assets/images/logo.png";



const Accueil = () => {
    useEffect(() => {
        document.title = "Parc d'animaux MyZoo";
    }, []);

    return (
        <div>
            <img src={imgBanderole} alt="Banderole accueil MyZoo" className="img-fluid" />
            <TitreH1 bgColor="bg-success">Venez visiter le parc d'animaux MyZoo !!!</TitreH1>
            <div className="container">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nulla voluptate ex fugiat culpa et velit dolor, autem modi a atque porro ipsum dolore omnis ut? Cum molestiae dignissimos nisi.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nulla voluptate ex fugiat culpa et velit dolor, autem modi a atque porro ipsum dolore omnis ut? Cum molestiae dignissimos nisi.</p>
                <div className="row no-gutters align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={imgLogo} alt="Logo My Zoo" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nulla voluptate ex fugiat culpa et velit dolor, autem modi a atque porro ipsum dolore omnis ut? Cum molestiae dignissimos nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nulla voluptate ex fugiat culpa et velit dolor, autem modi a atque porro ipsum dolore omnis ut? Cum molestiae dignissimos nisi.</p>
                    </div>
                </div>
                <div className="row no-gutters align-items-center">
                    <div className="col-12 col-md-6">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nulla voluptate ex fugiat culpa et velit dolor, autem modi a atque porro ipsum dolore omnis ut? Cum molestiae dignissimos nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nulla voluptate ex fugiat culpa et velit dolor, autem modi a atque porro ipsum dolore omnis ut? Cum molestiae dignissimos nisi.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={imgLogo} alt="Logo My Zoo" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accueil;