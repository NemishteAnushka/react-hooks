import React, { useEffect, useState } from "react";

function AddEventListner() {
  const [showValue, setShowValues] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    console.log({ x: e.clientX, y: e.clientY });
    setShowValues({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <h1>Adding event listner</h1>
      <div>
        <h1>X : {showValue.x}</h1>
        <h1>Y : {showValue.y}</h1>
      </div>
    </div>
  );
}

export default AddEventListner;
