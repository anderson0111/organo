import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="digite seu nome" />
      <CampoTexto label="Cargo" placeholder="digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="digite o endereço da imagem"/>
    </div>
  );
}

export default App;
