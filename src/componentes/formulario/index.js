import './Formulario.css'
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaorador</h2>
                <CampoTexto label="Nome" placeholder="digite seu nome" />
                <CampoTexto label="Cargo" placeholder="digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario