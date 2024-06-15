import React, { useState } from "react";
import "./styles.css";

export const FaqSection = () => {
  const [expandCollapseState, setExpandCollapseState] = useState([true, true, true, true]);

  const expandCollapse = (index) => {
    const newExpandCollapseState = [...expandCollapseState];
    newExpandCollapseState[index] = !newExpandCollapseState[index];
    setExpandCollapseState(newExpandCollapseState);
  };

  return (
    <div className="faq_screen">
      <div className="faq_title">Preguntas Frecuentes</div>
      <div className="faq_content">
        {[
          "¿Cómo me registro en la plataforma?",
          "¿Qué planes tiene la plataforma?",
          "¿Qué funcionalidades ofrece?",
          "¿Obtengo algún premio si gano puntos?"
        ].map((question, index) => (
          <div className="faq_tile" onClick={() => expandCollapse(index)} key={index}>
            <div className="faq_tile_collapse">
              <div className="faq_tile_title">
                <p>{question}</p>
                <span className={`arrow ${expandCollapseState[index] ? "right" : "down"}`}>›</span>
              </div>
            </div>
            <div className={expandCollapseState[index] ? "faq_tile_expanded hidden" : "faq_tile_expanded"}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint error accusantium ab, atque quidem
                illum illo, dolorum cupiditate dolorem voluptatum quasi. Maxime vel obcaecati autem eveniet nobis
                necessitatibus sapiente!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
