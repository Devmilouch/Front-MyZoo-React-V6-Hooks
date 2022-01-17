import { useEffect } from "react";
import axios from "axios";

import TitreH1 from "../../../components/UI/Titres/TitreH1";
import Formulaire from "./Formulaire/Formulaire";



const Contact = () => {
    useEffect(() => {
        document.title = "Page de contact - MyZoo";
    }, []);

    const handleEnvoiMail = (contenuAEnvoyer) => {
        axios.post(`http://localhost/serveur-app-zoo/front/sendMessage`, contenuAEnvoyer)
            .then(reponse => {
                console.log(reponse);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <TitreH1 bgColor="bg-success">Contactez-nous !</TitreH1>
            <div className="container">
                <h2>Adresse :</h2>
                xxxxxxxxxxxxxxxxxxxxx
                <h2>Téléphone :</h2>
                00 00 00 00 00
                <h2>Vous préférez nous écrire ?</h2>
                <Formulaire handleEnvoiMail={handleEnvoiMail} />
            </div>
        </>
    );
}

export default Contact;