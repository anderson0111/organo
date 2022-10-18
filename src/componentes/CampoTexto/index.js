import './CampoTexto.css';

const CampoTexto = (props) => {

    // caso eu queira modificar atraves do component
    // const placeholderModificada = `${props.placeholder}...`  1

    return (
        <div className="campo-texto" >
            <label>{props.label}</label>
            {/* <input placeholder = {props.placeholder} /> */}
            {/* ou */}
            {/* <input placeholder = {placeholderModificada}    1 */}
            <input placeholder= {`${props.placeholder}...`}/>
        </div>
    )
}

export default CampoTexto