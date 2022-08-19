import React, { useState } from "react"

// Hooks can only be used inside function components
// Hooks must always be executed in the same order at the top level of function components
// Hooks can not be put inside if statements, loops or functions

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("black")

  // Anytime you are modifyng state using the previous value of state,
  // make sure to use the function version of setting state
  function decrementCount() {
    setCount((prevCount) => prevCount - 1)
    setColor(count - 1 === 0 ? "black" : count - 1 > 0 ? "green" : "red")
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1)
    setColor(count + 1 === 0 ? "black" : count + 1 > 0 ? "green" : "red")
  }

  return (
    <>
      <div
        style={{
          fontFamily: "sans-serif",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <h1>React Hooks</h1>
        <h2>UseState</h2>
        <div
          style={{
            fontSize: "3rem",
            display: "flex",
          }}
        >
          <button onClick={decrementCount}> - </button>
          <div style={{ width: "150px", textAlign: "center", color: color }}>
            {count}
          </div>
          <button onClick={incrementCount}> + </button>
        </div>
        <div>{color}</div>
      </div>
    </>
  )
}

export default App
