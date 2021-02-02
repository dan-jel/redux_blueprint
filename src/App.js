import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>counter: {counter} </h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </div>
  );
}

export default App;
