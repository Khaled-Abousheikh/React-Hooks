import React, { useState, useEffect } from "react";

function HookCounterFive() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  );
}

export default HookCounterFive;
