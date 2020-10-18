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

function CounterThree() {
  const [count, disptch] = useReducer(reducer, initialState);
  const [countTow, dispatchTow] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => disptch("increment")}>Increment</button>
      <button onClick={() => disptch("decrement")}>Decrement</button>
      <button onClick={() => disptch("reset")}>Reset</button>
      <div>
        <div>Count 2 - {countTow}</div>
        <button onClick={() => dispatchTow("increment")}>Increment</button>
        <button onClick={() => dispatchTow("decrement")}>Decrement</button>
        <button onClick={() => dispatchTow("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
