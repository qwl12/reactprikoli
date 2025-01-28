import { useState } from "react";
import "./style.css";
export function ToggleSquares() {
    const [color, setColor] = useState("green");
  
    return (
      <div className="flex gap-4 p-4">
        {color === "green" ? (
          <div
            className="w-20 h-20 bg-green-500 cursor-pointer"
            onClick={() => setColor("red")}
          ></div>
        ) : (
          <div
            className="w-20 h-20 bg-red-500 cursor-pointer"
            onClick={() => setColor("green")}
          ></div>
        )}
      </div>
    );
  }