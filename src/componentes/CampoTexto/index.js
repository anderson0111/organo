import './CampoTexto.css';

const CampoTexto = (props) => {


    return (
        <div className="campo-texto" >
            <label>{props.label}</label>
            <input placeholder= {`${props.placeholder}...`}/>
            {/* add os 3 pontos só pra modificar pelo component */}
        </div>
    )
}

export default CampoTexto