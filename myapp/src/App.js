import './App.css';
import {useState, useEffect} from 'react';
import AnimalName from './components/AnimalName';
import SelectAnimal from './components/SelectAnimal';
import {animals} from './data/animalDb';
import Result from './components/Result';


function App() {
  const [displayedAnimal, setDisplayedani] = useState("");
  const [result, setResult ] = useState("");

  useEffect(()=>{
    generateRandomAnimal();
  },[]);

  const generateRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setDisplayedani(animals[randomIndex].name);
  }
    const handleSelectAnimal = (selectedAnimal) => {
      if (selectedAnimal === displayedAnimal) {
        setResult('win');
      } else {
        setResult('lose');
      }
    };

  return (
    <div className="App">
       <AnimalName name={displayedAnimal} />
       <SelectAnimal onSelectAnimal={handleSelectAnimal} />
       <Result result={result}/>
    </div>
  );
}

export default App;