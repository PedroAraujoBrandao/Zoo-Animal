import React, { useState, useEffect } from 'react';
import api from '../../../../api';

export default function Cards() {
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        api
          .get('/animals/rand/9')
          .then(response => {
            setAnimals(response.data);
          })
        .catch((err) => {
          console.log(err);
        });
    }, []) 

    return (
        <>
            <div className="p-10 grid text grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-[1350px]">
                {animals.map(animal => (
                    <div className="rounded-lg shadow-lg flex flex-col items-center mb-16" key={animal.id}>
                        <img className="w-[270px] h-[270px] rounded-[50%] mt-4" src={animal.image_link} alt=""/>
                        <div className="px-6 py-4 mt-4">
                            <div className="font-bold text-xl mb-2">
                                {animal.name}
                            </div>
                            <ul>
                                <li className="text-gray-700 text-base">
                                    <strong>Nome em Latim:</strong> {animal.latin_name}
                                </li>

                                <li className="text-gray-700 text-base">
                                    <strong>Habitat natural:</strong> {animal.habitat}
                                </li>

                                <li className="text-gray-700 text-base">
                                    <strong>Dieta:</strong> {animal.diet}
                                </li>

                                <li className="text-gray-700 text-base">
                                    <strong>Localização:</strong> {animal.geo_range}
                                </li>
                            </ul>  
                        </div>
                    </div>
                ))}
            </div>
        </>        
    )
}