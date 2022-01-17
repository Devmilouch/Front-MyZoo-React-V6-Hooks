import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../../components/UI/Navbar/Navbar";
import Accueil from "./Accueil/Accueil";
import Erreur from "../../components/UI/Erreur/Erreur";
import Footer from "../../components/Footer/Footer";
import Parc from "./Parc/Parc";
import Contact from "./Contact/Contact";



const Site = () => {
    return (
        <>
            <div className="navEtContenu">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Accueil/>} />
                    <Route path="/les-animaux" element={<Parc />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Erreur type="404">La page n'existe pas !</Erreur>} />
                </Routes>
                <div className="footerAjustement"></div>
            </div>
            <Footer />
        </>
    );
}

export default Site;