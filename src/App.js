import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import mrbluelogo from './img/Letras_blancas.png';
import logo from './img/Logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">

    <div className='logo-con-letras'>

      <img
        className='letras'
        src={mrbluelogo}
        alt='Letras del logo de Mr. Blue' />

      <img
        className='logo'
        src={logo}
        alt='Logo de Mr. Blue' />
      
    </div>

      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-listas-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>

    </div>
  );
}

export default App;
