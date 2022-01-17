import { useState, useEffect } from "react";
import axios from "axios";

import TitreH1 from "../../../components/UI/Titres/TitreH1";
import Animal from "./Animal/Animal";
import Bouton from "../../../components/UI/Bouton/Bouton";



const Parc = () => {
    const [ animaux, setAnimaux ] = useState(null);
    const [ familleActuelle, setFamilleActuelle ] = useState(null);
    const [ continentActuel, setContinentActuel ] = useState(null);
    const [ listeFamilles, setListeFamilles ] = useState(null);
    const [ listeContinents, setListeContinents ] = useState(null);

    useEffect(() => {
        document.title = "Les animaux - MyZoo";

        axios.get(`http://localhost/serveur-app-zoo/front/familles`)
            .then(reponse => {
                setListeFamilles(Object.values(reponse.data));
            })
            .catch(error => console.log(error))

        axios.get(`http://localhost/serveur-app-zoo/front/continents`)
        .then(reponse => {
            setListeContinents(Object.values(reponse.data));
        })
        .catch(error => console.log(error))

        loadData();
    }, []);

    const loadData = (idFamille = -1, idContinent = -1) => {
        axios.get(`http://localhost/serveur-app-zoo/front/animaux/${idFamille}/${idContinent}`)
            .then(reponse => {
                setAnimaux(Object.values(reponse.data));
                if (idFamille !== -1) setFamilleActuelle(idFamille);
                else setFamilleActuelle(null);
                if (idContinent !== -1) setContinentActuel(idContinent);
                else setContinentActuel(null);
            })
    }

    const handleSelectionFamille = (idFamille) => {
        // console.log(`L'id de la famille : ${idFamille}`);
        loadData(idFamille, undefined);
    }

    const handleSelectionContinent = (idContinent) => {
        // console.log(`L'id du continent : ${idContinent}`);
        loadData(undefined, idContinent);
    }

    const handleResetFiltreFamille = () => {
        setFamilleActuelle(null);
        let continent;
        continentActuel ? continent = continentActuel : continent = undefined;
        loadData(undefined, continent);
    }

    const handleResetFiltreContinent = () => {
        setContinentActuel(null);
        let famille;
        familleActuelle ? famille = familleActuelle : famille = undefined;
        loadData(famille, undefined);
    }



    return (
        <>
            <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
            <div className="container-fluid">
                <span>Filtres : </span>
                <select onChange={event => handleSelectionFamille(event.target.value)}>
                    <option 
                    value="-1"
                    selected={!familleActuelle && "selected"}
                    >
                    Familles
                    </option>
                    {
                        listeFamilles && listeFamilles.map(famille => {
                            return <option
                                    key={famille.famille_id}
                                    value={famille.famille_id}
                                    selected={familleActuelle === famille.famille_id && "selected"}
                                    >
                                    {famille.famille_libelle}
                                    </option>
                        })
                    }
                </select>
                <select onChange={event => handleSelectionContinent(event.target.value)}>
                    <option 
                    value="-1"
                    selected={!continentActuel && "selected"}
                    >
                    Continents
                    </option>
                    {
                        listeContinents && listeContinents.map(continent => {
                            return <option 
                                    key={continent.continent_id}
                                    value={continent.continent_id}
                                    selected={continentActuel === continent.continent_id && "selected"}
                                    >
                                    {continent.continent_libelle}
                                    </option>
                        })
                    }
                </select>
                {
                    (familleActuelle && familleActuelle !== "-1") && <Bouton
                                        typeBtn="btn-secondary"
                                        clic={handleResetFiltreFamille}
                                        >
                                        {listeFamilles[familleActuelle - 1].famille_libelle} &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        </Bouton>
                }
                {
                    (continentActuel && continentActuel !== "-1") && <Bouton
                                        typeBtn="btn-secondary"
                                        clic={handleResetFiltreContinent}
                                        >
                                        {listeContinents[continentActuel - 1].continent_libelle} &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        </Bouton>
                }
            </div>
            <div className="container-fluid">
                <div className="row no-gutters">
                    {
                        animaux
                        ?
                        animaux.map(animal => {
                            return (
                                <div key={animal.id} className="col-12 col-md-6 col-xl-4">
                                    <Animal 
                                    handleSelectionFamille={handleSelectionFamille} 
                                    handleSelectionContinent={handleSelectionContinent} 
                                    {...animal} 
                                    />
                                </div>
                            );
                        })
                        :
                        <p className="text-center">Chargement en cours...</p>
                    }
                </div>
            </div>
        </>
    );
}

export default Parc;