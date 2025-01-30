import React from "react";
import './style.css';

export default function StarRating({ maxStars, selectedStars }) {
  return (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, index) => (
        <span key={index} className={index < selectedStars ? "text-yellow-500" : "text-gray-400"}>
          ★
        </span>
      ))}
    </div>
  );
}
