import { useState } from "react";


function App() {

  let [counter,setCounter] = useState(5)

  const addValue = () => { 
    if(counter >= 10) return
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter <= 0) return
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
      <h1>React</h1>
      <h2>Vite</h2>
      <p>Value: {counter}</p>
      <button onClick={
        addValue
      }>Add Value ({counter})</button>
      <br />
      <br />
      <button onClick={
        removeValue
      }>Remove Value ({counter})</button>
    </>
  )
}

export default App
