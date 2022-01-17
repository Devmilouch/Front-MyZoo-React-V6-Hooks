import TitreH1 from "../Titres/TitreH1";



const Erreur = (props) => {
    return (
        <>
            <TitreH1 bgColor="bg-danger">Erreur {props.type}</TitreH1>
            <div>
                {props.children}
            </div>
        </>
    );
}

export default Erreur;