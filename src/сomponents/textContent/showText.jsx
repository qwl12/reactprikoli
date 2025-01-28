import { useState } from "react";

export  function Showtext  ({text})  {
    const [isExpanded, setIsExpanded] = useState(false);

    // Разделяем текст на предложения
    function getFirstText({text}) {
    const firstText = text.split(". ")[0] + "."; 
    return firstText;
    }
  
    return (
      <div className="p-4 max-w-lg border rounded-lg shadow">
        <p>{isExpanded ? text : getFirstText}</p>
        <button  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        
        onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Скрыть" : "Показать подробнее"}
        </button>
      </div>
    );
  }