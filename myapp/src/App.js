import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Result from './components/Result';
import Name from './components/AnimalName'
import Select from './components/SelectAnimal'
import { animals } from './assets/data/AnimalsDb';
import { useState } from 'react';

function App() {
  const [currentAnimal, setCurrentAnimal]=useState(
    animals[Math.floor(Math.random()* animals.length)]
  )
  const [result,setResult]=useState("")
  
  const selection = (selectedAnimal)=>{
    if(selectedAnimal===currentAnimal.name){
      setResult("Win")
    }else{
      setResult("Lose")
    }
  }
  return (
    <div className="App">
      <br/>
      <h1><span className='component-border'>Animal Matching Game </span></h1><br/>
      <Container>
        <Row>
          <Col xs={3}>
            <div className='component-border'>
              <Result result={result}/>
            </div>
          </Col>
          <Col xs={3}>
            <div className='component-border'>
              <Name name={currentAnimal.name}/>
            </div>
          </Col>
          <Col>
            <div className='component-border'>
              <Select animals={animals} selection={selection}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;