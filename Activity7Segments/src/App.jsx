import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SevenSegments1 from './Components/SevenSegments1'
import SevenSegments2 from './Components/SevenSegments2'

function App() {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      if (count < 9) {
        setCount(count + 1);
      } else {
        setCount(0); // Reinicia a cero si llega a 9
      }
    };  
  

  return (
    <>
    <SevenSegments1 digit={1} />
    <SevenSegments2 digit2={count}/> 
      <button onClick={increment}>+ 1</button>
    </>
  )
}

export default App;