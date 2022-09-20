import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(55)

  const increaseCount = () =>{
    const newCount = count + 1;
    setCount(newCount)
  }
  const decreaseCount = () => setCount(count-1)

  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
