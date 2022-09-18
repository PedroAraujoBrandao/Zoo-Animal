import React, { useEffect, useState } from "react"
import api from "../../api";

import emptystate from '../../assets/Not Found illustration.svg';

function Detalhes () {
  const [animals, setAnimals] = useState([])

  const getAnimals = () => {
    api.
      get('/animals/rand')
      .then(response => {
        setAnimals(response.data);
      })
      .catch (err => {
        console.log(err)
      })
    }
    
    return (
      <>
      {animals.length === 0 ? 
        <div className="flex items-center justify-center flex-col mt-32">
          <img src={emptystate} alt="" />
          <h1 className="font-semibold mt-8">Nenhum Animal Selecionado ;-;</h1>
          <button
            onClick={getAnimals}
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg mt-8"
          >
            Gerar um Novo Animal
          </button>
        </div> : 

        <div className="p-10 flex text flex-cols-1 sm:flex-cols-1 md:flex-cols-3 lg:flex-cols-3 xl:flex-cols-3 gap-5 justify-center">
          <div className="rounded-lg shadow-lg flex flex-col items-center mb-16 ">
            <img className="w-[270px] h-[270px] rounded-[50%] mt-4" src={animals.image_link} alt="" />
            <div className="px-6 py-4 mt-4">
              <div className="font-bold text-xl mb-2">
                {animals.name}
              </div>
              <ul>
                <li className="text-gray-700 text-base">
                  <strong>Nome em Latim:</strong> {animals.latin_name}
                </li>

                <li className="text-gray-700 text-base">
                  <strong>Habitat natural:</strong> {animals.habitat}
                </li>

                <li className="text-gray-700 text-base">
                  <strong>Dieta:</strong> {animals.diet}
                </li>

                <li className="text-gray-700 text-base">
                  <strong>Localização:</strong> {animals.geo_range}
                </li>
              </ul>
              <div className="mt-3 sm:mt-0 flex justify-center">
                <button
                  onClick={getAnimals}
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg mt-8"
                >
                  Gerar um Novo Animal
                </button>
              </div>
            </div>
          </div>
        </div>
        }
      </>
    )
  }

export default Detalhes;