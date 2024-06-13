import React, {useState} from "react";
import "./styles.css";


export const FaqSection = () => {
    const [expandCollapseState,setExpandCollapseState] = useState([true, true, true, true])

    const expandCollapse = (index) => {
        const newExpandCollapseState = [...expandCollapseState];
        newExpandCollapseState[index] = !newExpandCollapseState[index];
        setExpandCollapseState(newExpandCollapseState)
    }

  return (
    <div className="faq_screen">
      <div className="faq_title">Preguntas Frecuentes</div>
      <div className="faq_content">
        <div className="faq_tile" onClick={() => expandCollapse(0)}>
          <div className="faq_tile_collapse">
            <div className="faq_tile_title">
              <p>¿Cómo me registro en la plataforma?</p>
            </div>
            <div className="faq_tile_trail"></div>
          </div>
          <div
            className={
              expandCollapseState[0]
                ? "faq_tile_expanded hidden"
                : "faq_tile_expanded"
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              sint error accusantium ab, atque quidem illum illo, dolorum
              cupiditate dolorem voluptatum quasi. Maxime vel obcaecati autem
              eveniet nobis necessitatibus sapiente!
            </p>
          </div>
        </div>

        <div className="faq_tile" onClick={() => expandCollapse(1)}>
          <div className="faq_tile_collapse">
            <div className="faq_tile_title">
              <p>¿Qué planes tiene la plataforma?</p>
            </div>
            <div className="faq_tile_trail"></div>
          </div>
          <div
            className={
              expandCollapseState[1]
                ? "faq_tile_expanded hidden"
                : "faq_tile_expanded"
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              sint error accusantium ab, atque quidem illum illo, dolorum
              cupiditate dolorem voluptatum quasi. Maxime vel obcaecati autem
              eveniet nobis necessitatibus sapiente!
            </p>
          </div>
        </div>

        <div className="faq_tile" onClick={() => expandCollapse(2)}>
          <div className="faq_tile_collapse">
            <div className="faq_tile_title">
              <p>¿Qué funcionalidades ofrece?</p>
            </div>
            <div className="faq_tile_trail"></div>
          </div>
          <div
            className={
              expandCollapseState[2]
                ? "faq_tile_expanded hidden"
                : "faq_tile_expanded"
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              sint error accusantium ab, atque quidem illum illo, dolorum
              cupiditate dolorem voluptatum quasi. Maxime vel obcaecati autem
              eveniet nobis necessitatibus sapiente!
            </p>
          </div>
        </div>
        
        <div className="faq_tile" onClick={() => expandCollapse(3)}>
          <div className="faq_tile_collapse">
            <div className="faq_tile_title">
              <p>¿Obtengo algun premio si gano puntos?</p>
            </div>
            <div className="faq_tile_trail"></div>
          </div>
          <div
            className={
              expandCollapseState[3]
                ? "faq_tile_expanded hidden"
                : "faq_tile_expanded"
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              sint error accusantium ab, atque quidem illum illo, dolorum
              cupiditate dolorem voluptatum quasi. Maxime vel obcaecati autem
              eveniet nobis necessitatibus sapiente!
            </p>
          </div>
        </div>
         
      </div>
    </div>
  );
};
