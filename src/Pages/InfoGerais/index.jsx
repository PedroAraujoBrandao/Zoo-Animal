import React from "react";

import TelaInicial from "./Componentes/Tela Inicial";
import Cards from "./Componentes/Cards";

function Galeria () {
  return (
    <>
      <TelaInicial />

      <h1 id="galeria" className="text-4xl font-semibold mb-8 ml-16 mt-32">Galeria</h1>

      <div className="flex justify-center items-center flex-col">
        <Cards />
      </div>
  </>
  ) 
}

export default Galeria;