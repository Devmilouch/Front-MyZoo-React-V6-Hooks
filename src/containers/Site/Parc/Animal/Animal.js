import Bouton from "../../../../components/UI/Bouton/Bouton";



const Animal = (props) => {
    return (
        <>
            <div className="card mb-3">
                <h3 className="card-header">{props.id} - {props.nom}</h3>
                <div className="card-body">
                    <div className="card-text">{props.description}</div>
                </div>
                <div className="text-center" style={{height: "100px"}}>
                    <img src={props.image} alt={`Image d'un ${props.nom}`} className="img-fluid h-100" />
                </div>
                <div className="card-body">
                    <h3>Famille : <Bouton 
                                    typeBtn="btn-dark"
                                    clic={() => props.handleSelectionFamille(props.famille.idFamille)}
                                    >
                                    {props.famille.libelleFamille.toUpperCase()}
                                    </Bouton>
                    </h3>
                    <div>{props.famille.descriptionFamille}</div>
                </div>
                <div className="card-body">
                    <h3>Continents :</h3>
                    {
                        props.continents.map(continent => {
                            let colorBtn = "";
                            switch(continent.idContinent) {
                                case "1": colorBtn = "btn-primary";
                                break;
                                case "2": colorBtn = "btn-danger";
                                break;
                                case "3": colorBtn = "btn-warning";
                                break;
                                case "4": colorBtn = "btn-success";
                                break;
                                case "5": colorBtn = "btn-info";
                                break;
                                default: colorBtn = "btn-secondary";
                            }

                            return <Bouton 
                            key={continent.idContinent} 
                            css="m-1" 
                            typeBtn={colorBtn}
                            clic={() => props.handleSelectionContinent(continent.idContinent)}
                            >
                            {continent.libelleContinent.toUpperCase()}
                            </Bouton>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Animal;