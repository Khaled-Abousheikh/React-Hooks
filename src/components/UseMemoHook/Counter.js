import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTow, setCounterTow] = useState(0);
  const incOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incTow = () => {
    setCounterTow(counterTow + 1);
  };
  const isEven = useMemo(
    () => () => {
      let i = 0;
      while (i < 2000) i++;
      return counterOne % 2 === 0;
    },
    [counterOne]
  );
  return (
    <div>
      <div>
        <button onClick={incOne}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incTow}>Count Tow - {counterTow}</button>
      </div>
    </div>
  );
}

export default Counter;
