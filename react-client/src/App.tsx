import { useState } from 'react'
import './App.css'
import Field from './components/Field';
import Grid from './components/Grid'

function App() {
  const [count, setCount] = useState(0)

  // const response = fetch('http://localhost:5002/api/board/cleanBoard', {
  //   method: 'GET', 
  //   headers: {
  //     'Content-Type': 'application/json', // Content type if you're sending JSON
  //   },
  // });

  // const data = response;

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <Field occupied='x'/>
        <Field occupied='x'/>
      </div>
      <div>
        <Grid />
      </div>
      
    </>
  )
}

export default App
