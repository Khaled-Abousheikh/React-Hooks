import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, disptch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => disptch("increment")}>Increment</button>
      <button onClick={() => disptch("decrement")}>Decrement</button>
      <button onClick={() => disptch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
