import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTow() {
  const [count, disptch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Counter 1 - {count.firstCounter}</div>
      <div>Counter 2 - {count.secondCounter}</div>

      <button onClick={() => disptch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => disptch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => disptch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => disptch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => disptch({ type: "increment2", value: 1 })}>
        Increment 2
      </button>
      <button onClick={() => disptch({ type: "decrement2", value: 1 })}>
        Decrement 2
      </button>
      <button onClick={() => disptch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTow;
