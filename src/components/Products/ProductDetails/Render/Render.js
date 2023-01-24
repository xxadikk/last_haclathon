import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "../Render/Render.css";

export default function Render() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div>
      <h1 id="ren">{count}</h1>
      <button onClick={decrement}>
        <RemoveIcon id="plus" />
      </button>
      <button onClick={increment}>
        <AddIcon id="plus" />
      </button>
    </div>
  );
}
