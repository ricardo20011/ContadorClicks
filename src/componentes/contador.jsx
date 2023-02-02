import React from "react";



function Contador({numClicks}) {
    return(
        <div className="contenedor-contador">
            {numClicks}
        </div>
    );
}

export default Contador;