import React from "react";
import '../hojas-estilos/Boton.css';


function Boton({texto, btnClick, funcionClick} ) {
    return(
        <button
            className = { btnClick ? 'btn-click' : 'btn-reiniciar' }
            onClick = {funcionClick}
        >
            {texto}
        </button>
    );
}

export default Boton;