import { useState } from "react";

export  function Showtext  ({text})  {
    const [isExpanded, setIsExpanded] = useState(false);

    // Разделяем текст на предложения
    function getFirstText(text) {
      let firstText = text; 
      firstText = firstText.split(". ")[0] + "."; 
      return firstText;
    }
  
    return (
      <div className="">
        <p>{isExpanded ? text : getFirstText(text)}</p>
        <button  className=""
        
        onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Скрыть" : "Показать подробнее"}
        </button>
      </div>
    );
  }