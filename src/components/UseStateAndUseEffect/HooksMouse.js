import React, { useState, useEffect } from "react";

function HooksMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePos = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log(" useEffect Called");
    window.addEventListener("mousemove", logMousePos);
    return () => {
      console.log(" unmounted");
      window.removeEventListener("mousemove", logMousePos);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HooksMouse;
