import { useState, useEffect } from "react";

function Hello() {
  function byeFunc() {
    console.log("Bye :(");
  }

  function hiFunc() {
    console.log("Hi :)");
    return byeFunc;
  }

  useEffect(hiFunc, []);

  return (
    <h1>Hello</h1>
  )
}

function App() {
  const [showing, setShowing] = useState(false);

  const onClickBtn = () => {
    setShowing((prev) => !prev);
  }

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClickBtn}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
