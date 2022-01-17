


const TitreH1 = (props) => {
    const backgroundColor = props.bgColor ? props.bgColor : "bg-primary";
    const monCss = `border border-dark p-2 text-white text-center ${backgroundColor}`;

    return <h1 className={monCss}>{props.children}</h1>
}

export default TitreH1;