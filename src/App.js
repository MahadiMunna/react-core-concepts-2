import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternaUsers></ExternaUsers>
    </div>
  );
}

function ExternaUsers () {
  const [users, setUsers] = useState([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])
  return(
  <div>
    <h2>External Users</h2>
    <p>{users.length}</p>
    {
      users.map(user => <Users name={user.name} email={user.email}></Users>)
    }
  </div>
  )
}

function Users (props){
  return(
    <div className='product'>
      <h2>Name : {props.name}</h2>
      <h2>Email : {props.email}</h2>
    </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(55)

//   const increaseCount = () =>{
//     const newCount = count + 1;
//     setCount(newCount)
//   }
//   const decreaseCount = () => setCount(count-1)

//   return(
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

// function Product(props){
//   return (
//     <div className='product'>
//       <h3>Name: {props.name} </h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }

export default App;
