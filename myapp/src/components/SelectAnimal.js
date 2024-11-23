import {animals} from '../data/animalDb';
import React from 'react';

export default function SelectAnimal({ onSelectAnimal }) {
    return (
      <div>
        <h2>Select the Animal</h2>
        <div>
          {animals.map((animal, index) => (
            <div key={index} onClick={() => onSelectAnimal(animal.name)}>
              <img 
                src={`../assets/img/${animal.img}`} 
                alt={animal.name} 
              />
            </div>
          ))}
        </div>
        );
        </div>
    );
}