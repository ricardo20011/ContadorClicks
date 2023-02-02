import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import './App.css';
import {useState} from 'react';

function App() {
  const [numClicks , setClicks] = useState(0);
  
  const sumarClick = () => {
    setClicks(numClicks + 1);
  }
  const restarClick = () => {
    setClicks(numClicks - 1);
  }

  const reiniciarContador = () => {
    setClicks(0);
  }

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h2 className='contenedor-principal__titulo'>CONTADOR DE CLICKS</h2>

        <Contador 
          numClicks = {numClicks}
        />

        <Boton 
          texto = 'Sumar click'
          btnClick = {true}
          funcionClick = {sumarClick}
        />
        <Boton 
          texto = 'Restar Click'
          btnClick = {true}
          funcionClick = {restarClick}
        />
        <Boton 
          texto = 'Reiniciar'
          btnClick = {false}
          funcionClick = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
