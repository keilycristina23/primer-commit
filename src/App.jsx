//import { useState } from 'react'
import './App.css'
import { componentesNav } from './assets/Components/NavBar';


const Container = 'hola keily';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <componentesNav></componentesNav>
   </div>
  )
}

export default App
