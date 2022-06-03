import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter((prev) => prev + 1)
  }

  console.log("Call an api!");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
